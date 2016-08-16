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
        to      : 'hello@taskmill.io'
      , from    : 'hello@taskmill.io'
      , subject : 'subject: ' + req.body
      , text    : req.body
    })
    .then((result) => res.send(result))
};