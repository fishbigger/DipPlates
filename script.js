function errorCheck() {
  code = document.getElementById('code').value;
  country = document.getElementById('country').value;

  error = document.getElementById('error');

  error.textContent = '';

  if (code == country && country == '') {
    error.textContent = "Please enter either country name or code.";
    return true
  }

  if (code != '' && country != '') {
    error.textContent = "Please only enter either country name or code.";
    return true
  }

  return false
}

function checkCode(e) {
  e.preventDefault()

  if (errorCheck()) {
    return
  }
  result = document.getElementById('result');

  code = document.getElementById('code').value;
  country = document.getElementById('country').value;

  fetch("./countryCodes.json")
    .then((res) => res.json())
    .then((data) => {
        if (code) {
          country = data[code.toUpperCase()];

          if (country == undefined) {
            result.textContent = "Unknown"
          } else {
             result.textContent = country;
          }
        } else {
          var found;
          for (var i in data) {
            if (data[i].toUpperCase() == country.toUpperCase()) {
              result.textContent = "The country code for " + data[i] + " is " + i;
              found = true;
              break
            }
          }
          if (!found) {
            result.textContent = "Unknown"
          }
        }
    });
}
