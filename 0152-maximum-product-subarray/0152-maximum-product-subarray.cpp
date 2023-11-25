class Solution {
public:
    // int solve(int index,int &maxp, vector<int>&nums,int n){
    //     if(index==n) return 1;
    //     int product=1;
    //     for(int i=index;i<n;i++){
    //         int k=i;
    //         while(k<=index){
    //             product= product*nums[k];
    //             k++;
    //         }
    //         maxp=max(maxp,product);
    //     }
    //     return product;
    // }
    int maxProduct(vector<int>& arr) {
        int pre=1,suff=1;
        int maxp=INT_MIN;
        int n=arr.size();
        for(int i=0;i<n;i++){
            if(pre==0){
                pre=1;
            }
            if(suff==0){
                suff=1;
            }
            pre=arr[i]*pre;
            suff*=arr[n-i-1];
            maxp=max(maxp,max(pre,suff));
        }
        return maxp;
        
        // solve(0,maxp,nums,n);
        // return maxp;

    }
};