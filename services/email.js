/*
@title Example Email send
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/

module.exports = function(req, res, next){
  this.request({
        uri     : 'api/email'
      , method  : 'POST'
      , json    : {
          to      : 'hello@taskmill.io'
        , from    : 'hello@taskmill.io'
        , subject : 'subject: ' + req.body
        , text    : req.body
      }
    })
    .pipe(res);
};