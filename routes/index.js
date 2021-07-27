var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var email = "";
  var name = "";
  if(req.body.action == 'thumbs_up'){
    email = "swapnithpindi1@gmail.com";
    name = "swapnith";
  }else{
    email = "macharlaranjith71@gmail.com"
    name = "ranjith";
  }
  const mailjet = require ('node-mailjet')
.connect('ab7bf40ef737993df803847be1b37660', '19bed21a2c04bb0e3bb1d27878a04e84')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "parthasai88@gmail.com",
        "Name": "Guttikonda"
      },
      "To": [
        {
          "Email": email,
          "Name": name
        }
      ],
      "Subject": "Greetings from Pardhu.",
      "TextPart": "Hello "+req.body.action+" occured",
      "HTMLPart": "<h1>Hello " +name+ " pardhu just now "+req.body.action+" in the pressence of camera</h1>",
      "CustomID": "3-2 project"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

  res.status(200).send("Email sent to"+name);
});

module.exports = router;
