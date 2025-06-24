//RESUELVE TUS EJERCICIOS AQUI

//ejercicio 1

function getAllBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => Object.keys(data.message));
}
// console.log(getAllBreeds());
getAllBreeds().then(breeds => console.log(breeds));

//ejercicio 2

function getRandomDog() {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(res1 => res1.json()) // la funcion flecha tiene un return
        .then(data1 => data1.message);
}
getRandomDog().then(breed => console.log(breed));

//ejercicio 3

function getAllImagesByBreed() {
    return fetch("https://dog.ceo/api/breed/komondor/images")
        .then(res2 => res2.json())
        .then(data2 => data2.message);
}

getAllImagesByBreed().then(breed =>console.log(breed));
 
//ejercicio 4
function getAllImagesByBreed2(breed) {

    let link = "https://dog.ceo/api/breed/"
    let imagen = "/images"
   return fetch (link + breed + imagen)
   .then(res => res.json())
   .then( datos => datos.message);
}   

getAllImagesByBreed().then(datos=>console.log(datos));

//ejercicio 5

function getGitHubUserProfile(username) {

    return fetch (`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(perfil => perfil);
}

getGitHubUserProfile("choski91").then( perfil=>console.log(perfil));


//ejercicio 6

function  printGithubUserProfile(username) {
  return fetch
  .then()
  .then()
}
printGithubUserProfile().then(hola=>console.log());


//ejercicio 7
//ejercicio 8
//ejercicio 9
