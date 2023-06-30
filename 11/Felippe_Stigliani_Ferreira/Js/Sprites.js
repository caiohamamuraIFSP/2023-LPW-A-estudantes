const gravity = 0.6
const chao = canvasHeight - 130



const backgroundSpritePath = "imagens/fundo.png"



class Sprite {
    constructor({ position, velocity, dimensions, source, direction, movement}) {
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

    draw(a) {
        
        if (this.image) {
            switch (background.directione) {
                case 0:
                    ctx.drawImage(
                        this.image,
                        this.position.x += -5.1,
                        this.position.y,
                        this.width = 2500,
                        this.height)
                    break;
                case 1:
                    ctx.drawImage(
                        this.image,
                        this.position.x += 5.1,
                        this.position.y,                            
                        this.width = 2500,
                        this.height)
                        break;

                default:
                    ctx.drawImage(
                        this.image,
                        this.position.x += 0,
                        this.position.y,
                        this.width = 2500,
                        this.height)
                    break;
            }
        }else {
            ctx.fillStyle = "blue"
            ctx.fillRect(player.position.x, player.position.y, player.width, player.height)
            ctx.fillStyle = "blue"
            ctx.fillRect(player2.position.x2, player2.position.y2, player2.width2, player2 .height2)
        }

        if(this.isAttacking) {
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
        if (Math.ceil(this.position.y+this.height >= chao)) {
            this.onGround = true
        } else {
            this.onGround = false
        }

        if (this.position.y+this.height > chao) {
            this.position.y = chao - this.height
            this.velocity.y = 0
        } else {
            if (!this.onGround) this.velocity.y += gravity
        }

        let movement
        if (this.position.x >= canvasWidth-200 && this.direction == 1 || this.position.x <= canvasWidth-800 && this.direction == 0) {
            this.velocity.x = this.velocity.x
            if (this.position.x >= canvasWidth-200 && this.direction == 1 ) {
                background.directione = 0
            } if(this.position.x <= canvasWidth-800 && this.direction == 0 ) {
                background.directione = 1
            } else{
                background.directione = 5678
            }

        } else {
            this.position.x += this.velocity.x
            
        }


        this.position.y += this.velocity.y
 
        if (direction == 0) {
            this.attackBox.position.x = this.position.x
            this.attackBox.width = -120
            this.attackBox.height = 50
        } if (direction == 1) {
            this.attackBox.position.x = this.position.x + 50
            this.attackBox.width = 100    
            this.attackBox.height = 50           
        } if (this.velocity.y >0 && direction == 0){
            this.attackBox.position.x = this.position.x + 50
            this.attackBox.width = -200
            this.attackBox.height = 200
        } if (this.velocity.y >0 && direction == 1){
            this.attackBox.position.x = this.position.x
            this.attackBox.width = 200
            this.attackBox.height = 200
        }

        this.attackBox.position.y = this.position.x
        this.attackBox.position.y = this.position.y
        
        this.draw(movement)
    }

    attack(direction) {
        if (this.onAttackCooldown) return

        if (direction == 0) {
            this.attackBox.position.x = this.attackBox.position.x
            this.attackBox.width = -120
        } if (direction == 1) {
            this.attackBox.position.x = this.position.x
            this.attackBox.width = 100               
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
        x: canvas.width/2,
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
        x2: 200,
        y: 0
    },
    velocity: {
        x2: 0,
        y: 10
    },
    dimensions: {
        width2: 50,
        height2: 150
    },
    direction2: 0
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
    directoine: 0
})
