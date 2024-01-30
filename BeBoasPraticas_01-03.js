function ChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
   
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  })
  .then(data => {
    console.log(data.value);
  })
  .catch(error => {
    console.log(error);
  });

}
ChuckNorrisJoke()