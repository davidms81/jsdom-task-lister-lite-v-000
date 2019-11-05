document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#id-checkbox").addEventListener("submit", function(event) {
         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);
});
