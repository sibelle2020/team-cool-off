//KEY: 6033bd605ad3610fb5bb64f6
//ENDPOINT: https://s21kea-d06b.restdb.io/rest/events
//&q={"genre":{"$elemMatch":"pop"}}
const urlParams = new URLSearchParams(window.location.search);
//in the URL grab ID and store it's value in id
const genre = urlParams.get("genre");
let urlall = "https://s21kea-d06b.restdb.io/rest/events";
let urlpopular =
  "https://s21kea-d06b.restdb.io/rest/events?sort=popularity&max=3";

if (genre) {
  console.log(genre);
  urlall = urlall + `?q={"genre":{"$elemMatch":"${genre}"}}`;
  urlpopular = urlpopular + `&q={"genre":{"$elemMatch":"${genre}"}}`;
}

const options = {
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

fetch(urlpopular, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    popularList(data);
  });

fetch(urlall, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    allEvents(data);
  });

function popularList(data) {
  data.forEach(showPopular);
}

function allEvents(data) {
  console.log(data);
}

function showPopular(popular) {
  console.log(popular);
  //grab the template
  const template = document.querySelector("#popular-template").content;
  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("h3").textContent = popular.artist;

  //grab parent
  const parent = document.querySelector(".events-wrapper");
  //append
  parent.appendChild(copy);
}
