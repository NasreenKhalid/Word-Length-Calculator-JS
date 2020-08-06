const btn = document.getElementById("submit");
const input = document.getElementById("input");
const result = document.getElementById("result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const str = input.value;
  result.style.display = "block";
  result.innerHTML = `Length of the word is: ${str.length}`;
});
