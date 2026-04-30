class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target){
        let seen = {}
        for(let i=0; i < nums.length; i++){
            let complement = target - nums[i]
            if(!seen[complement]){
                seen[nums[i]] = true
            }
            else{
                return [i,nums.indexOf(complement)]
            }
        }
    }
}
