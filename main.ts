input.onButtonPressed(Button.A, function () {
    if (canshoot) {
        Bullet = game.createSprite(Spaceship.get(LedSpriteProperty.X), Spaceship.get(LedSpriteProperty.Y))
        Bullet.turn(Direction.Left, 90)
        canshoot = false
    }
})
function Crash () {
    if (Bullet.isTouching(Enemy)) {
        game.addScore(1)
        Bullet.delete()
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 4), 0)
        canshoot = true
    } else if (Bullet.get(LedSpriteProperty.Y) == 0) {
        Bullet.delete()
        canshoot = true
    }
}
let Bullet: game.LedSprite = null
let canshoot = false
let Enemy: game.LedSprite = null
let Spaceship: game.LedSprite = null
Spaceship = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), 0)
canshoot = true
game.startCountdown(20000)
basic.forever(function () {
    Spaceship.move(1)
    Spaceship.ifOnEdgeBounce()
    if (Bullet) {
        Bullet.move(1)
        Crash()
    }
    basic.pause(200)
})
