import refs from "./refs";
const { form } = refs;
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements.name.value);
  let name = e.target.elements.name.value;
  let tel = e.target.elements.tel.value;
  let message = e.target.elements.message.value;
  const obj = { name, tel, message };
  console.log(obj);
});
