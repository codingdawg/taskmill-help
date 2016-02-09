/*
@title Request Body
@input
{
  "content-type" : "application/json",
  "example" : { "name" : "Troubles", "age" : 5, "species" : "cat" }
}
*/

module.exports = function(req, res, next) {
  res.send(req.body);
};