import * as net from "net";

async function findFreePortInRange(
  start: number,
  end: number
): Promise<number> {
  let current = start;
  while (current <= end) {
    const server = net.createServer();
    server.unref();
    try {
      await new Promise((resolve, reject) => {
        server.once("error", (err) => {
          reject(err);
        });
        server.listen(current, () => resolve(true));
      });
      const { port } = server.address() as net.AddressInfo;
      return port;
    } catch (err) {
      current++;
    }
  }
  throw new Error(`No unused ports found in range ${start}-${end}`);
}

export default findFreePortInRange;
