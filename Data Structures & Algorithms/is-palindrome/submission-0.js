class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //a string
        //true or false
        //racecar
        //exclude all non alphanumeric characters with regex
        //make the string all lowercase
        //use left and right  pointers
        //while left pointer is not equal to right pointer keep checking
        s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g,"")
        let left = 0
        let right = s.length-1
        while(left < right){
            if(s[left] == s[right]){
                left++
                right--
            }
            else{
                return false
            }
        } 
        return true
    }
}
