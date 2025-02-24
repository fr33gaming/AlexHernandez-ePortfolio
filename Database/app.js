// express framework using the ES6 module system
//Artifact three changes
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { dogs } from './public/DogList.js';
import { monkeys } from './public/MonkeyList.js';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';


// calls the express function
const app = express();
// loads the .env file
dotenv.config();
// enables CORS
app.use(cors());
// enables express to parse JSON
app.use(express.json());

// brings in dirname to es6 module system
const __dirname = dirname(fileURLToPath(import.meta.url));

// pulling fields from the .env file
const port = process.env.port;
const username = process.env.MONGODB_USERNAME;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);

// connection string
const uri = `mongodb+srv://${username}:${password}@cluster0.ew43p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// creating a new MongoClient
const client = new MongoClient(uri);

// function to connect to the database
async function run() {

    try {

        // connect the client to the server
        await client.connect();

        // connect to the database
        const animalDatabase = client.db('rescue-animals');        
        const dogCollection = animalDatabase.collection('dogs');
        const monkeyCollection = animalDatabase.collection('monkeys');

        // log to the console that db is connected
        console.log('Connected to db');

        // serve static files
        app.use('/static', express.static(path.join(__dirname, 'public')));
        app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

        // routes
        // home route
        app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });

        // HOME button on index.html routes back to index.html
        app.get('/index.html', (req, res)=>{
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });

        // add sample dogs to database
        const addSampleDogs = await dogCollection.countDocuments();
        if (addSampleDogs === 0) {
            await dogCollection.insertMany(dogs);
            console.log("Sample dogs added");
        }

        // add sample monkeys to database
        const addSampleMonkeys = await monkeyCollection.countDocuments();
        if (addSampleMonkeys === 0) {
            await monkeyCollection.insertMany(monkeys);
            console.log("Sample monkeys added");
        }

        // add dog to database from form on index.html
        app.post('/addDog', async (req, res) => {
            await dogCollection.insertOne(req.body);
            console.log("Dog added");
            res.send('Dog added');

        });

        // delete dog from database
        app.delete('/deleteDog/:id', async (req, res) => {
            const dogId = req.params.id;
            const result = await dogCollection.deleteOne({ _id: new ObjectId(dogId) 

            });
        });


        // get all dogs from database
        app.get('/getDogs', async (req, res) => {
            try {
            const findDogs = await dogCollection.find({}).toArray();
            res.json(findDogs);
            //dogs.push(findDogs);
            }
            catch (error) {
            console.error(error);
            }
        });
        
        // add monkey to database from form on index.html
        app.post('/addMonkey', async (req, res) => {
            await monkeyCollection.insertOne(req.body);
            console.log("Monkey added");
            res.send('Monkey added');
        });

        // delete monkey from database
        app.delete('/deleteMonkey/:id', async (req, res) => {
            const monkeyId = req.params.id;
            const result = await monkeyCollection.deleteOne({ _id: new ObjectId(monkeyId)
            });
        });

        // get all monkeys from database                
        app.get('/getMonkeys', async (req, res) => {
            const findMonkeys = await monkeyCollection.find({}).toArray();
            res.json(findMonkeys);
            monkeys.push(findMonkeys);
        });

        // start the server
        app.listen(port, () => {
        console.log('Server listening on port 4000');
        });

    //     close the connection
    } catch (error) {
        console.error(error);
    }
   
    
}

// run the function
run().catch(console.dir);



