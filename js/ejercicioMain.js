const divProductos = document.getElementById("divProductos");
const alertError= document.getElementById("alertError");


const URLMain = "https://fakestoreapi.com/products/";

function getData(){
    fetch(URLMain).then( (response) => {
        console.log(response);
        response.json().then((res) => {
            createcards(res);
            divProductos.innerHTML = `Título: ${res[0].title}
            <br/>
            Precio: ${res[0].price}`;
        });//fetch
    }).catch((err)=>{
        alertError.innerText = `problema al traer la informacion ${err}`;
        alertError.style.display="block";
    });//catch
}//getData

getData();

function createcards(res){
    divProductos.insertAdjacentHTML("beforeend",
        `Titulo: ${res[1].title}
        <br/>
        Precio: ${res[1].price}
        `);

}//createCards