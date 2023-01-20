import {spamServers, killServers} from "@ts14311/spam-servers"
import findFreePortInRange from "@ts14311/using-netstat"
import findFreePortInRangeS from "@ts14311/using-node-server"

async function main() {
    spamServers()


    for(let i = 0; i< 10; i++){
        console.time(`using-netstat${i}`)
        await findFreePortInRange(4000,4500)
        console.timeEnd(`using-netstat${i}`)
    }


    for(let i = 0; i< 10; i++){
        console.time(`using-node-server${i}`)
        await findFreePortInRangeS(4000,4500)
        console.timeEnd(`using-node-server${i}`)
    }

    killServers();

}

main()
