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
 * @return {boolean}
 */
var isSame = function(l,r) {
        if(!l && !r) return true;
        if(!l || !r) return false;
        if(l.val!=r.val) return false;
        return (isSame(l.left,r.right) && isSame(l.right,r.left));
    }
var isSymmetric = function(root) {
    if(root==null) return true;
    return isSame(root.left,root.right);
};