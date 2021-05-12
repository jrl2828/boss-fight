namespace SpriteKind {
    export const background = SpriteKind.create()
    export const desert = SpriteKind.create()
    export const obstacle = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jumpcount = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpcount < 1) {
        knight.vy = -100
        jumpcount += 2
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.obstacle, function (sprite, otherSprite) {
    game.over(false)
})
function createCloud () {
    let clouds: Image[] = []
    cloud = sprites.createProjectileFromSide(clouds[randint(0, clouds.length - 1)], -30, 0)
    cloud.bottom = randint(30, 55)
    cloud.z = -2
}
function setupFrames () {
    doveFrames = [
    img`
        . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `
    ]
    animation.runImageAnimation(
    dove,
    doveFrames,
    40,
    true
    )
    knightFrames = [
    img`
        . . . . . . f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f c c c c f . . 
        . . . f f f f c c c c c c c f . 
        . . . f c c c c f f f f c c f . 
        . . f f f f f f f c c c f f f . 
        . . f f c b b c b f b b c c f . 
        . . f c c b d b 1 f d d c f . . 
        . . . f c c c b d d d d f . . . 
        . . . . f f c c b b b c f . . . 
        . . . . . b d d c b b c f . . . 
        . . . . . b d d c c a a f . . . 
        . . . . . f c c f b b b f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `
    ]
}
sprites.onDestroyed(SpriteKind.obstacle, function (sprite) {
    info.changeScoreBy(1)
})
function createTree () {
    let trees: Image[] = []
    tree = sprites.createProjectileFromSide(trees[randint(0, trees.length - 1)], -50, 0)
    tree.bottom = 100
    tree.z = -1
}
let grass: Sprite = null
let projectile: Sprite = null
let obstacleImage: Image = null
let tree: Sprite = null
let knightFrames: Image[] = []
let doveFrames: Image[] = []
let cloud: Sprite = null
let jumpcount = 0
let dove: Sprite = null
let knight: Sprite = null
knight = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f b b b b b b f f f . . 
    . . f f b f f f f f f b b f . . 
    . . f b f f f f f f f f b f . . 
    . . f f f f b b b b f f f f . . 
    . f f b f 1 f c c f 1 f b f f . 
    . f b b c 1 f d d f 1 c b b f . 
    . . f b b d d d d d d b b f . . 
    . . . f b b c c c c b b f . . . 
    . . f c f f f f f f f f c f . . 
    . . c d f f f f f f f f d c . . 
    . . c d f c c a a c c f d c . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
knight.setStayInScreen(true)
controller.moveSprite(knight)
let statusbar = statusbars.create(25, 3, StatusBarKind.Health)
statusbar.attachToSprite(knight)
statusbar.value = 100
scene.setBackgroundColor(11)
let gravity = 400
knight.ay = gravity
knight.x = 20
dove = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
dove.setPosition(150, 20)
dove.setVelocity(-120, 50)
setupFrames()
game.onUpdate(function () {
    if (knight.bottom > 105) {
        knight.bottom = 105
        knight.vy = 0
        knight.ay = 0
        animation.runImageAnimation(
        knight,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
    }
})
game.onUpdate(function () {
    if (dove.x < 0) {
        dove.setPosition(randint(160, 240), randint(20, 60))
    }
})
game.onUpdateInterval(2000, function () {
    let obstacles: Image[] = []
    obstacleImage = obstacles[randint(0, obstacles.length - 1)]
    projectile = sprites.createProjectileFromSide(obstacleImage, -100, 0)
    projectile.bottom = 105
    projectile.setKind(SpriteKind.obstacle)
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(40)) {
        createCloud()
    }
})
forever(function () {
    knight.ay = 200
    if (knight.isHittingTile(CollisionDirection.Bottom)) {
        jumpcount = 0
    }
})
forever(function () {
    if (Math.percentChance(60)) {
        createTree()
        if (Math.percentChance(50)) {
            pause(randint(150, 300))
            createTree()
        }
    }
    pause(1500)
})
game.onUpdateInterval(200, function () {
    if (Math.percentChance(40)) {
        let grassImages: Image[] = []
        grass = sprites.createProjectileFromSide(grassImages[randint(0, grassImages.length - 1)], -50, 0)
        grass.bottom = 100
        grass.z = -1
    }
})
