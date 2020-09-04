(()=>{
    var gl = initGL('vsheader', 'fsheader')
    // 取出变量地址a_position
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
    if(a_Position < 0){
        console.log('Failed to get the storage location of a_Position')
        return
    }
    // 对变量进行赋值，缺省第四个参数'b4f'默认1.0
    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0)
    gl.vertexAttrib1f(a_PointSize,5.0)
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.POINTS, 0, 1)
})()