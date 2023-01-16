module.exports = function toReadable(number) {
    let numListUnits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    let numListTensFull = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    let numListShort = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let remainderNumberByHundred = number % 100;
    let integerNumberByHundred = parseInt(number / 100);
    let remainderByTenRemainderNumberByHundred = (number % 100) % 10;
    let integerByTenRemainderNumberByHundred = parseInt((number % 100) / 10);

    if (integerNumberByHundred === 0 && remainderNumberByHundred === 0) {
        return numListUnits[number]; // here we check 0 and
    } else if (integerNumberByHundred === 0 && remainderNumberByHundred > 0) {  // here we check numbers under 100 (1-99)
        if (remainderNumberByHundred < 20) { // here we check one-word numbers under 20
            return numListUnits[number];
        } else if (remainderByTenRemainderNumberByHundred == 0) { // here we check one-word numbers under 100 like 20, 30, 60 etc.
            return numListTensFull[number];
        } else {
            return numListShort[integerByTenRemainderNumberByHundred] + ' ' + numListUnits[remainderByTenRemainderNumberByHundred]; // here we check two-word numbers
        };
    };


    function twoNum(number) {
        if (integerNumberByHundred > 0 && remainderNumberByHundred > 0) {  // here we check numbers under 100 (1-99)
            if (remainderNumberByHundred < 20) { // here we check one-word numbers under 20
                return numListUnits[number];
            } else if (remainderByTenRemainderNumberByHundred == 0) { // here we check one-word numbers under 100 like 20, 30, 60 etc.
                return numListTensFull[number];
            } else {
                return numListShort[integerByTenRemainderNumberByHundred] + ' ' + numListUnits[remainderByTenRemainderNumberByHundred]; // here we check two-word numbers
            };
        };
    };


    if (integerNumberByHundred > 0 && remainderNumberByHundred === 0) { // here we check three-word numbers
        return numListUnits[integerNumberByHundred] + ' ' + 'hundred';  // here we check round three-word numbers 100, 200, 600 etc.
    } else {
        return numListUnits[integerNumberByHundred] + ' ' + 'hundred' + ' ' + twoNum(remainderNumberByHundred);
    };
};