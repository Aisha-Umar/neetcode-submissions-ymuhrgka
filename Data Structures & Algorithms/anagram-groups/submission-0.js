class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //sort all strings
        //then you loop over the strings and match strings with the original key
        //then save the original strings in an array
        
        //initialize a hashmap
        let obj = {}

        for(let str of strs){
            const key = str.split('').sort().join('')
            if(!obj[key]){
                obj[key] = []
            }
            obj[key].push(str)
        }
        return Object.values(obj)
    }
}
