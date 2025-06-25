//ejercicio 7

function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
     .then(res=> res.json())
     .then(user => {
         let container = `<section>
                     <img src="${user.avatar_url}" alt="${user.name}">
                     <h1>${user.name}</h1>
                     <p>Public repos: ${user.public_repos}</p>
                     </section>`;
         document.body.innerHTML += container;
         return container
      });
 }

 //getAndPrintGitHubUserProfile("choski91").then( perfil => console.log(perfil));

 //ejercicio 8

 document.getElementById("git-usuario").addEventListener("submit", function (event) {
  event.preventDefault()

  const usuario = event.target.profile.value;
  console.log(usuario)

  //getAndPrintGitHubUserProfile(usuario).then( perfil => console.log(perfil));
 });
 
