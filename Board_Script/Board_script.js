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

let squares = document.querySelectorAll('*[id^="sq"]'); //save all squares in a single html collection

//this for loop tried to make every string element in Pieces a variable to assign new Image() to. it didnt work
/*let Pieces = ['Rook_B', 'Knight_B', 'Bishop_B', 'Queen_B', 'King_B', 'Pawn_B', 'Rook_W', 'Knight_W', 'Bishop_W', 'Queen_W', 'King_W', 'Pawn_W']
for(let piece = 0; piece < (Pieces.length/2); piece++){
    let Piece = eval(Pieces[piece]) = new Image()
    Piece.className = "Piece_B"
}*/


//SO I did everything like this, but it does not quite work. It only displays One piece of each type for both Black and White
let Rook_B = new Image()
let Knight_B = new Image()
let Bishop_B = new Image()
let Queen_B = new Image()
let King_B = new Image()
let Pawn_B = new Image()
let Rook_W = new Image()
let Knight_W = new Image()
let Bishop_W = new Image()
let Queen_W = new Image()
let King_W = new Image()
let Pawn_W = new Image()

Rook_B.className = "Piece_B"
Knight_B.className = "Piece_B" 
Bishop_B.className = "Piece_B"
Queen_B.className = "Piece_B"
King_B.className = "Piece_B"
Pawn_B.className = "Piece_B"
Rook_W.className = "Piece_W"
Knight_W.className = "Piece_W" 
Bishop_W.className = "Piece_W"
Queen_W.className = "Piece_W"
King_W.className = "Piece_W"
Pawn_W.className = "Piece_W"

Rook_B.src = "../Pieces_Imgs/Rook.svg" 
Knight_B.src = "../Pieces_Imgs/Knight.svg"  //go up one folder and obtain .svg files with images
Bishop_B.src = "../Pieces_Imgs/Bishop.svg" 
Queen_B.src = "../Pieces_Imgs/Queen.svg" 
King_B.src = "../Pieces_Imgs/King.svg" 
Pawn_B.src = "../Pieces_Imgs/Pawn.svg" 
Rook_W.src = "../Pieces_Imgs/Rook.svg" 
Knight_W.src = "../Pieces_Imgs/Knight.svg"  
Bishop_W.src = "../Pieces_Imgs/Bishop.svg" 
Queen_W.src = "../Pieces_Imgs/Queen.svg" 
King_W.src = "../Pieces_Imgs/King.svg" 
Pawn_W.src = "../Pieces_Imgs/Pawn.svg"

//black
squares[0].appendChild(Rook_B)
squares[1].appendChild(Knight_B)
squares[2].appendChild(Bishop_B)
squares[3].appendChild(Queen_B)
squares[4].appendChild(King_B)
squares[5].appendChild(Bishop_B)
squares[6].appendChild(Knight_B)
squares[7].appendChild(Rook_B)
squares[8].appendChild(Pawn_B)
squares[9].appendChild(Pawn_B)
squares[10].appendChild(Pawn_B)
squares[11].appendChild(Pawn_B)
squares[12].appendChild(Pawn_B)
squares[13].appendChild(Pawn_B)
squares[14].appendChild(Pawn_B)
squares[15].appendChild(Pawn_B)

//white
squares[48].appendChild(Pawn_W)
squares[49].appendChild(Pawn_W)
squares[50].appendChild(Pawn_W)
squares[51].appendChild(Pawn_W)
squares[52].appendChild(Pawn_W)
squares[53].appendChild(Pawn_W)
squares[54].appendChild(Pawn_W)
squares[55].appendChild(Pawn_W)
squares[56].appendChild(Rook_W)
squares[57].appendChild(Knight_W)
squares[58].appendChild(Bishop_W)
squares[59].appendChild(Queen_W)
squares[60].appendChild(King_W)
squares[61].appendChild(Bishop_W)
squares[62].appendChild(Knight_W)
squares[63].appendChild(Rook_W)
