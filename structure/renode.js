// 1 2 3 4 5
// 1 2 4 5 3
// 4 3 5 1 2

function main(arr1, arr2) {
  let root = { value: 1 };
  function order(node, i) {
    if (arr1[i] === undefined) {
      return;
    }
    let childIndex = i + 1;
    const nextNode = { value: arr1[childIndex] };
    const middleOrder = arr2.find((item) => item === arr1[childIndex]);
    if (middleOrder > childIndex) {
      node.left = nextNode;
    } else {
      node.right = nextNode;
    }
    order(nextNode, childIndex);
  }
  order(root, 0)
  console.log(root);
}
main([1, 2, 4, 5, 3], [4, 3, 5, 1, 2])