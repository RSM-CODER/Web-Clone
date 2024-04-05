
let mycards = document.querySelector(".container_1");
const request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products");
request.send();
request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  let get_data = data.products;

  for (let i = 0; i < get_data.length; i++) {
    let insert_data = `
<div class="row py-2 d-flex">
<div class="col-md-4">
<div class="card" style="width: 18rem; min-height: 20rem;">
    <figure>
    <img src="${get_data[i].images[2]}">
    </figure>
    <section class="details">
        <div class="min-details">
            <h5>${get_data[i].title}<span class="pt-2">
                    <br>
                    ${get_data[i].description}</span></h5>
                    
            <h5 class="price">Price ${get_data[i].price}</h5>
        </div>

        <a href="#" class="btn">add to cart</a>
    </section>
</div>
</div>
</div>
 `;
    mycards.insertAdjacentHTML("afterbegin", insert_data);
  }
});
