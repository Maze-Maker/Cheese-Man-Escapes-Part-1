namespace SpriteKind {
    export const Chest = SpriteKind.create()
    export const Other_Chest = SpriteKind.create()
    export const Teluporter = SpriteKind.create()
    export const end_teluporter = SpriteKind.create()
    export const FALLING_APART_CAVE = SpriteKind.create()
    export const FAKE_TELUPORTER = SpriteKind.create()
    export const ANOTHER_FAKE_TELUPORTER = SpriteKind.create()
    export const SECOND_FALLING_APART_CAVE = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.SECOND_FALLING_APART_CAVE, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
    for (let index = 0; index < 4; index++) {
        ROCK = sprites.create(img`
            . b b b . 
            b b b b b 
            b b d b b 
            d d b d d 
            . d b d . 
            `, SpriteKind.FALLING_APART_CAVE)
        ROCK.setVelocity(0, 100)
        ROCK.setPosition(randint(0, 234), 0)
    }
    for (let index = 0; index < 4; index++) {
        SECOND_ROCK = sprites.create(img`
            . d b d . 
            d d b d d 
            b b d b b 
            b b b b b 
            . b b b . 
            `, SpriteKind.SECOND_FALLING_APART_CAVE)
        SECOND_ROCK.setVelocity(0, -100)
        SECOND_ROCK.setPosition(randint(0, 234), 244)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "WRONG ESCAPE DOOR/HOLE")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    other_chest.sayText("This Chest Has Opened", 5000, true)
    game.showLongText("Congratulates You Went the Wrong Way", DialogLayout.Bottom)
    sprites.destroy(other_chest, effects.confetti, 2000)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    info.stopCountdown()
    Cheese_Man.sayText("OH NO THE CAVE IS COLLAPSING.", 5000, true)
    for (let index = 0; index < 14; index++) {
        ROCK = sprites.create(img`
            . b b b . 
            b b b b b 
            b b d b b 
            d d b d d 
            . d b d . 
            `, SpriteKind.FALLING_APART_CAVE)
        ROCK.setVelocity(0, 100)
        ROCK.setPosition(randint(0, 234), 0)
    }
    for (let index = 0; index < 14; index++) {
        SECOND_ROCK = sprites.create(img`
            . d b d . 
            d d b d d 
            b b d b b 
            b b b b b 
            . b b b . 
            `, SpriteKind.FALLING_APART_CAVE)
        SECOND_ROCK.setVelocity(0, -100)
        SECOND_ROCK.setPosition(randint(0, 234), 244)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ANOTHER_FAKE_TELUPORTER, function (sprite, otherSprite) {
    sprites.destroy(ANOTHER_FAKE_ORB, effects.fire, 500)
    Cheese_Man.sayText("Told Ya.", 3000, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.end_teluporter, function (sprite, otherSprite) {
    sprites.destroy(END)
    Cheese_Man.sayText("Huh I Bet Some teleporter's Work And Some Don't.", 10000, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teluporter, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    END.setPosition(224, 24)
    Cheese_Man.setPosition(224, 24)
    sprites.destroy(ORB, effects.fire, 2000)
    FAKE_ORB.setPosition(500, 500)
    ANOTHER_FAKE_ORB.setPosition(184, 94)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    game.setGameOverMessage(false, "Retry Has Been Pressed")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Chest.sayText("This Chest Has Opened", 5000, true)
    game.showLongText("You Can Go Though Some Walls", DialogLayout.Bottom)
    sprites.destroy(Chest, effects.confetti, 2000)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FAKE_TELUPORTER, function (sprite, otherSprite) {
    sprites.destroy(FAKE_ORB, effects.fire, 500)
    Cheese_Man.sayText("Huh It Doesn't Work.", 5000, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverMessage(true, "You WIN Part 2 Coming Out")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.FALLING_APART_CAVE, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
    for (let index = 0; index < 4; index++) {
        ROCK = sprites.create(img`
            . b b b . 
            b b b b b 
            b b d b b 
            d d b d d 
            . d b d . 
            `, SpriteKind.FALLING_APART_CAVE)
        ROCK.setVelocity(0, 100)
        ROCK.setPosition(randint(0, 234), 0)
    }
    for (let index = 0; index < 4; index++) {
        SECOND_ROCK = sprites.create(img`
            . d b d . 
            d d b d d 
            b b d b b 
            b b b b b 
            . b b b . 
            `, SpriteKind.SECOND_FALLING_APART_CAVE)
        SECOND_ROCK.setVelocity(0, -100)
        SECOND_ROCK.setPosition(randint(0, 234), 244)
    }
})
let SECOND_ROCK: Sprite = null
let ROCK: Sprite = null
let ANOTHER_FAKE_ORB: Sprite = null
let FAKE_ORB: Sprite = null
let END: Sprite = null
let ORB: Sprite = null
let other_chest: Sprite = null
let Chest: Sprite = null
let Cheese_Man: Sprite = null
info.startCountdown(75)
info.setLife(5)
scene.setBackgroundColor(11)
tiles.setCurrentTilemap(tilemap`level1`)
Cheese_Man = sprites.create(img`
    2 2 2 2 2 2 2 2 2 
    2 5 5 f 5 f 5 5 2 
    2 2 5 f 5 f 5 2 2 
    . 2 f 5 5 5 f 2 . 
    . 2 2 f f f 2 2 . 
    . . 2 5 5 5 2 . . 
    . . 2 2 5 2 2 . . 
    . . . 2 2 2 . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cheese_Man)
scene.cameraFollowSprite(Cheese_Man)
Cheese_Man.setPosition(56, 233)
Cheese_Man.sayText("OH NO THE ENTRANCE HAS COLLAPSE . . . I must find the way out.", 8000, true)
let Cheese_mans_escape = sprites.create(img`
    f f f f f f 
    f f f f f f 
    f f f f f f 
    f f f f f f 
    f f f f f f 
    f f f f f f 
    `, SpriteKind.Enemy)
Cheese_mans_escape.setPosition(248, 218)
let ESCAPE_HOLE = sprites.create(img`
    f 
    `, SpriteKind.Projectile)
ESCAPE_HOLE.setPosition(248, 244)
Chest = sprites.create(img`
    e 
    `, SpriteKind.Food)
Chest.setPosition(56, 172)
other_chest = sprites.create(img`
    e e 
    e e 
    `, SpriteKind.Chest)
other_chest.setPosition(57, 29)
ORB = sprites.create(img`
    2 
    `, SpriteKind.Teluporter)
ORB.setPosition(37, 200)
END = sprites.create(img`
    a 
    `, SpriteKind.end_teluporter)
END.setPosition(500, 500)
FAKE_ORB = sprites.create(img`
    2 
    `, SpriteKind.FAKE_TELUPORTER)
ANOTHER_FAKE_ORB = sprites.create(img`
    2 
    `, SpriteKind.ANOTHER_FAKE_TELUPORTER)
FAKE_ORB.setPosition(184, 94)
ANOTHER_FAKE_ORB.setPosition(500, 500)
