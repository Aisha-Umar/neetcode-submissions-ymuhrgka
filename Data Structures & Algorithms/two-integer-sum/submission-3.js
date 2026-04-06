class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj ={}
        //7-3
        //check for 4 in an obj
        //add 3 if 4 not present
        for(let i=0; i <= nums.length; i++){
            const complement = target - nums[i]
            if(!obj[complement]){
                obj[nums[i]] = true
            }
            else{
                const j = nums.indexOf(complement)
                return [i,j]
            }
            }
    }
}
