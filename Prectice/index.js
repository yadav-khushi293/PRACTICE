const api = "https://fakestoreapi.com/products";

fetch(api)
  .then((res) => res.json())
  .then((data) => showData(data));

function showData(items) {
  let container = document.getElementById("data");

  items.forEach((item) => {
    container.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3 mb-4">

        <div class="card h-100 shadow">

          <img src="${item.image}" class="card-img-top" style="height:200px; object-fit:contain;">
          
          <div class="card-body">
            <h6 class="card-title">${item.title}</h6>
            <p class="text-success fw-bold">₹ ${item.price}</p>
            <button class="btn btn-primary w-100">Buy Now</button>
          </div>
          
        </div>

      </div>

    `;
  });
}

// card → pura card container
// card-body → card ke andar ka content area
// card-title → heading
// card-text → description

// const api=`https://fakestoreapi.com/products`;

// const ApiCall=()=>{
//     fetch(api)
//     .then((res)=>res.json())
//     .then((res)=>appendsFunc(res))
//     .catch((err)=>console.log(err))
// }
// ApiCall()

// const appendsFunc =(data)=>{

//     let dataShow = document.getElementById('info');

//     data.forEach(el => {

//         let maindiv = document.createElement("div");
//         let title = document .createElement('p');
//         let price = document.createElement('p');
//         let description = document.createElement('p');
//         let img = document .createElement('img');

//         maindiv.class="";

//         title.classList="title";

//         title.innerText=el.title;
//         price.innerText=el.price;
//         description.innerText=el.description;
//         img.src=el.image;

//        maindiv.append(img,title,price,description)
//        dataShow .append(maindiv)
//     });

// }
