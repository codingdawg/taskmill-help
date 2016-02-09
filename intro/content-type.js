/*
@title Intro to setting Content-Type
*/

module.exports = function(req, res, next) {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World!');
};