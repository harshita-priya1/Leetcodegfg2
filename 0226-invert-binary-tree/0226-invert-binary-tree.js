/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root==null) return root;
        invertTree(root.left);
        // Call the function recursively for the right subtree...
        invertTree(root.right);
        // swapping process...
        const curr = root.left;
        root.left = root.right;
        root.right = curr;
        return root; 
};