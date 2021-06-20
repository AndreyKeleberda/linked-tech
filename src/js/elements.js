import refs from "./refs.js";
const { sectionHero } = refs;

const box = document.createElement("div");
console.log(box);
box.setAttribute("width", "200px");
box.setAttribute("height", "200px");
box.style.padding = "100px";
box.style.background = "green";
box.textContent = "прсто какойто текст";

sectionHero.insertAdjacentElement("afterbegin", box);

const box2 = `<div width='100px' height='100px' style = "background: white; padding:99px"></div>`;
sectionHero.insertAdjacentHTML("beforeend", box2);
const box2_2 = document.querySelector('[width="100px"]');
console.log(box, box2);

// sectionHero.innerHTML = box2;

// sectionHero.innerHTML = "";

// старый способ удаления елемента через родителя-------------
sectionHero.removeChild(box2_2);
// нвый способ удаления елемента на прямую---------------
box.remove();

const deepCloneHero = sectionHero.cloneNode(true);
console.log(deepCloneHero);

const cloneHero = sectionHero.cloneNode(false);
console.log(cloneHero);
