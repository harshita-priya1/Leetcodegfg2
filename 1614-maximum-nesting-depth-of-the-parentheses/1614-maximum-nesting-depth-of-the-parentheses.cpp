class Solution {
public:
    int maxDepth(string s) {
        stack<int>st;
        int nmax=0;
        for(int i=0;i<s.length();i++){
            if(s[i]=='('){
                st.push(s[i]);
                nmax=nmax>st.size()?nmax:st.size();
            }
            else if(s[i]==')'){
                st.pop();
            }
        }
        return nmax;
    }
};