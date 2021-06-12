let game_width = 800
let game_height = 600
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

class Player {
    constructor(pos_x, pos_y, width, height){
        this.width = width
        this.height = height
        this.position = {
            x: pos_x,
            y: pos_y
        }
    }
    
    draw(ctx){
        ctx.fillStyle = '#000'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    moveHorizontal(ctx, key){
        ctx.clearRect(0, 0, 800, 600)
        if (key == 37) {
            this.position.x -= 20
            if (this.position.x <= 0) {
                this.position.x = 0
                this.draw(ctx)
            }
        } else if(key == 39){
            this.position.x += 20
            if (this.position.x >= 780) {
                this.position.x = 780
                this.draw(ctx)
            }
        }
        this.draw(ctx)
    }
    moveVertical(ctx, key){
        ctx.clearRect(0, 0, 800, 600)
        if (key == 38) {
            this.position.y -= 20
            if (this.position.y <= 0) {
                this.position.y = 0
                this.draw(ctx)
            }
        } else if(key == 40){
            this.position.y += 20
            if (this.position.y >= 580) {
                this.position.y = 580
                this.draw(ctx)
            }
        }
        this.draw(ctx)
    }
}

const player = new Player(200, 100, 20, 20)
const player2 = new Player(100, 300, 30, 15)
const image = document.getElementById('github')


ctx.clearRect(0, 0, 800, 600)
player.draw(ctx)
ctx.drawImage(image, 400, 300, 30, 30)

document.addEventListener('keydown', function(e){
    player.moveHorizontal(ctx, e.keyCode)
    player.moveVertical(ctx, e.keyCode)
    ctx.drawImage(image, 400*Math.random(), 300*Math.random(), 30, 30)
})
