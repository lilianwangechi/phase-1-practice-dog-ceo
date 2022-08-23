console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
handleRequest();
allBreedsRequest();
// renderDogImage();

//allBreedsRequest();
//renderBreedName()
})
function handleRequest(){
 return fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(dogs => {dogs.message.forEach(dogImage =>renderDogImage(dogImage))
  });
}

function renderDogImage(picture){
  const parentContainer = document.getElementById("dog-image-container");
  const newImage = document.createElement('img');
  newImage.src = picture;
  parentContainer.appendChild(newImage);
}


function allBreedsRequest(){
  return fetch('https://dog.ceo/api/breeds/list/all')
   .then(resp => resp.json())
   .then(breedsName => {
   const breeds = Object.keys(breedsName.message);
   renderBreedName(breeds);
   });
   }
  
 
//function to put images in the dom select place
 function renderBreedName(breeds){
     //parent container
 const ul = document.getElementById("dog-breeds");
 breeds.forEach(breed => {
  const li = document.createElement("li");
  li.innerText =breed;
  ul.appendChild(li);
  li.addEventListener("click",(e)=>{
    (e).target.style.color = "orange";
  });
  
 });
}


 


 
 
 