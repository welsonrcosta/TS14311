import {execSync} from 'child_process'

async function findFreePortInRange(start: number, end: number): Promise<number> {
    let current = start;
    const usedPorts = execSync("netstat -an -ptcp").toString()

    while (current <= end) {
      const isPortUsed =  RegExp(`${current}`).test(usedPorts)
      if(!isPortUsed){
        return current
      }
      current++
    }
    throw new Error(`No unused ports found in range ${start}-${end}`);
  }

export default findFreePortInRange
