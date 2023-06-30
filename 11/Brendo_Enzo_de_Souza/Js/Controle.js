let movement = 0
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false,
        hold: false
    },
    space: {
        pressed: false,
        hold: false
    },
    up: {
        pressed: false,
        hold: false
    },
    left: {
        pressed: false,
        hold: false
    },
    right: {
        pressed: false,
        hold: false
    }

}

window.addEventListener("keydown", e => {
    let key = e.key

    switch (key) {
        case "a":
            keys.a.pressed = true
            player.lastKeyPressed = key
            break
        case "ArrowRight":
            keys.right.pressed = true
            player2.lastKeyPressed = key
            break
        case "d":
            keys.d.pressed = true
            player.lastKeyPressed = key
            break

        case "w":
            keys.w.pressed = true
            break
        case "z":
        case " ":
            keys.space.pressed = true
            break
        case "ArrowLeft":
            keys.left.pressed = true
            player2.lastKeyPressed = key
            break
        case "ArrowUp":
            keys.up.pressed = true
            break;
    }
})

window.addEventListener("keyup", e => {
    let key = e.key

    switch (key) {
        case "ArrowLeft":
            keys.left.pressed = false
            break
        case "a":
            keys.a.pressed = false
            break
        case "ArrowRight":
            keys.right.pressed = false
            break
        case "d":
            keys.d.pressed = false
            break
        case "w":
            keys.w.pressed = false
            keys.w.hold = false
            break
        case "z":
        case " ":
            keys.space.pressed = false
            keys.space.hold = false
            break
        case "ArrowUp":
            keys.up.pressed = false
            keys.up.hold = false
            break;
    }
})

function handleControls() {
    movement()
    attacks()

    function movement() {
        player.velocity.x = 0

        if (keys.a.pressed && ["a"].includes(player.lastKeyPressed)) {
            player.velocity.x = -1.5 * 3.4
            player.direction = 0
        }
        if (keys.left.pressed && ["ArrowLeft"].includes(player2.lastKeyPressed)) {
            player2.velocity.x = -1.5 * 3.4
            player2.direction = 0
        }

        if (keys.d.pressed && ["d"].includes(player.lastKeyPressed)) {
            player.velocity.x = 1.5 * 3.4
            player.direction = 1
        }

        if (keys.right.pressed && ["ArrowRight"].includes(player2.lastKeyPressed)) {
            player2.velocity.x = 1.5 * 3.4
            player2.direction = 1
        }

        if (keys.w.pressed && !keys.w.hold) {
            player.jump()
            keys.w.hold = true
        }

        if (keys.up.pressed && !keys.up.hold) {
            player2.jump()
            keys.up.hold = true
        }
    }

    function attacks() {
        if (keys.space.pressed && !keys.space.hold) {
            direction = player.direction
            direction = player2.direction
            player.attack(direction)
            player2.attack(direction)
            keys.space.hold = true
        }
    }
} 