/*
@title Example SMS send
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/

module.exports = function(req, res, next){
  this.request({
        uri     : 'api/sms'
      , method  : 'POST'
      , json    : {
          'to' : '+12532143749',
          'body' : req.body
        }
    })
    .pipe(res);
};