function isPangram(sentence)
{
    for (let char of 'abcdefghijklmnoprstuvwxyz')
    {
        if (sentence.indexOf(char) === -1)
        {
            return false;
            }
    }
    return true;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'))