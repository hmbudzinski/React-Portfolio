const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("portfolio/build"));
}else {
  app.use(express.static("portfolio/public"))
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(require('./routes'));

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => {
    console.log("err: ", error)
  })

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!!!`);
});
