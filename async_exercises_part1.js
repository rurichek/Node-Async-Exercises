// 1
async function getNumberFact(number) {
    let numberFact = await $.getJSON(
        `http://numbersapi.com/${number}?json`
    );
    console.log(numberFact)
}

// 2
async function getMultipleNumberFacts(numbers) {
    let response = await $.getJSON(
        `http://numbersapi.com/${numbers}?json`
    );
    console.log(response)
}



// 3
async function part3() {
    let favNumber = 2;
    let baseURL = "http://numbersapi.com";
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  part3();



