def duckRows():
    global myTileFill, rowCounter
    if rowCounter < 10:
        for index in range(10):
            myTileFill = sprites.create(assets.image("""
                redDuck
            """), SpriteKind.food)
            myTileFill.set_position(index * 16 + 8, rowCounter * 16 + 8)
        rowCounter += 1
        duckRows()
    else:
        pass
def duckFiller():
    global rowCounter
    rowCounter = 0
    duckRows()
myTileFill: Sprite = None
rowCounter = 0
mySprite = sprites.create(assets.image("""
    yellowDuck
"""), SpriteKind.player)
controller.move_sprite(mySprite)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
duckFiller()