//KEY: 6033bd605ad3610fb5bb64f6
//ENDPOINT: https://s21kea-d06b.restdb.io/rest/events

const url = "https://s21kea-d06b.restdb.io/rest/events";

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
  data.forEach(showEvent);
}
