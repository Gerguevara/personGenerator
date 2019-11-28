window.onload = function () {
    load();

}

function load() {
    document.getElementById("btn-launch").addEventListener("click", loadUser);

}

function hideGreeding() {
    document.getElementById("greeting").style.display = 'none';
}
function showPerson() {
    document.getElementById("person").style.display = 'block';
}


function refresh() {
    document.getElementById("again").addEventListener("click", reload);
}

function reload() {
    // currently this doesn't work, I'm working to fix it
    window.location.reload();
}


//working with fetch api

function loadUser() {
    showPerson();
    hideGreeding();
    contenido = document.getElementById("person");

    //conection with the API
    fetch('https://randomuser.me/api/')

        // .then(resp => resp.json())
        .then(resp => {
            (resp)
            if (resp.ok) {
                return resp.json();
            } else {
                throw "Ocurrio un erro no se pudo conectar con el api";
            }
        })
        // Working with api results
        .then(datos => {
            console.log(datos)
            contenido.innerHTML =
                `<img src="${datos.results['0'].picture.large}" alt="" class="rounded-circle mb-3" height="150" width="150">
        <p class="mt3 font-weight-bold">Name: ${datos.results['0'].name.first + "  " + datos.results['0'].name.last}</p>
        <p class="mt3 font-weight-bold">Email: ${datos.results['0'].email}</p>`
        })

        // catch for if there's an error
        .catch(function (error) {
            console.log("Ocurrio un error" + error)
            contenido.innerHTML = "<h3> We' sorry, something was wrong, :( </br> Please try again y few minutes</h3>";
        }

        )
}
