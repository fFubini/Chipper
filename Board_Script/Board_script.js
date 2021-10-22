let chess_board = document.getElementById('Chess_board') ;//obtain chess_board element
//console.log(chess_board) // seems okay

let sq_type = ['white', 'black'];
let sq_ids = 0; //initiate variable starting at 0 and adding up after every loop

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        row_mod = row%2
        col_mod = col%2
        mod = (row_mod + col_mod)%2
        let sq = document.createElement('div')
        sq.className = sq_type[mod]
        sq.id = sq_ids
        chess_board.appendChild(sq)
        sq_ids += 1
    }
};

