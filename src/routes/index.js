const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    //Done routes
    app.use('/news', newsRouter);

    app.get('/', siteRouter)
      
    app.get('/search', siteRouter)
}

module.exports = route;