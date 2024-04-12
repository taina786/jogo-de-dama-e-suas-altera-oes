const board = document.getElementById("board");

players = ["black", "White"]
var currentPlayer = "black";
var selectedPiece = null;

// Criando o tabuleiro
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.x = col;
        cell.y = row;
        cell.addEventListener("click", movePiece);

        if ((row + col) % 2 === 1) {
            cell.classList.add("gray");
        }
        board.appendChild(cell);
    }
}

const cells = document.querySelectorAll(".cell");    
for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.classList.contains("gray") && cell.y<3){createPiece(cell,"black");}
    if (cell.classList.contains("gray") && cell.y>4){createPiece(cell,"white");}
}

function createPiece(cell,player)
{
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.classList.add(player);
    piece.addEventListener("click",selectPiece);
    cell.appendChild(piece);
}

function selectPiece(event){
    targetPiece = event.target;
    if(!targetPiece.classList.contains("piece")) return;

    selectedPiece = event.target;
    console.log(selectedPiece);
}

function movePiece(event){
    const targetCell = event.target;
    if(!targetCell.classList.contains("cell")) return;

    if(selectedPiece){
        targetCell.appendChild(selectedPiece);
    }
    console.log(selectedPiece);
    console.log(targetCell);
    selectedPiece = null;
}

function removePiece(piece)
{
    document.removeChild(piece);
} 