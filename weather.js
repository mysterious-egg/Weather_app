var array = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  
  var monthss = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=bengaluru,in&APPID=cdaf8ad0fc09f62ce13321323225efb1'
  )
    .then((data) => data.json())
    .then((parsedData) => {
      console.log(parsedData);
  
      const nameOfLocation = parsedData.name;
      document.getElementsByClassName('cityname')[0].textContent = nameOfLocation;
  
      const newdate = new Date(parsedData.dt * 1000);
      document.getElementsByClassName('date')[0].textContent =
        array[newdate.getDay() - 1] +
        ' ' +
        newdate.getDate() +
        ' ' +
        monthss[newdate.getMonth()] +
        ' ' +
        newdate.getFullYear();
  
      const weather = parsedData.main.temp;
      document.getElementsByClassName('temperature')[0].textContent =
        Math.floor(weather - 273) + '\xBA' + 'C';
  
      const clouds = parsedData.weather[0].main;
      document.getElementsByClassName('weather')[0].textContent = clouds;
  
      const maxtemp = parsedData.main.temp_max;
      const mintemp = parsedData.main.temp_min;
      document.getElementsByClassName('temp')[0].textContent =
        Math.floor(maxtemp - 273) +
        '\xBA' +
        ' ' +
        'C' +
        ' ' +
        '/' +
        ' ' +
        Math.floor(mintemp - 273) +
        '\xBA' +
        ' ' +
        'C';
    });
  