import { loadShader } from "./loadShader"

export const initProgram = (gl) => {
    const vertexShaderSource = document.getElementById("vertex-shader").text
    const fragShaderSource = document.getElementById("fragment-shader").text

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragShader = loadShader(gl, gl.FRAGMENT_SHADER, fragShaderSource)

    const program = gl.createProgram()

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    return program
}