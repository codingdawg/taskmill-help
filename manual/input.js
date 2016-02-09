/*
@title Set input schema
@input
{
  "content-type" : "text/plain",
  "example" : "Some text on the request body"
}
*/

module.exports = function(req, res, next) {
  var type = typeof req.body;
  res.send(type);
};