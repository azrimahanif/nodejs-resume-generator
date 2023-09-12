const express = require("express");
// create server
const app = express();
const PORT = 3000;
const resumeController = require("./controllers/get/resumeController");





app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post("/generate", resumeController.generate);
app.get("/", resumeController.index);





//start server
app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});