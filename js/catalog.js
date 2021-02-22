// FETCHING THE DATA
const url = "https://kea-alt-del.dk/t7/api/products?brandname=puma";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    testList(data);
  });

function testList(data) {
  data.forEach(showArtist);
}

//TEMPLATE
function showArtist(artist) {
  //grab the template
  const template = document.querySelector("#artist-template").content;
  //clone it
  const copy = template.cloneNode(true);

  //CHANGE CONTENT
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${artist.id}.webp`;

  //grab parent
  const parent = document.querySelector(".artist-grid");
  //append
  parent.appendChild(copy);
}
