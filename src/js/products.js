import refs from "./refs.js";
import template from "../templates/product_item.hbs";

const { products, modal, modalContent } = refs;
// //console.log(products);

const fetch1 = fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data);
    const items = template(data);
    //console.log(items);
    products.insertAdjacentHTML("afterbegin", items);
  });
// //console.log(fetch1)

//console.log(template);

products.addEventListener("click", (event) => {
  //console.dir(event.target);
  let id = event.target.parentNode.id;
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      // //console.log(data);
      modal.classList.remove("is-hidden");
      const { id, title, category, price, description, image } = data;
      let item = `  <li id=${id} class="modal-item">
<h2>
  ${title}
</h2>
<img src=${image} alt=${title} width="50" height="100"/>
<p>
  ${price}
</p>
<p>
  ${category}
</p>
<p>
  ${description}
</p>
</li>`;
      modalContent.insertAdjacentHTML("afterbegin", item);
    });
});
