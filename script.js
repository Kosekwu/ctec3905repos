const hello = document.getElementById("hello");

console.log(hello);

function greeting() {
  alert("Hello!");
}

hello.addEventListener("click", greeting);
