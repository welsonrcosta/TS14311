import { spamServers, killServers } from "@ts14311/spam-servers";
import findFreePortInRange from "@ts14311/using-netstat";
import findFreePortInRangeS from "@ts14311/using-node-server";

const tests = [15, 100, 500, 1000];

async function usingNservers(n: number) {
  spamServers(n);

  for (let i = 0; i < 10; i++) {
    console.time(`${n}servers-using-netstat${i}`);
    await findFreePortInRange(4000, 5000);
    console.timeEnd(`${n}servers-using-netstat${i}`);
  }

  for (let i = 0; i < 10; i++) {
    console.time(`${n}servers-using-node-server${i}`);
    await findFreePortInRangeS(4000, 5000);
    console.timeEnd(`${n}servers-using-node-server${i}`);
  }

  killServers();
}

(async () => {
  for (let test of tests) {
    await usingNservers(test);
  }
})();
