const api=`https://fakestoreapi.com/products`;

const ApiCall=()=>{
    fetch(api)
    .then((res)=>res.json())
    .then((res)=>appendsFunc(res))
    .catch((err)=>console.log(err))
}
ApiCall()

const appendsFunc =(data)=>{

    let dataShow = document.getElementById('info');
     
    data.forEach(el => {
         
        let maindiv = document.createElement("div");
        let title = document .createElement('p');
        let price = document.createElement('p');
        let description = document.createElement('p');
        let img = document .createElement('img');
        

        title.classList="title";

        title.innerText=el.title;
        price.innerText=el.price;
        description.innerText=el.description;
        img.src=el.image;

       maindiv.append(img,title,price,description)
       dataShow .append(maindiv)
    });

}