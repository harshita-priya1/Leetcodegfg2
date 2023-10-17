class Solution {
public:
    int minAddToMakeValid(string s) {
        int n = s.size();
        stack<int>st;
        
        for (int i=0;i<n;i++){
            if(s[i]=='('){
                st.push('(');
            }
            if(s[i]==')'){
                if(st.empty() || st.top()!='('){
                        st.push(')');
                }
                else{
                    st.pop();
                }
            }
        }
        return st.size();
    }
};