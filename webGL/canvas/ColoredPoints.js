(()=>{
    var gl = initGL('vsheader', 'fsheader')
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor')

    if(a_Position < 0){
        console.log('Failed to get the storage location of a_Position')
        return
    }

    if(!u_FragColor){
        console.log('Failed to get the u_FragColor variable')
        return
    }

    gl.clearColor(1.0, 1.0, 1.0, 1.0)
    var canvas = document.getElementById('webgl')
    var g_points = []
    var g_colors = []
    canvas.onmousedown = (ev) => {
        let x = ev.clientX
        let y = ev.clientY
        let rect = ev.target.getBoundingClientRect()
        x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2)
        y = (canvas.width / 2 - (y - rect.top)) / (canvas.width / 2)
        g_points.push([x, y])
        gl.clear(gl.COLOR_BUFFER_BIT)
        if(x >= 0.0 && y >= 0.0){
            g_colors.push([1.0, 0.33, 0.53, 1.0])
        }else if(x < 0.0 && y < 0.0){
            g_colors.push([0.33, 1.0, 0.53, 1.0])
        }else{
            g_colors.push([0.33, 0.53, 1.0, 1.0])
        }
        gl.clear(gl.COLOR_BUFFER_BIT)
        for(let i=0;i<g_points.length;i++){
            var xy = g_points[i]
            var rgba = g_colors[i]
            gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0)
            gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3])
            gl.drawArrays(gl.POINTS, 0, 1);
        }
    }
    gl.clear(gl.COLOR_BUFFER_BIT)
})()