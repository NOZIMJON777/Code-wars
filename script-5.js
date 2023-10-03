let arr = [1, -4, 7, 12];


function name(num) {
    let filtered = num.filter((value) => value > 0);

    let result = filtered.reduce((init, total) => {
        return init + total
    }, 0)

    console.log(result);
}

name(arr);

