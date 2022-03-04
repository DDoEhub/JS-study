const c = document.querySelector(".cursor");
const popArea = document.querySelector("#popping-area");
const title = document.querySelector("#title");

for (i = 0; i < title.children.length; i++) {
  const title_child = title.children[i];
  title_child.style.transform = `translateY(${title_child.dataset.transY}) rotate(${title_child.dataset.rotate})`;
};

window.addEventListener("mousemove", (event) => {
  c.style.top = event.pageY + "px";
  c.style.left = event.pageX + "px";
})

popArea.addEventListener("mousemove", (event) => {
  requestAnimationFrame(() => {
    const d = document.createElement("div");

    d.classList.add('co');
    d.style.top = event.pageY + "px";
    d.style.left = event.pageX + "px";
    d.style.transform = `scale(${Math.floor(Math.random() * 10)})`;
    d.style.setProperty(`--hue`, Math.floor(Math.random() * 360));

    setTimeout(() => {
      d.style.setProperty(`--hue`, Math.floor(Math.random() * 360));
      d.style.opacity = 0;
      d.style.transform = `scale(${Math.floor(Math.random() * 50)})`;
      setTimeout(() => c.removeChild(d), 1100);
    }, 1000)

    c.appendChild(d);
  })
});