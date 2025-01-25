const express=require("express");
const app=express();
const PORT=process.env.PORT||9000;
const cors=require("cors");


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.send("Hello World");
})


//mongodb configuration
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://book-store:9dui3FkHF1qxJ6kD@cluster0.fdr9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    await client.connect();
    const bookCollection=client.db("BookInventory").collection("books");
    app.post("/upload-book", async(req,res)=>{
        const data=req.body;
        const result=await bookCollection.insertOne(data);
        res.send(result);
    })
    // app.get("/all-books",async(req,res)=>{
    //     const books = bookCollection.find()
    //     const result= await books.toArray();
    //     res.send(result);
    // })

    app.patch("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const data=req.body;
        const result=await bookCollection.updateOne({_id:new ObjectId(id)},{$set:data});
        res.send(result);
    })

    app.delete("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const result=await bookCollection.deleteOne({_id:new ObjectId(id)});
        res.send(result);
    })
    app.get("/all-books",async(req,res)=>{
        let query={};
        if(req.query?.category){
            query={category:req.query.category}
        }
        const result=await bookCollection.find(query).toArray();
        res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})