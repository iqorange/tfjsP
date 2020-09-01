(()=>{
    var gl = initGL('vsheader', 'fsheader')
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
    if(a_Position < 0){
        console.log('Failed to get the storage location of a_Position')
        return
    }
    gl.vertexAttrib1f(a_PointSize,10.0)
    gl.clearColor(0.33, 0.53, 1.0, 1.0)
    var canvas = document.getElementById('webgl')
    var g_points = []
    canvas.onmousedown = (ev) => {
        let x = ev.clientX
        let y = ev.clientY
        let rect = ev.target.getBoundingClientRect()
        x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2)
        y = (canvas.width / 2 - (y - rect.top)) / (canvas.width / 2)
        g_points.push(x)
        g_points.push(y)
        gl.clear(gl.COLOR_BUFFER_BIT)
        for(let i=0;i<g_points.length;i+=2){
            gl.vertexAttrib3f(a_Position, g_points[i], g_points[i+1], 0.0)
            gl.drawArrays(gl.POINTS, 0, 1)
        }
    }
    gl.clear(gl.COLOR_BUFFER_BIT)
})()