export function generate(width = 10, height = 10, ships = [5, 4, 3, 3, 2]) {
    let tiles = Array(10).fill().map(function() {
        return new Array(10).fill({});
    });

    ships = ships.sort((a, b) => -(a - b));

    ships.forEach((ship, id) => (
        tiles = generateShip(tiles, ship, id)
    ));

    return tiles;
}

function generateShip(tiles, length, id) {
    let coords = [];
    let direction = Math.floor(Math.random() * 2);

    do {
        let row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * tiles.length);
            col = Math.floor(Math.random() * (tiles[0].length - length + 1));
        } else {
            row = Math.floor(Math.random() * (tiles.length - length + 1));
            col = Math.floor(Math.random() * tiles[0].length);
        }

        for (let i = 0; i < length; i++) {
            if (direction === 1) {
                coords[i] = {
                    'x': row,
                    'y': col + i
                };
            } else {
                coords[i] = {
                    'x': row + i,
                    'y': col
                };
            }
        }
    } while (isColliding(tiles, coords));

    coords.forEach((t) => {
        tiles[t.x][t.y] = {
            ship: id
        };
    });

    return tiles;
}

function isColliding(tiles, coords) {
    let r = false;

    coords.forEach((t) => {
        let tile = tiles[t.x][t.y];
        if (tile.ship !== undefined) r = true;
    });

    return r;
}
