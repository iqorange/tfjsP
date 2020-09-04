~function main() {
    var canvas = document.getElementById('example')
    if(!canvas){
        console.log('Failed to retrieve the <canvas> element')
        return
    }

    var ctx = canvas.getContext('2d')

    ctx.fillStyle = '#5588ff'
    ctx.fillRect(120, 10, 150, 150)
}()