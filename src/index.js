
exports.min = function min (array) {
    if (array && array.length !== 0) {
        let minel = array[0];
        array.forEach((element) => {
            if(element < minel){
                minel = element;
            }
        });
        return minel;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array && array.length !== 0) {
        let maxel = array[0];
        array.forEach((element) => {
            if(element > maxel){
                maxel = element;
            }
        });
        return maxel;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (array && array.length !== 0) {
        let avgvalue = array[0];
        let sum = 0;
        let count = 0;
        array.forEach((element) => {
            sum = sum + element;
            count = count+1;
        });
        avgvalue = sum/count;
        return avgvalue;
    } else {
        return 0;
    }
}
