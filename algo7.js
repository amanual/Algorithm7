// Array With Odd Numbers
var oddArray = [];
for (var i = 0; i <= 255; i++) {
    if (i % 2 != 0) {
        oddArray.push(i);
    }
}
console.log(oddArray);