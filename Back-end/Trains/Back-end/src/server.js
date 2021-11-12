const app = require('./index')
const connect = require('./configs/db')


app.listen(7448,async(req,res)=>{
    await connect();
    console.log('Listening on port 7448..........')
})

