const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const port = process.env.PORT || 5000
const jwt = require('jsonwebtoken')





const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true
}

// middleware 
app.use(cors(corsOptions))
app.use(express.json())

// mongodb url 
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.wukjrsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});





async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection

        const usersCollection = client.db('bistroDB').collection('users')
        const menuCollection = client.db('bistroDB').collection('menu')
        const reviewCollection = client.db('bistroDB').collection('reviews')
        const cartCollection = client.db('bistroDB').collection('carts');


        //================== jwt token create route ====================
        app.post('/createToken', (req, res) => {
            const reqBody = req.body
            // console.log(reqBody);
            const token = jwt.sign(reqBody, process.env.TOKEN_SECRETE_KEY, {
                expiresIn: '1d',
            })
            res.send({ token })
        })

        // middlewares
        const TokenVerify = (req, res, next) => {
            const authToken = req?.headers?.authorization
            console.log("Token Received", authToken);

            if (!authToken) {
                return res.status(401).send({ message: "Unauthorized access" });
            }

            const tokenValue = authToken.split(' ')[1]

            jwt.verify(tokenValue, process.env.TOKEN_SECRETE_KEY, (err, decoded) => {
                if (err) {
                    console.log("Token Verify Failed");
                    return res.status(403).send({ message: "Forbidden Access" });
                }
                req.decoded = decoded
                console.log(req?.decoded);
                next()
            })

        }


        // use verify admin after verifyToken
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email
            console.log(email);
            const query = { email: email }
            const user = await usersCollection.findOne(query)
            const admin = user?.role === 'admin'
            if (!admin) {
                return res.status(403).send({ message: "You are not a admin, forbidden access" })
            }
            next()
        }


        // user related api 

        //==================== all user get =======================
        app.get('/allusers', TokenVerify, verifyAdmin, async (req, res) => {
            const result = await usersCollection.find().toArray()
            res.send(result)
        })


        //==================== admin route check ===================
        app.get('/user/admin/:email', TokenVerify, async (req, res) => {
            const email = req?.params?.email
            const data = req.decoded
            const query = { email: email }
            console.log("This is Verify Email", data)
            console.log("Params Email", email);

            if (email !== req.decoded.email) {
                return res.send({ message: "Unauthorize Access Request" })
            }

            const user = await usersCollection.findOne(query);

            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }

            let admin = false;
            if (user) {
                admin = user?.role === "admin";
            }
            console.log({ admin });
            res.send({ admin })
        })


        // menu item route start
        app.get('/menu', async (req, res) => {
            const result = await menuCollection.find().toArray()
            res.send(result)
        })
        //==================== menu item route start end =======================



        //==================== reviews route start  ===================
        app.get('/reviews', async (req, res) => {
            const result = await reviewCollection.find().toArray()
            res.send(result)
        })
        //==================== reviews route close  ===================


        // ================= add to Cart route  =========================
        app.post('/cart', TokenVerify, async (req, res) => {
            const reqBody = req.body
            const result = await cartCollection.insertOne(reqBody)
            res.send(result)
        })


        // ================= find cart item =========================
        app.get('/cart/:email', TokenVerify, async (req, res) => {
            const userEmail = req.params.email
            const filter = { email: userEmail }
            const result = await cartCollection.find(filter).toArray()
            res.send(result)
        })


        // ================== Delete Cart item =================
        app.delete('/delete/:id', TokenVerify, async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const result = await cartCollection.deleteOne(filter)
            res.send(result)
        })

        // ================== User store in Database =================
        app.post('/user', async (req, res) => {
            const reqBody = req.body
            const query = { email: reqBody.email }
            const isExit = await usersCollection.findOne(query)
            if (isExit) {
                return res.send({ message: "User already existing", insertedId: null })
            }
            const result = await usersCollection.insertOne(reqBody)
            res.send(result)
        })




        //==================== user Delete route ===================
        app.delete('/user/:id', TokenVerify, verifyAdmin, async (req, res) => {
            console.log(req.headers);
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.deleteOne(query)
            res.send(result)
        })


        //==================== User role update =======================
        app.patch('/user/:id', TokenVerify, verifyAdmin, async (req, res) => {
            console.log(req.headers);
            const id = req.params.id
            const reqBody = req.body

            const updateInfo = {
                $set: {
                    role: reqBody.role
                }
            }

            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.updateOne(query, updateInfo, { upsert: true })
            res.send(result);
        })










        await client.db("admin").command({ ping: 1 });
        console.log("Database connected successfully");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Bistro boss server start")
})


app.listen(port, () => {
    console.log(`Server Start Port is : ${port}`);
})


