function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    console.log(firstInteger+ parseInt(secondInteger))
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    console.log(firstDecimal+parseFloat(secondDecimal))
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    console.log(firstString + secondString)
    
}
performOperation(12, 4.32, 'is the best place to learn and practice coding!');