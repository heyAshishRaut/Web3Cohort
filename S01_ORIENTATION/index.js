import crypto from "crypto"

// 01
const input = "100xDevs"
const hash = crypto.createHash(`sha256`).update(input).digest('hex')

console.log(hash)
// 65120f385b93f7aff7dac9797e75c9603b46c1d9e0ad7c5e357c164dae884b2c



// 02 - Give me an input string that outputs SHA-256 hash that starts with 00000.
function find (prefix) {
    let nounce = 0
    while(true) {
        let input_str = nounce.toString()
        let hash = crypto.createHash(`sha256`).update(input_str).digest(`hex`)
        if(hash.startsWith(prefix)) {
            console.log(`Input String - ` + input_str)
            console.log(`Hash - ` + hash)
            return
        }
        nounce++
    }
}

find(`0000`)
// Input String - 88484
// Hash - 0000a456e7b5a5eb059e721fb431436883143101275c4077f83fe70298f5623d



// 03 - What if I ask you that the input string should start with 100xdevs ?
function find (prefix, input) {
    let nounce = 0
    while(true) {
        let input_str = input + nounce.toString()
        let hash = crypto.createHash(`sha256`).update(input_str).digest(`hex`)
        if(hash.startsWith(prefix)) {
            console.log(`Input String - ` + input_str)
            console.log(`Hash - ` + hash)
            return
        }
        nounce++
    }
}

const input = `100xDevs`
find(`0000`, input)
// // Input String - 100xDevs111443
// // Hash - 000085833deb4452782d5d6f63b96bbc15da2829289f1c4db14503398b648616



// 04 - What if I ask you that the input string should start with 100xdevs ?
function find (prefix, input) {
    let nounce = 0
    while(true) {
        let input_str = input.toString() + nounce.toString()
        let hash = crypto.createHash(`sha256`).update(input_str).digest(`hex`)
        if(hash.startsWith(prefix)) {
            console.log(`Input String - ` + input_str)
            console.log(`Hash - ` + hash)
            return
        }
        nounce++
    }
}

const input =
    `
    harkirat => Ram | Rs 100
    Ram => Ankit | Rs 10
    `
find(`00000`, input)
// Input String -
// harkirat => Ram | Rs 100
// Ram => Ankit | Rs 10
// 2616539
// Hash - 000009db1b923007c1da5fb11ac401e4b274dc5bb3f2d30b3fa3ba2eae26129d