export function clickTile(x, y) {
    return {
        type: "CLICK_TILE",
        payload: {
            x: x,
            y: y,
            now: new Date().getTime()
        }
    };
}

export function generate(w = 10, h = 10, ships = [5, 4, 3, 3, 2]) {
    return {
        type: "GENERATE_TILES",
        payload: {
            width: w,
            height: h,
            ships: ships
        }
    };
}
