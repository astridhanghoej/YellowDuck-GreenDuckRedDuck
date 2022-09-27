function duckRows () {
    if (rowCounter < 7) {
        for (let index = 0; index <= 9; index++) {
            myTileFill = sprites.create(assets.image`redDuck`, SpriteKind.Food)
            myTileFill.setPosition(index * 16 + 8, rowCounter * 16 + 8)
        }
        rowCounter += 1
        duckRows()
    } else {
    	
    }
}
function duckFiller () {
    rowCounter = 0
    duckRows()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setImage(assets.image`greenDuck`)
})
let myTileFill: Sprite = null
let rowCounter = 0
tiles.setCurrentTilemap(tilemap`level1`)
duckFiller()
let mySprite = sprites.create(assets.image`yellowDuck`, SpriteKind.Player)
controller.moveSprite(mySprite)
