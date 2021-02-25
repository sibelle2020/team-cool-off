//KEY: 6033bd605ad3610fb5bb64f6
//ENDPOINT: https://s21kea-d06b.restdb.io/rest/events

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const options = {
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

const url = "https://s21kea-d06b.restdb.io/rest/events/" + id;

// fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showEvent(data));

function showEvent(event) {
  console.log(event);
  //grab the template
  const template = document.querySelector("template").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    "img"
  ).src = `https://s21kea-d06b.restdb.io/media/${event.eventimg}?s=w`;
  copy.querySelector(".artist").textContent = event.artist;
  copy.querySelector(".eventname").textContent = event.eventname;
  copy.querySelector(".date").textContent = event.datetime;
  copy.querySelector(".time span").textContent = event.datetime;

  if (event.price) {
    copy.querySelector(".price span").textContent = event.price + " DKK";
  } else {
    copy.querySelector(".price span").textContent = "FREE";
  }
  copy.querySelector(".genre .g0").textContent = event.genre[0];

  if (event.genre[1]) {
    copy.querySelector(".genre .g0").textContent = event.genre[0] + ",";
    copy.querySelector(".genre .g1").textContent = event.genre[1];
  }

  if (event.genre[2]) {
    copy.querySelector(".genre .g1").textContent = event.genre[1] + ",";
    copy.querySelector(".genre .g2").textContent = event.genre[2];
  }

  if (event.genre[3]) {
    copy.querySelector(".genre .g2").textContent = event.genre[2] + ",";
    copy.querySelector(".genre .g3").textContent = event.genre[3];
  }

  copy.querySelector(".event-info").innerHTML = event.eventinfo;

  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
