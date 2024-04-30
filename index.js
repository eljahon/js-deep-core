var maxRepeating = function(sequence, word) {
    let res =0 ;
    debugger
    while (sequence.includes(word)) {
        sequence=sequence.replace(word, '')
        res++;
    }
    return res;
};
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));