const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const port = process.env.PORT || 5000



const app = express()

const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true
}


app.use(cors(corsOptions))
app.use(express.json())


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



        //==================== menu item route start =======================
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
        app.post('/cart', async (req, res) => {
            const reqBody = req.body
            const result = await cartCollection.insertOne(reqBody)
            res.send(result)
        })


        // ================= find cart item =========================
        app.get('/cart/:email', async (req, res) => {
            const userEmail = req.params.email
            const filter = { email: userEmail }
            const result = await cartCollection.find(filter).toArray()
            res.send(result)
        })


        // ================== Delete Cart item =================
        app.delete('/delete/:id', async (req, res) => {
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


        //==================== all user get =======================
        app.get('/users', async (req, res) => {
            const result = await usersCollection.find().toArray()
            res.send(result)
        })

        //==================== user Delete route ===================
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.deleteOne(query)
            res.send(result)
        })


        //==================== User update =======================
        app.patch('/user/:id', async (req, res) => {
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

        //==================== menu item post request end ===================







        //==================== carts items get request start ===================

        //==================== carts items get request end ===================



        //==================== carts items post request start ===================

        //==================== carts items delete request end ===================



        //==================== carts items delete request start ===================

        //==================== carts items delete request end ===================

        //=================== Payment Intent =================================




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


