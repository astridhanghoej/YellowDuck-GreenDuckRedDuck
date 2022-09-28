def duckRows():
    pass
def duckFiller():
    global myTileFill
    for index1 in range(5):
        for index2 in range(5):
            myTileFill = sprites.create(assets.image("""
                redDuck
            """), SpriteKind.food)
            myTileFill.set_position(index1 * 16 + 8, index2 * 16 + 8)

def on_on_overlap(sprite, otherSprite):
    otherSprite.set_image(assets.image("""
        greenDuck
    """))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

myTileFill: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
duckFiller()
mySprite = sprites.create(assets.image("""
    yellowDuck
"""), SpriteKind.player)
controller.move_sprite(mySprite)