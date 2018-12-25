const get = () => {
    return $.ajax({
      type: "GET",
      url:
        "https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&hilo&format=json",
      success(data) {
        console.log("Success!");
        console.log(data);
        populate(data);
      },
      error() {
        console.error("An error occurred.");
      }
    });

};

const retrieve = (payload) => {
    return {
        payload
    };
};

const populate = (data) => {
    // const d = get();
    // const s = d.responseText;
    // debugger
    document.getElementById('data').innerHTML = data;
};