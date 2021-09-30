const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
       await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       });
       console.log('DB online');
    } catch (error) {
        console.log(error);
        // throw new Error('Error at init DBase')
    }

}


module.exports = {
    dbConnection
}