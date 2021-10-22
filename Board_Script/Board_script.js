let chess_board = document.getElementById('Chess_board') ;//obtain chess_board element
//console.log(chess_board) // seems okay

let sq_type = ['white', 'black'];  //class names
let sq_ids = 0; //initiate variable starting at 0 and counting up after every loop with increment of 1

for (let row = 0; row < 8; row++) { //looping over every row and column so that first iteration has 0,0 second 0,1 etc.
    for (let col = 0; col < 8; col++) {
        row_mod = row%2 //0 if row is even, 1 if odd
        col_mod = col%2 //0 if columns is even, 1 if odd
        mod = (row_mod + col_mod)%2 //switches to 0 or 1 after every iteration
        let sq = document.createElement('div') //create div for every square
        sq.className = sq_type[mod] //give the new div a class as presented in sq_type
        sq.id = 'sq'+sq_ids //give every class an individual id
        chess_board.appendChild(sq) //append to the chess_board div the square
        sq_ids += 1 //every new div has the id of previous div + 1
    }
};

//Code below is draft for input of Chess Pieces on the squares
let sq1 = document.getElementById('sq1') //obtain the squares
let sq0 = document.getElementById('sq0')

let Knight_B = document.createElement('img') //create new img elements
let Rook_B = document.createElement('img')

Knight_B.className = "Piece" //give them class name 'Piece' from which the css can be manipulated
Rook_B.className = "Piece"

Knight_B.src = "../Pieces_Imgs/Knight_B.svg"  //go up one folder and obtain .svg files with images
Rook_B.src = "../Pieces_Imgs/Rook_B.svg"

sq1.appendChild(Knight_B) //append adequate piece imgs to relevant squares
sq0.appendChild(Rook_B)

