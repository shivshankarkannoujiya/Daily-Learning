const addTaskButton = document.getElementById(`add-task`)
const todoBoard = document.getElementById(`todo-board`)
const allBoards = document.querySelectorAll(`.board`)
const allTtems = document.querySelectorAll(`.item`)

addTaskButton.addEventListener(`click`, () => {
    const input = prompt(`Enter your task...`);
    if (!input) return;

    const taskCard = document.createElement(`p`)
    taskCard.classList.add(`item`)
    taskCard.setAttribute(`draggable`, true)
    taskCard.textContent = input

    attachDragEvents(taskCard)
    todoBoard.appendChild(taskCard)
})


function attachDragEvents(target) {
     target.addEventListener(`dragstart`, () => {
        target.classList.add(`flying`)

    })
    target.addEventListener(`dragend`, () => {
        target.classList.remove(`flying`)
    })
}

// allTtems.forEach((item) => attachDragEvents(item)) 
// Can Write: Parameter Signature is same of both
allTtems.forEach(attachDragEvents)

allBoards.forEach((board) => {
    board.addEventListener(`dragover`, (e) => {
        e.preventDefault()
        const flyingElement = document.querySelector(`.flying`)
        if (!flyingElement) return 

        console.log(board, `Kucch to mere upar se gya`, flyingElement)
        if (board !== flyingElement.parentElement) {
            board.appendChild(flyingElement)
        }
    })

})