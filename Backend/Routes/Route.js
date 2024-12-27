const Getsuccessdata = require("../Components/Getsuccessdata");
const Postdata = require("../Components/Postdata");

const router = require("express").Router();

router.route("/data").post(Postdata,Getsuccessdata);

module.exports = router;