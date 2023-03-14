const express = require("express");
const path = require("path");
const db = require("./config/connection");

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get('*', function (req, res) { 

    router.run(routes, req.path, function (Handler, state) {
        var element = React.createElement(Handler);
        var html = React.renderToString(element);
        res.render('main', { content: html });
    });
});
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
