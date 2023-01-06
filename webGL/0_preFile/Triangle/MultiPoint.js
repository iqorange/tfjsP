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
    var n = initVertexBuffers(gl, a_Position, u_FragColor)
    if(n < 0){
        console.log('Failed yo set the positions of the vertices');
        return;
    }
    gl.uniform4f(u_FragColor, 0.33, 0.55, 1.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS, 0, n)
})()
~function initVertexBuffers(gl, a_Position, u_FragColor){
    var vertices = new Float32Array([
        0.0, 0.5, -0.5, -0.5, 0.5, -0.5
    ])
    var n = 3
    // 创建缓冲区
    var vertexBuffer = gl.createBuffer()
    if(!vertexBuffer){
        console.log('Failed to create the buffer object')
        return -1
    }
    // 绑定缓冲区对象
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    // 将数据写入缓冲区对象
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    // 将缓冲区对象分配给一个attribute变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
    // 开启attribute变量
    gl.enableVertexAttribArray(a_Position)
    return n
}