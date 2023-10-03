let num = [1, 2, 2];


function makeDouble(input) {
    let result = input.reduce((init, total) => {
        return init + total ** 2
    }, 0)
    console.log(result);
}

makeDouble(num);
