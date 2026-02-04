function loadCategories() {
  //1. fetch categories from API
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

  //2. convert to json
    .then((response) => response.json())
    //3. send data to display function
    .then((data) => displayCategories(data.categories));
}


function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

function displayCategories(categories) {
  // get the container
  const categoriesContainer = document.getElementById("category-container");


  // loop operation on Array of Objects
  for(let cat of categories){
    //console.log(cat);
    //create element for each category
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
            <button class="btn btn-sm hover:bg-[#FF1F3d] hover:text-white">${cat.category}</button>
    `;
    //Append the element to the container
    categoriesContainer.appendChild(categoryDiv);
  }
    
}


const displayVideos = (videos) =>{
    console.log(videos);
}



loadCategories();
loadVideos();
