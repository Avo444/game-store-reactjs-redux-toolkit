
export const TotalPrice = (items) => items.reduce((acc, game) => acc += game.price, 0);