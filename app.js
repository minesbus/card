function getcharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");
   
    results
    .then(response => response.json())
    .then(data => {
        done(data)
        
    });


}

getcharacters(data => {
    data.results.forEach(personaje => {
       
        const article = document.createRange().createContextualFragment(`
        
        <article>
            
        <div class="card-container1">
          <div class="card">
             <div class="cover-card">
             <img src="${personaje.image} " alt ="">
            </div>
             <h2>${personaje.name}</h2>
            <p> ${personaje.status}</p>
            <p>${personaje.gender} </p>
            <p>${personaje.species}</p>
          
            <hr>
             <div class="footer-card">
              <h3 class="user-name">Ines Bustos </h3>
              <i>Enero 2023</i>
             </div>
             </div>
             </div>
              </article>
        
         `);

const main =document.querySelector("main");
main.append(article);


        
    });
});