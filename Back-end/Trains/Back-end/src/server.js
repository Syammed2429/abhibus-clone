const app = require('./index')
const connect = require('./configs/db')


app.listen(2924,async(req,res)=>{
    await connect();
    console.log('Listening on port 7448..........')
})

