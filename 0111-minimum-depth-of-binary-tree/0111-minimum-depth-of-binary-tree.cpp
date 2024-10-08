/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int solve(TreeNode* root) {
        if(root->left==NULL && root->right==NULL) return 1;
        if(root->left==NULL) return 1+solve(root->right);
        if(root->right==NULL) return 1+solve(root->left);
        return 1+ min(solve(root->left), solve(root->right));
    }
    int minDepth(TreeNode* root) {
        if(root==NULL) return 0;
        return solve(root);
    }
};