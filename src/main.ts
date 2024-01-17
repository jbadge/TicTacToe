import './style.css'

const firstListItem = document.querySelector('li')

function handleClickSquare(event: { target: any }): void {
  const thingClickedOn = event.target

  thingClickedOn.textContent = 'X'
}

firstListItem?.addEventListener('click', handleClickSquare)
