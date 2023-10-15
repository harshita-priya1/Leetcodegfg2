class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        map<int,int>m;
        for(auto i : edges){
            if(m[i[0]]){
                m[i[0]]++;
            }
            else{
                m[i[0]]=1;
            }
            if(m[i[1]]){
                m[i[1]]++;
            }
            else{
                m[i[1]]=1;
            }
        }
        int n = m.size();
        for (auto& it : m) {
 
        // If mapped value is K,
        // then print the key value
        if (it.second == n-1) {
            return it.first;
        }
    }
        return 0;
    }
};