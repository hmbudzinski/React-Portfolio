const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use(function (req, res) {
    console.log(req.body)
    res.sendFile(path.join(__dirname, "./portfolio/public/index.html"))
});

module.exports = router

