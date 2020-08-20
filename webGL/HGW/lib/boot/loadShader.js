export const loadShader = (gl, type, source) => {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const err =  "An error occurred compiling the shaders:" + gl.getShaderInfoLog(shader)
        gl.deleteShader(shader)
        throw err
    }
    return shader
}