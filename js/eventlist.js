//KEY: 6033bd605ad3610fb5bb64f6
//ENDPOINT: https://s21kea-d06b.restdb.io/rest/events
//&q={"genre":{"$elemMatch":"pop"}}
const urlParams = new URLSearchParams(window.location.search);
//in the URL grab ID and store it's value in id
const genre = urlParams.get("genre");
let urlall = "https://s21kea-d06b.restdb.io/rest/events?sort=startdate";
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

//FETCH THE DATA

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
  data.forEach(showAll);
}

//POPULAR EVENTS

function showPopular(popular) {
  console.log(popular);
  //grab the template
  const template = document.querySelector("#popular-template").content;
  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("h3").textContent = popular.artist;
  copy.querySelector("h4").textContent = popular.datetime;
  copy.querySelector("p").textContent = popular.eventname;
  copy.querySelector(
    "img"
  ).src = `https://s21kea-d06b.restdb.io/media/${popular.eventimg[0]}?s=w`;

  copy.querySelector("a").href = `event-page.html?id=${popular.id}`;

  if (genre) {
    document.querySelector(".genre-text").textContent = genre;
  }

  //grab parent
  const parent = document.querySelector(".events-wrapper");
  //append
  parent.appendChild(copy);
}

//ALL EVENTS

function showAll(event) {
  //grab the template
  const template = document.querySelector("#allevents-template").content;
  //clone it
  const baby = template.cloneNode(true);

  //change content
  baby.querySelector("h3").textContent = event.artist;
  baby.querySelector("h4").textContent = event.datetime;
  baby.querySelector("p").textContent = event.eventname;
  baby.querySelector(
    "img"
  ).src = `https://s21kea-d06b.restdb.io/media/${event.eventimg[0]}?s=w`;

  baby.querySelector("a").href = `event-page.html?id=${event.id}`;

  if (genre) {
    document.querySelector(".genre-text2").textContent = genre;
  }

  //grab parent
  const parent = document.querySelector(".allevents-grid");
  //append
  parent.appendChild(baby);
}
