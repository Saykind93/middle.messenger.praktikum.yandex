export function createErrorMessage(targetInput, message) {
  let size = targetInput.getBoundingClientRect();
  let error: any = document.getElementById("error");
  error.style.display = "block";
  error.style.position = "absolute";
  error.style.top = `${size.top + 15}px`;
  error.style.left = `${size.left + size.width + 15}px`;
  error.innerText = message;
  error.style.backgroundColor = "white";
  error.style.border = "black";
}
