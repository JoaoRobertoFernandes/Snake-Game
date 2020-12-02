import {update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeIntersect} from "./snake.js"
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const game = document.getElementById('game')

function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/'
        }
        return
    }



    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snake_speed) return
    

    
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    game.innerHTML = ''
    drawSnake(game)
    drawFood(game)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect()
}