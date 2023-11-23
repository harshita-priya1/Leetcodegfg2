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
    int maxDepth(TreeNode* root) {
        // queue<TreeNode*>q;
        // int depth=0;
        // q.push(root);
        // while(!q.empty()){
        //     TreeNode* node = q.front();
        //     q.pop();
        //     if(node->left)q.push(node->left);
        //     if(node->right)q.push(node->right);
        // }
    if (root==NULL) {
        return 0;
    }
        return 1+max(maxDepth(root->left),maxDepth(root->right));

//     queue<TreeNode*> q;
//     q.push(root);

//     int height = 0;

//     while (!q.empty()) {
//         int nodeCount = q.size();

        // Process all nodes at the current level
        // while (nodeCount > 0) {
        //     TreeNode* current = q.front();
        //     q.pop();

            // Enqueue the left child if it exists
            // if (current->left) {
            //     q.push(current->left);
            // }

            // Enqueue the right child if it exists
//             if (current->right) {
//                 q.push(current->right);
//             }

//             nodeCount--;
//         }

        // Increment the height after processing all nodes at the current level
    //     height++;
    // }

    // return height;

    }
};