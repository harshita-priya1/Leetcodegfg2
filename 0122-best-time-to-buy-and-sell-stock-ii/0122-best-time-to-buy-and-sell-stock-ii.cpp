class Solution {
public:
    int solve(int ind, bool buy, vector<int>& prices,vector<vector<int>>&dp,int n){
        if(ind==n) return 0;
        if(dp[ind][buy]!=-1) return dp[ind][buy];
        if(buy){
            return dp[ind][buy]=max(-prices[ind]+solve(ind+1,!buy,prices,dp,n),0+solve(ind+1,buy, prices,dp,n));
        }else{
            return dp[ind][buy]=max(+prices[ind]+solve(ind+1,!buy, prices,dp,n),0+solve(ind+1,buy, prices,dp,n));
        }
    }
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        vector<vector<int>>dp(n,vector<int>(2,-1));
            
        return solve(0,true,prices,dp,n);
    }
};