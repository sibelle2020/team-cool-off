//KEY: 6033bd605ad3610fb5bb64f6
//ENDPOINT: https://s21kea-d06b.restdb.io/rest/events

//const url = "https://s21kea-d06b.restdb.io/rest/events";
const url = "https://s21kea-d06b.restdb.io/rest/events?sort=popularity&max=3";

const options = {
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    testList(data);
  });

function testList(data) {
  data.forEach(showPopular);
}

function showPopular(popular) {
  console.log(popular);
  //grab the template
  const template = document.querySelector("#popular-template").content;
  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("h3").textContent = popular.artistname;

  //grab parent
  const parent = document.querySelector(".events-wrapper");
  //append
  parent.appendChild(copy);
}
