import './style.css'

let currentPlayer: 'X' | 'O' = 'X'
let moveCounter = 0

// Generic and works for ANY 'li'
//
// Because the event tells us the target
// and the target is the thing we clicked on!
function handleClickSquare(event: MouseEvent) {
  // After this handler, stop the bubbling. End it here...
  event.stopPropagation()

  // Don't do your NATURAL behavior, I'm overriding
  event.preventDefault()

  const thingClickedOn = event.target

  // If the thing clicked on is an LI Element
  // - This does several things:
  // - 1. Checks that the target isn't null
  // - 2. Lets TypeScript know that *inside* this if statement
  //      the thingClickedOn is an LI element, and thus we can
  //      change its textContext

  if (thingClickedOn instanceof HTMLLIElement) {
    // IF the element ALREADY has 'taken' we shouldn't
    // let them click again! We do this by ENDING (returning)
    // from the function RIGHT AWAY!
    if (thingClickedOn.classList.contains('taken')) {
      console.log('NO CAN DO!')
      return
    }

    thingClickedOn.textContent = currentPlayer

    // Adds the taken class so that we SHOW the user
    // they can't select this item!
    thingClickedOn.classList.add('taken')

    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }

    // Increment the move counter!
    moveCounter++

    const header = document.querySelector('h1')

    if (header instanceof HTMLHeadingElement) {
      header.textContent = `Move ${moveCounter} of Tic Tac Toe`
    }
  }
}

// const allSquares = document.querySelectorAll('li')

// allSquares.forEach((square) =>
//   square.addEventListener('click', handleClickSquare)
// )

const gameBoard = document.querySelector('ul')

if (gameBoard instanceof HTMLUListElement) {
  gameBoard?.addEventListener('click', handleClickSquare)
}
