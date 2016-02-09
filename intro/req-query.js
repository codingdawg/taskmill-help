/*
@title Request Query String
@query
{
  "example" : "$top=5&$skip=2&$select=name,age,species"
}
*/

module.exports = function(req, res, next) {
  res.send(req.query);
};