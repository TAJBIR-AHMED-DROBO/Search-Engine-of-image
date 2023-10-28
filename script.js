 let accessKey = "fOH9iUH_PbWv8AbsTtxoc9JY2W69fNZsPTdI7esKehk";
 let form = document.querySelector("form");
 let input = document.querySelector("input");
 let search = document.querySelector("button");
 let showMore = document.querySelector(".showmore");

let page = 1;


 async function searchImages() {

  var value = input.value;
    
  page =1;

  let  url = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accessKey}`
   
  let response = await fetch(url);
  let data = response.json();

  let results = data.results;


results.map((result)=>{

 let div = document.createElement("div");
 div.classList.add("card");

 let img = document.createElement("img");
 img.src = result.urls.small;
 img.classList.add("card-img");
 let a = document.createElement("a");
 a.href = result.links.html;
 a.target = "_blank";
 a.innerHTML = result.alt_description;
a.classList.add("card-title");

div.appendChild(img);
div.appendChild(a);
body.appendChild(div);




})


page++;
if(page>1){
    showMore.style.display = block;
}





 }


 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages()
    input.value = "";
 });

 showMore.addEventListener("click",()=>{
    searchImages();
 })