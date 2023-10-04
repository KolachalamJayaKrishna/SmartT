module.exports.about = function(req, res) {
  res.render('generic-text', {
  title: 'About smarTT',
  content: 'get into the world of smart time table where you can get to make your schedule easy'
  });
  };
  

/* GET 'signin' page */
module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'enjoy the app by signin'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'This hepls you a lot'
  }