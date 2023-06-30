const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1024
const canvasHeight = 576

canvas.width = canvasWidth
canvas.height = canvasHeight

let prevTime = 0
const backgroundSpritePath = "imagens/fundo.png"

const gravity = 0.6
const chao = canvasHeight - 130


class Sprite {
    constructor({ position, velocity, dimensions, source, direction, movement }) {
        this.position = position
        this.velocity = velocity
        this.width = dimensions?.width
        this.height = dimensions?.height
        this.direction = direction
        this.movement = movement



        if (source) {
            this.image = new Image()
            this.image.src = source

            this.width = canvasWidth
            this.height = canvasHeight
        }
    }

    draw() {

        if (this.image) {
            switch (background.directone) {
                case 0:
                    if (this.position.x > -1600) {
                        this.position.x -= 5.1;
                    }
                    console.log(this.position.x);
                    ctx.drawImage(
                        this.image,
                        this.position.x,
                        this.position.y,
                        this.width = 2500,
                        this.height)
                    break;
                case 1:
                    console.log('caso 1');
                    if (this.position.x < 200) {
                        this.position.x += 5.1;
                    }
                    ctx.drawImage(
                        this.image,
                        this.position.x,
                        this.position.y,
                        this.width = 2500,
                        this.height)
                    break;
                default:
                    console.log('caso 2');
                    ctx.drawImage(
                        this.image,
                        this.position.x,
                        this.position.y,
                        this.width = 2500,
                        this.height)
                    break;
            }
        } else {
            ctx.fillStyle = "blue"
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        }

        if (this.isAttacking) {
            ctx.fillStyle = "red"
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }

    update() {
        this.draw()
    }
}

class Fighter extends Sprite {
    constructor({
        position,
        velocity,
        dimensions

    }) {
        super({
            position,
            velocity,
            dimensions
        })

        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height

        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            width: 120,
            height: 50
        }

        // this.attackBox = {
        //     position: {
        //         x: this.position.x,
        //         y: this.position.y,
        //     },
        //     width: 120,
        //     height: 50
        // }

        this.isAttacking
        this.attackCooldown = 100
        this.onAttackCooldown

        this.lastKeyPressed
        this.onGround
    }

    update() {
        if (Math.ceil(this.position.y + this.height >= chao)) {
            this.onGround = true
        } else {
            this.onGround = false
        }

        if (this.position.y + this.height > chao) {
            this.position.y = chao - this.height
            this.velocity.y = 0
        } else {
            if (!this.onGround) this.velocity.y += gravity
        }

        this.position.x += this.velocity.x;
        background.directone = 2;
        if (this.position.x >= canvasWidth - 200 && this.direction == 1 || this.position.x <= canvasWidth - 800 && this.direction == 0) {
            if (this.direction == 1) {
                background.directone = 0;
            } else {
                background.directone = 1;
            }
            this.position.x -= this.velocity.x;

        } else {


        }


        this.position.y += this.velocity.y


        if (this.direction == 0) {
            this.attackBox.position.x = this.position.x
            this.attackBox.width = -120
            this.attackBox.height = 50
        } else if (this.direction == 1) {
            this.attackBox.position.x = this.position.x + 50
            this.attackBox.width = 100
            this.attackBox.height = 50
        }

        if (this.velocity.y > 0 && this.direction == 0) {
            this.attackBox.position.x = this.position.x + 50
            this.attackBox.width = -200
            this.attackBox.height = 200
        } else if (this.velocity.y > 0 && this.direction == 1) {
            this.attackBox.position.x = this.position.x
            this.attackBox.width = 200
            this.attackBox.height = 200
        }

        this.attackBox.position.y = this.position.x
        this.attackBox.position.y = this.position.y

        this.draw()
    }

    attack(direction) {
        if (this.onAttackCooldown) return

        if (direction == 0) {
            this.attackBox.position.x = this.attackBox.position.x
            this.attackBox.width = -120
            background.direction = 0
        } if (direction == 1) {
            this.attackBox.position.x = this.position.x
            this.attackBox.width = 100
            background.direction = 1
        }

        this.isAttacking = true
        this.onAttackCooldown = true

        setTimeout(() => {
            this.isAttacking = false
        }, 100)

        setTimeout(() => {
            this.onAttackCooldown = false
        }, this.attackCooldown)

    }

    jump() {
        if (!this.onGround) return
        this.velocity.y = -16
    }

}

const player = new Fighter({
    position: {
        x: canvas.width / 2,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    dimensions: {
        width: 50,
        height: 150
    },
    direction: 0
})

const player2 = new Fighter({
    position: {
        x: 200,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    dimensions: {
        width: 50,
        height: 150
    },
    direction: 0
})

// const player2 = new Fighter({
//     position: {
//         x: 500,
//         y: 20
//     },
//     velocity: {
//         x: 0,
//         y: 0
//     },
//     dimensions: {
//         width: 50,
//         height: 200
//     }
// })

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    source: backgroundSpritePath,
    directone: 0,
    direction: 0
})
