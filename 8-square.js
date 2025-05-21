
const count = parseInt(process.argv[2])

if (count) {
    for (let i = 1; i <= count; i++) {
        console.log("X".repeat(count))
    }
} else {
    console.log('Missing size')
}
