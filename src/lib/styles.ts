// Create a function that returns the base padding class but has properties
function createPaddingObject() {
  const paddingFn = () => "p-2";
  
  paddingFn.left = "pl-2";
  paddingFn.right = "pr-2";
  paddingFn.top = "pt-2";
  paddingFn.bottom = "pb-2";
  paddingFn.all = "p-2";
  paddingFn.x = "px-2";
  paddingFn.y = "py-2";
  paddingFn.horizontal = "px-2";
  paddingFn.vertical = "py-2";

  return paddingFn;
}

export const p = createPaddingObject();