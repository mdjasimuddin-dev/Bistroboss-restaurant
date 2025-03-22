const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')
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
        //==================== reviews route start  ===================


        // ================= single data get start =========================



        // ============================ single data get end =========================



        // ================== Item Update patch request start =================

        // ================== Item Update patch request end =================



        //==================== menu item post request =======================

        //==================== menu item post request end ===================


        //==================== menu item post request =======================

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


