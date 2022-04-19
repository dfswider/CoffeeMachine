function sum(numbers) {
    let s = 0;
    for ( let i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] === 0 ) {
            break;
        }
        s += numbers[i];
    }
    return s;
}