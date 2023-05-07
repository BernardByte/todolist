const mongoose = require('mongoose');


const mongoDB = async ()=>{
       try {
        await mongoose.connect(process.env.Mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}
    
module.exports = mongoDB;