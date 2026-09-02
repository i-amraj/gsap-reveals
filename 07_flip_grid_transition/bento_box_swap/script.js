gsap.registerPlugin(Flip);

const items = document.querySelectorAll('.bento-item');
let selectedItem = null;

// Helper to swap two DOM nodes safely
function swapNodes(node1, node2) {
    const parent = node1.parentNode;
    const sibling1 = node1.nextSibling === node2 ? node1 : node1.nextSibling;
    node2.parentNode.insertBefore(node1, node2);
    parent.insertBefore(node2, sibling1);
}

items.forEach(item => {
  item.addEventListener('click', () => {
    
    // If clicking the same item, deselect it
    if (selectedItem === item) {
      item.classList.remove('selected');
      selectedItem = null;
      return;
    }
    
    // If no item is selected yet, select this one
    if (!selectedItem) {
      item.classList.add('selected');
      selectedItem = item;
      return;
    }
    
    // If we have a selected item and clicked a new one, perform SWAP
    
    // 1. Get state of all items before swap
    const state = Flip.getState('.bento-item');
    
    // 2. Make DOM Change: Swap the two nodes
    swapNodes(selectedItem, item);
    
    // Remove selected state visually
    selectedItem.classList.remove('selected');
    selectedItem = null;
    
    // 3. Flip!
    Flip.from(state, {
      duration: 0.8,
      ease: "power3.inOut",
      absolute: true, // Prevents jumpy reflows
      scale: true     // Scales morphing shapes correctly
    });
  });
});
