async function GEtweather() {
  let apikey = "7023923dd26a725da995c75b65864de5";
  let city = document.querySelector("#city");
  let cityTag = city.value;

  let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&q=${cityTag}`;

  let jqXhr = jQuery.get(url);

  jqXhr.done((data) => {
    let lon = data.coord.lon;
    let lat = data.coord.lat;

    let mintemp = data.main.temp_min;
    let maxtemp = data.main.temp_max;

    let currentTemp = data.main.temp;

    let dis = document.querySelector("#display");
    let newval = `<div class="card text-bg-info mb-3" style="width: 500px ;margin-left: 450px">
      <div class="card-header">
        <h2>City : ${cityTag}</h2>
      </div>
      <div class="card-header">
        <h4>Current Temprature : ${currentTemp}</h4>
      </div>
      <div class="card-body">
        <h5>
          LON : ${lon} and LAT : ${lat}
        </h5>
      </div>
      <div class="card-body">
        <h5>
          MIN-Temp : ${mintemp} and MAX-Temp :${maxtemp}
        </h5>
      </div>
    </div>
  `;

    dis.innerHTML = newval;
  });
}
