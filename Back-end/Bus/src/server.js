const { port, app } = require('./index');
const connect = require('./config/db')

app.listen(port, async () => {
    await connect();
    console.log(`Listeining at ${port}`);
});
