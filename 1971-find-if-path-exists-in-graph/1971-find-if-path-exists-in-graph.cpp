class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int s, int d) {
        map<int,vector<int>> m;
        for(auto i:edges){
            m[i[0]].push_back(i[1]);
            m[i[1]].push_back(i[0]);
        }
        vector<bool>vis(n,false);
        queue<int>q;
        q.push(s);
        vis[s]=true;
        while(!q.empty()){
            int curr = q.front();
            q.pop();
            if(curr==d) return true;
            for(auto it: m[curr]){
                if(!vis[it]){
                    vis[it]=true;
                    q.push(it);
                }
            }
        }
        return false;
    }
};


