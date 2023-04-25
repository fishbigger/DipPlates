function checkCode(e) {
  e.preventDefault()

  code = document.getElementById('code').value;
  result = document.getElementById('result');

  fetch("./countryCodes.json")
    .then((res) => res.json())
    .then((data) => {
        country = data[code.toUpperCase()];

        if (country == undefined) {
          result.textContent = "Unknown"
        } else {
           result.textContent = country;
        }

    });
}
