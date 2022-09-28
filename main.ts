function duckFiller () {
    for (let index1 = 0; index1 <= 9; index1++) {
        for (let index2 = 0; index2 <= 6; index2++) {
            myTileFill = sprites.create(assets.image`redDuck`, SpriteKind.Food)
            myTileFill.setPosition(index1 * 16 + 8, index2 * 16 + 8)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setImage(assets.image`greenDuck`)
})
let myTileFill: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
duckFiller()
let mySprite = sprites.create(assets.image`yellowDuck`, SpriteKind.Player)
controller.moveSprite(mySprite)
