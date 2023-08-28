$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';


    // 1. 
    async function cardDraw() {
        let deck = await $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        let deckId = deck.deck_id
        let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        let { suit, value } = card.cards[0]

        console.log(`The card is ${value} of ${suit}`)
    }

    // 2. 

    async function cardDrawTwo() {
        let firstCardData = await $.getJSON(`{baseURL}/new/draw/`);
        let deckId = firstCardData.deck_id;
        let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
        [firstCardData, secondCardData].forEach(card => {
            let { suit, value } = card.cards[0];
            console.log(`${value} of ${suit}`);
        });
    }



  // 3.
  async function setup() {
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    $btn.show().on('click', async function() {
      let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  setup();
});