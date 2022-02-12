function analyzeArray(array) {

    return {
        average: array.reduce((acc, curr) => acc + curr) / array.length,
        min: array.sort((a,b) => a - b)[0],
        max: array.sort((a, b) => b - a)[0],
        length: array.length
    }

} 





module.exports = analyzeArray;
