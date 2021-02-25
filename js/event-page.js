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

// fetch the data2
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showHeader(data));

function showHeader(head) {
  console.log(head);

  const template2 = document.querySelector("#top-template").content;
  const baby = template2.cloneNode(true);

  //content
  baby.querySelector(
    "img"
  ).src = `https://s21kea-d06b.restdb.io/media/${head.eventimg[1]}`;
  baby.querySelector("img").alt = head.eventname;
  baby.querySelector(".artist").textContent = head.artist;
  baby.querySelector(".eventname").textContent = head.eventname;
  baby.querySelector(".date").textContent = head.datetime;
  //baby.querySelector(".time span").textContent = head.datetime;

  const parent2 = document.querySelector(".template-wrapper");
  parent2.appendChild(baby);
}

function showEvent(event) {
  console.log(event);
  //grab the template
  const template = document.querySelector("#main-template").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(".location span").textContent = event.location;

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
