import findFreePortInRange from './port-utils'

async function main(){
    return await findFreePortInRange(4000,4500)
}

main()
    .then(console.log)
