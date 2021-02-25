//KEY: 6033bd605ad3610fb5bb64f6
//ENDPOINT: https://s21kea-d06b.restdb.io/rest/events

const urlParams = new URLSearchParams(window.location.search);
const urlpopular =
  "https://s21kea-d06b.restdb.io/rest/events?sort=popularity&max=3";

const options = {
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

//fetch the data
fetch(urlpopular, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    popularList(data);
  });

function popularList(data) {
  data.forEach(showPopular);
}

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

  copy.querySelector(".event-link").href = `event-page.html?id=${popular._id}`;
  copy.querySelector(".event-link2").href = `event-page.html?id=${popular._id}`;

  if (popular.price) {
    copy.querySelector(".p-event").classList.add("notfree");
  }

  //grab parent
  const parent = document.querySelector(".events-wrapper");
  //append
  parent.appendChild(copy);
}
