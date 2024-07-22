const express = require("express");
const app = express()
app.get("/", (req, res) => {
	res.status(200).send({data : "This bash Script executed Successfully. To change the contentof the server, edit index.js file"})
});

app.listen(9000, () => {
console.log("Server Started")
});
