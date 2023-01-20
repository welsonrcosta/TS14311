import http from "http";
const servers: Array<http.Server> = [];

function spamServers(n: number) {
  const start = 4000;
  const end = start + n - 1;
  const range = [...Array(1 + end - start).keys()].map((v) => start + v);
  console.log(`Trying to spam ${range.length} servers`);

  range.forEach((port) => {
    const server = http.createServer();
    server.on("error", () => {
      //ignore errs
    });
    server.listen(port);
    servers.push(server);
  });
}

function killServers() {
  servers.forEach((server) => {
    server.unref();
    server.close();
  });
}

export { spamServers, killServers };
