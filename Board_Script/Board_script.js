//create chess board

let chess_board = document.getElementById('Chess_board');//obtain chess_board element
//console.log(chess_board) // seems okay

let sq_type = ['white', 'black'];  //class names

//let sq_ids = 0; //initiate variable starting at 0 and counting up after every loop with increment of 1
let alphabet = ['a','b','c','d','e','f','g','h']
for (let row = 0; row < 8; row++) { //looping over every row and column so that first iteration has 0,0 second 0,1 etc.
    for (let col = 0; col < 8; col++) {
        row_mod = row%2 //0 if row is even, 1 if odd
        col_mod = col%2 //0 if columns is even, 1 if odd
        mod = (row_mod + col_mod)%2 //switches to 0 or 1 after every iteration
        
        let sq = document.createElement('div') //create div for every square
        sq.className = sq_type[mod] //assigns div to class 'white' or 'black'
        
        coordinate = alphabet[col] + (8-row);
        sq.id = coordinate; //give every class an individual id so that square id corresponds with algebraic coordinate on chess board
        chess_board.appendChild(sq) //append to the chess_board div the square

        //document.getElementById(coordinate).innerText = coordinate //uncomment to display square ids on squares
        
        //sq_ids += 1 //every new div has the id of previous div + 1
    }
};

//piece data, abbreviation are descriptie, e.g., bQR = black Queens Rook i.e. black rook with starting position on the queen side of the board
let pieces = {
    bQR : {
        square : 'a8',
        fig : "../Pieces_Imgs/Rook_B.svg"
    },
    bQKt : {
        square : 'b8',
        fig : "../Pieces_Imgs/Knight_B.svg"
    }
};

//places images of respective pieces on designated squares
for (let p in pieces) {
    let sq = document.getElementById(pieces[p].square);
    let piece_img = document.createElement('img');
    piece_img.className = "Piece"
    piece_img.src = pieces[p].fig;
    sq.appendChild(piece_img);
};