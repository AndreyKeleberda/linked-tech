import refs from "./refs.js";
import template from "../templates/cocteil-item.hbs";
const { coctailsList, searchCoctail } = refs;

searchCoctail.addEventListener("change", (e) => {
  let search = e.target.value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      console.log(data);
      const item = template(data.drinks);
      // console.log(item);
      coctailsList.insertAdjacentHTML("afterbegin", item);
    });
});
