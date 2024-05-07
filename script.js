/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = Array.from(s);
    let symbol = arr.map(function (element) {
        return element.toString()
    });
    console.log(symbol);
    let value;
    let sym;
    let r = 0;
    let add = 0;
    let prevValue = 0;
    symbol.reverse();
    while (r < symbol.length) {
        sym = symbol[r]
        switch (sym) {
            case 'IV':
                value = 4;
                break;
            case 'IX':
                value = 9;
                break;
            case 'XL':
                value = 40;
                break;
            case 'XC':
                value = 90;
                break;
            case 'CD':
                value = 400;
                break;
            case 'CM':
                value = 900;
                break;
            case 'I':
                value = 1;
                break;
            case 'V':
                value = 5;
                break;
            case 'X':
                value = 10;
                break;
            case 'L':
                value = 50;
                break;
            case 'C':
                value = 100;
                break;
            case 'D':
                value = 500;
                break;
            case 'M':
                value = 1000;
                break;
            default:
                break;

        }
        let currentValue = value;
        if (currentValue < prevValue) {
            add = add - currentValue;
        }
        else {
            add += currentValue;
        }

        prevValue = currentValue;
        r += 1;

    }
    return add
};
