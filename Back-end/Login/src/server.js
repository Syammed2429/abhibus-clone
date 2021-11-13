const app = require("./index");
const connect = require("./config/db");
app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});