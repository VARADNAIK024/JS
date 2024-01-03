const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); // is used to store user i/p
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `not a number ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `not a valid weight ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = (`under weight ${bmi}`);
    }
    if (bmi > 18.6 && bmi < 24.9)  {
      results.innerHTML = (`normal weight ${bmi}`);
    }
    if (bmi > 24.9) {
      results.innerHTML = (`over weight ${bmi}`);
    }
    //results.innerHTML = `<span>${bmi}</span>`;
  }
});
