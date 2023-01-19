// alert that says hi!
// alert("hi!");

let string =
  "Hi, I'm Anna! I'm a frontend developer with design skills. I love making products that are fun and user friendly.";
var str = string.split("");
var el = document.getElementById("animation");
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
})();
