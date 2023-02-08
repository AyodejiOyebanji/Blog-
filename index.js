const jsonServer = require('json-server');
const server = jsonServer.create();
const render = jsonServer.router("./blog.json");
const middleware= jsonServer.defaults()


server.use(middleware);
server.use(render);
server.listen(5004);