(() => {
    // var VSHADER_SOURCE = document.getElementById("vsheader").textContent
    // var FSHADER_SOURCE = document.getElementById("fsheader").textContent

    // var canvas = document.getElementById('webgl')
    // var gl = getWebGLContext(canvas)

    // if(!gl){
    //     console.log('Failed to get the rendering context for WebGL')
    //     return
    // }
    // if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)){
    //     console.log('Failed to initialize shaders')
    //     return
    // }

    var gl = initGL('vsheader', 'fsheader')

    gl.clearColor(0.0, 0.0, 0.0, 0.6)
    gl.clear(gl.COLOR_BUFFER_BIT)

    gl.drawArrays(gl.POINTS, 0, 1)
})()