const apiRoute = require('../api/apiRoutes');
const user = require('../api/components/user/network');
const supplier = require('../api/components/supplier/network');

const routes = (server) => {
  server.use('/api/user', user);
  server.use('/api/supplier', supplier);
  server.use('/api', apiRoute);
};

module.exports = routes;
