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
        .then(res1 => res1.json())
        .then(data1 => data1.message);
}
getRandomDog().then(breed => { console.log(breed); })

//ejercicio 3

function getAllImagesByBreed() {
    return fetch("https://dog.ceo/api/breed/komondor/images")
        .then(res2 => res2.json())
        .then(data2 => data2.message);
}

getAllImagesByBreed().then(breed => { console.log(breed); })
 