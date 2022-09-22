const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(e); test to make sure it is getting what we want
        // console.log(e.target.searchByID.value); again test value to make sure to target the right data
        const input = e.target.searchByID.value;
        // console.log(input.value); test value

        fetch(`http://localhost:3000/movies/${input}`)
        .then((resp) => resp.json())
        .then((data) => {
            // console.log(data) // to test data ane make sure it is returning what is expected
            // accessing the DOM and storing the values in JS variables
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            // use the variables just created and .innerText to change the content of the elements
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
    
};

document.addEventListener('DOMContentLoaded', init);