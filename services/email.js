/*
@title Example Email send
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/

module.exports = function(req, res, next){
  this.email({
        to      : 'praveen.reddy@docusign.com'
      , from    : 'praveen.reddy@docusign.com'
      , subject : 'subject: ' + req.body
      , text    : req.body
    })
    .then((result) => res.send(result))
};
