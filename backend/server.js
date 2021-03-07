const http = require("http");
const app = require("./app");
let port = 4000;
 
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return val;
};

const errorHandler = (error, server) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.log(`${bind} requiert des privilèges plus élevés`);
      process.exit(1);

    case "EADDRINUSE":
      console.log(`${bind} est déjà utilisé`);
      process.exit(1);

    default:
      throw error;
  }
};

port = normalizePort(port || 3000);
app.set("port", port);

const server = http.createServer(app);

server.on("error", (error) => errorHandler(error, server, port));
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? `pipe ${address}` : `port : ${port}`;
  console.log(`Listening on ${bind}`);
});

server.listen(port);

process.on("SIGTERM", () =>
  server.close(() => console.log("Process terminated"))
);