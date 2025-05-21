
const count = parseInt(process.argv[2])

if (count) {
    for (let i = 1; i <= count; i++) {
        console.log("C is fun")
    }
} else {
    console.log('Missing number of occurrences')
}
