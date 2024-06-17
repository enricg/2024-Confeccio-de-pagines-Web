// API dels gats. Cal registrar-se per obtenir la api-key
// live_0vGDfGPx89ZND1PLFD7rIaazEe0W1xviaZ2PtVC86gCHANlM85BXBomZCosRGjnM 
// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_0vGDfGPx89ZND1PLFD7rIaazEe0W1xviaZ2PtVC86gCHANlM85BXBomZCosRGjnM"
// let storedBreeds = []

// fetch(url, {
// headers: {
//     'x-api-key': api_key
// }
// })
// .then((response) => {
//     return response.json();
// })
// .then((data) => {

//     //filter to only include those with an `image` object
//     data = data.filter(img => img.image?.url != null)

//     storedBreeds = data;

//     for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');

//     //skip any breeds that don't have an image
//     if (!breed.image) continue

//     //use the current array index
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
//     document.getElementById('breed_selector').appendChild(option);
//     }
//     //show the first breed by default
//     showBreedImage(0)
// })
// .catch(function (error) {
//     console.log(error);
// });

// function showBreedImage(index) {
// document.getElementById("breed_image").src = storedBreeds[index].image.url;
// document.getElementById("breed_json").textContent = storedBreeds[index].temperament;
// }

// API Star Wars
function mostraInfoSW(){
    fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            document.write(data.results[1].title);
            console.log(data.results[1].title);
            console.log(data.count);
            // for(i=0;i<data.count;i++){
            //     //getElementById("sortida").innerHTML = `<p>${data[i]}</p>`;
            //     document.write("${data[i].title}<br>");
            //     document.write("Hola<br>");
            // }
        })
        .catch(error => {
            console.log(error.message);
            // getElementById("sortida").innerHTML = `<p>Error: ${error.message}</p>`;
        });
}