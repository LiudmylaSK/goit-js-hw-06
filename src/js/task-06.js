const input = document.getElementById("validation-input");
input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.getAttribute("data-length"));

  const actualLength = input.value.length;

  input.classList.remove("valid", "invalid");
  input.classList.add(actualLength === expectedLength ? "valid" : "invalid");
});
