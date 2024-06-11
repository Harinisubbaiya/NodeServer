const app = require('./app');
const dotenv = require ('dotenv');
const path = require('path');
const connectDataBase = require('./config/database');

dotenv.config({path:path.join(__dirname, "config","config.env")});

connectDataBase();
const server = app.listen(process.env.PORT, () =>{
    console.log(`server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(`error ${err.message}`)
    console.log('shutting the server down due to unhandled rejection')
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`error ${err.message}`)
    console.log('shutting the server down due to uncaught Exception')
    server.close(()=>{
        process.exit(1);
    })
})

