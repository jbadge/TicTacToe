import './style.css'

let currentPlayer: 'X' | 'O' = 'X'

function handleClickSquare(event: MouseEvent) {
  const thingClickedOn = event.target

  if (thingClickedOn instanceof HTMLLIElement) {
    thingClickedOn.textContent = currentPlayer

    thingClickedOn.classList.add('taken')

    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  }
}

const allSquares = document.querySelectorAll('li')

allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)
