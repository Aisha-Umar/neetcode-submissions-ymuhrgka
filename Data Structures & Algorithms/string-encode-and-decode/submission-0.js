class Solution {
    encode(strs) {
        let encoded = ""

        for (let str of strs) {
            encoded += str.length + "#" + str
        }

        return encoded
    }

    //5#hello5#world

    decode(str) {
        let result = []
        let wordLength = ''
        let i = 0

        while(i < str.length){
            let j = i
                while(str[j] !== '#'){
                    j++
                }
               wordLength = str.slice(i,j)
               result.push(str.slice(j+1,j+1+Number(wordLength)))
                i = j+1+Number(wordLength)
            }
    
        return result
    }
}