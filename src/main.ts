import './style.css'

let currentPlayer: 'X' | 'O' = 'X'
let moveCounter = 0

function handleClickSquare(event: MouseEvent) {
  console.log(event)
  const thingClickedOn = event.target

  if (thingClickedOn instanceof HTMLLIElement) {
    if (thingClickedOn.classList.contains('taken')) {
      console.log('Sorry! This square is already taken!')
      return
    }

    thingClickedOn.textContent = currentPlayer

    thingClickedOn.classList.add('taken')

    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  }

  moveCounter++

  const header = document.querySelector('h1')

  if (header instanceof HTMLHeadingElement)
    header.textContent = `Move ${moveCounter} of Tic Tac Toe`
}

// const allSquares = document.querySelectorAll('li')

// allSquares.forEach((square) =>
//   square.addEventListener('click', handleClickSquare)
// )

const gameBoard = document.querySelector('ul')

if (gameBoard instanceof HTMLElement) {
  gameBoard.addEventListener('click', handleClickSquare)
}
