class Solution {
    public int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE;
        int max = 0;

        for(int value : prices){
            
            min = Math.min(min , value);
            max = Math.max(max, value - min);
        }
        return max;
    }
}