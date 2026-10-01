class Solution {
    public int removeDuplicates(int[] nums) {
        int uniqueE = 1;
        if(nums.length == 0) return 0;

        for(int i = 0 ; i<nums.length -1 ; i++){
            if(nums[i] != nums[i+1]){
                nums[uniqueE] = nums[i+1];
                uniqueE ++;
            }
        }  return uniqueE;
    }
} 