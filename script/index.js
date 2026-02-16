function loadCategories() {
  //1. fetch categories from API
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2. convert to json
    .then((response) => response.json())
    //3. send data to display function
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);

  fetch(url)
  .then(res => res.json())
  .then(data => displayVideos(data.category));
}

function displayCategories(categories) {
  // get the container
  const categoriesContainer = document.getElementById("category-container");

  // loop operation on Array of Objects
  for (let cat of categories) {
    //console.log(cat);
    //create element for each category
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
            <button onclick="loadCategoryVideos('${cat.category_id}')" class="btn btn-sm hover:bg-[#FF1F3d] hover:text-white">${cat.category}</button>
    `;
    //Append the element to the container
    categoriesContainer.appendChild(categoryDiv);
  }
}

const displayVideos = (videos) => {
  console.log(videos);
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = "";

  videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");

    videoCard.innerHTML = `
             <div class="card bg-base-100 ">
  <figure class="relative">
    <img class="w-full h-[250px] object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      <span class="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">3hrs 56 min ago</span>
  </figure>

  <div class=" flex gap-3 px-0 py-5">
    <div class="profile">
        <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
    </div>

    <div class="intro">
        <h2 class="text-sm font-semibold">Midnight Serenade</h2>
        <p class="text-sm text-gray-400 flex gap-2">
            ${video.authors[0].profile_name} <img class="h-4 w-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
        </p>
        <p class="text-sm text-gray-400">
            ${video.others.views} views
        </p>
    </div>
  </div>
</div>
    `;


    // Append the video card to the container
    videoContainer.append(videoCard);
    });
};



loadCategories();

