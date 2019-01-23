/* ------------------ Allow cross browser setting --------------------- */

// connect to API and fetch data
const connectToAPIs = () => {
  fetch('https://demo.bonp.me/clients/aeon')
  .then(response => response.json())
  .then(data => {
    getData(data);
  })
};

function getData (data){
  console.log(data[0].image);
  const img = document.querySelector('div.mySlides img');

  img.setAttribute('src', data[0].image);
}

connectToAPIs();
