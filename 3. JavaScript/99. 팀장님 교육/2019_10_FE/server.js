const path = require('path');
const express = require('express');
const app = express();
const razor = require('node-razor');

//node razor template 추가 
app.engine('vash', razor({
  layout: 'layout',
  // ext: ".cshtml",
  layoutDir: path.resolve('ECERP/Views/Shared'),
}));
app.set('view engine', 'vash');
app.set('views', path.resolve('ECERP/Views/Shared'));


app.use(express.urlencoded());
app.use(express.json());

app.use(express.static('./'));

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

app.listen(2222, function () {
  console.log('Express server listening on port ' + 8888);
});

app.get('/ECERP/ECP/sample.html', function (req, resp, next) {
  console.log(req.query)
  if (req.query.a == 1) {
    resp.render('sample', {
      layout: null,
      title: "ECOUNT"
    });
  } else {
    resp.render('sample', {
      layout: 'layout',
      title: "ECOUNT"
    });
  }
})

app.get('/ECERP/ECP/ECP001M', function (req, resp, next) {
  console.log(req.query)
    resp.render('ECP001M', {
      layout: null,
      title: "ECOUNT"
    });
})

app.get('/ECERP/ECP/ECP002M', function (req, resp, next) {
  console.log(req.query)
    resp.render('ECP002M', {
      layout: null,
      title: "ECOUNT"
    });
})