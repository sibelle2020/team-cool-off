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

const url = `https://s21kea-d06b.restdb.io/rest/events/` + id;

// fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showEvent(data));

function showEvent(event) {
  console.log(event);
  //grab the template
  //clone it
  //change content
  //grab parent
  //append
}
