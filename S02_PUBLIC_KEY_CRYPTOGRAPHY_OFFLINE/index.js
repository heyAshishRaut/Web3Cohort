// 01. What do you think happens to the first element here? Does it throw an error?
// let uint8Arr = new Uint8Array([0, 255, 127, 128]);
// uint8Arr[1] = 300;

// 300 mod 256 = 44
// Uint8Array(4) [0, 44, 127, 128]

// 02. What is 11001010 converted to in decimal ?
let binary = 11001010
let power = 0
let value = 0

while(binary > 0) {
    let digit = binary % 10
    value = value + (digit * Math.pow(2, power++))
    binary = Math.floor(binary / 10)
}
console.log(value) // 202