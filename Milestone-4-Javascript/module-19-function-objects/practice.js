// 1.

function foo() {
    console.log('foo')
    bar()
}

function bar() {
    console.log('bar');
}

// foo()

// 2.

function make_avg(x, y, z) {
    var sum = x + y + z;
    var avg = sum / 3;
    return avg;
}

var x = 10;
var y = 20;
var z = 10;

var result = make_avg(x, y, z)


// console.log(result);

// 3. 
var arr = [40, 30, 30]
function make_avg_arr(sum) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {

        var avg = sum += arr[i] / arr.length

    }
    return avg
}


console.log(make_avg_arr(arr))
