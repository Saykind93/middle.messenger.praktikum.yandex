export function render(query, block) {
  const root = document.getElementById(query);
  root.appendChild(block.getContent());
  return root;
}
