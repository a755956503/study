function commonParentNode(oNode1, oNode2) {
  var parent1 = oNode1;
  while(parent1) {
    if (parent1.contains(oNode2)) {
      return parent1;
    }
    parent1 = parent1.parentNode;
  }
}