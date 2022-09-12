controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    audience.setImage(assets.image`clap2`)
    projectile = sprites.createProjectileFromSprite(simplified.chooseRandomImage(assets.image`star`, assets.image`rose`), audience, randint(-100, 100), randint(-50, 100))
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`clap1`)
})
let projectile: Sprite = null
let audience: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`stage`)
mySprite = sprites.create(assets.image`towering turtles`, SpriteKind.Player)
mySprite.bottom = 115
game.splash("press (A) to play")
info.startCountdown(10)
audience = sprites.create(assets.image`clap1`, SpriteKind.Player)
