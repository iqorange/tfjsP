function getGLFromId(id){
    var gl = getWebGLContext(document.getElementById(id))
    if(!gl){
        console.log('Failed to get the rendering context for WebGL')
    }
    return gl
}

function getGLFromCanvas(){
    var gl = getWebGLContext(document.getElementsByTagName('canvas')[0])
    if(!gl){
        console.log('Failed to get the rendering context for WebGL')
    }
    return gl
}

function glsl(id){
    return document.getElementById(id).textContent || id
}

function checkElem(e){
    if(!e) return getGLFromCanvas()
    if(typeof e == 'string') return getGLFromId(e)
    return e
}

function initGL(vs, fs, gl){
    gl = checkElem(gl)
    if(!initShaders(gl, glsl(vs), glsl(fs))){
        console.log('Failed to initialize shaders')
    }
    return gl
}