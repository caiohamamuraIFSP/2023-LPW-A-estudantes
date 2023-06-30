

animate()

function animate() {
    window.requestAnimationFrame(animate)

    handleControls()

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    background.update()
    player.update()
    player2.update()

    let delta = (performance.now() - prevTime) / 1000
    let fps = 1 / delta
    
    prevTime = performance.now()
    //console.log(`FPS: ${fps}`)
}