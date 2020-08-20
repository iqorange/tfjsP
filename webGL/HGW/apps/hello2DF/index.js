import { Model, shape } from '../../lib'
import RenderContext from '../../lib/RenderContext'

function main() {
    const gl = RenderContext.getGL()
    const mesh = shape.d2F(100, 100, 100, 150, 30)
    const model = new Model(mesh)
    model.setVectorUniform("u_color", [
        Math.random(),
        Math.random(),
        Math.random(),
        1.0
    ])
    model.setVectorUniform("u_resolution", [
        gl.canvas.width,
        gl.canvas.height
    ])
    model.draw()
}
main()