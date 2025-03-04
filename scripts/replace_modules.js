var fs = require('fs');
var layoutJsPath = './node_modules/@umijs/plugins/dist/layout.js';
fs.readFile(layoutJsPath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/@ant-design\/pro/g, '@drbt-design/pro');

  fs.writeFile(layoutJsPath, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
