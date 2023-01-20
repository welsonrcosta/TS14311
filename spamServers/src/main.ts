import http from "http";
const servers = [];
const start = 4000;
const end = 4499;
const range = [...Array(1 + end - start).keys()].map((v) => start + v);
function main() {
  console.log(`Trying to spam ${range.length} servers`);

  range.forEach((port) => {
      const server = http.createServer();
      server.on("error", () =>{
        //ignore errs
      })
      server.listen(port);
      servers.push(server);
  });
}

main();
