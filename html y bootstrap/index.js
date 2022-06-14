
const API_URL = "https://bp-marvel-api.herokuapp.com/marvel-characters";
let peliculas = '';
const btnBorrar = document.querySelector("#formBtn");
const obtenerPeliculas = async() => {
    try{
        const respuesta = await axios.get("https://bp-marvel-api.herokuapp.com/marvel-characters?",{
            params:{
                idAuthor: '2'
            }
        })
        //console.log(respuesta.data[0].title)
            respuesta.data.forEach(pelicula => {
                peliculas +=
                    `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4">
                        

                        <img src=${pelicula.image} class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-4">
                        <div class="card-body">
                        <h5 class="card-title">${pelicula.title}</h5>
                        <h5 class="card-title">${pelicula._id}</h5>
                        <p class="card-text">${pelicula.body}</p>
                        <p id="id_personaje"></p>
                        </div>
                        </div>
                        <div class="col-md-4">

                        <button>Editar</button>
                        <button onclick ="DeleteElement(${pelicula._id})">Eliminar</button>
                  
                        </div>
                    </div>
                    </div>
                    </div>`
                // `<ul class="list-group">
                // <li class="list-group-item">
                // <h3>${pelicula.title}</h3>
                // <img class="img-thumbnail" src=${pelicula.image}></img>
                // </li>`

            });
        document.getElementById('contenedor').innerHTML = peliculas;
    }catch(error){
        console.log(error);
    }
}

obtenerPeliculas();

function DeleteElement(id){
    const element = document.querySelector('#id_personaje');
    axios.delete(`https://bp-marvel-api.herokuapp.com/marvel-characters/${id}?idAuthor=2`)
    .then(() => element.innerHTML = 'Delete successful');
}
