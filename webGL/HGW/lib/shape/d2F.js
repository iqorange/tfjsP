import { Mesh } from '../model/Mesh'
export const d2F = (x, y, width, height, thickness) => {
    const data = [
        x, y,
        x + thickness, y,
        x, y + height,
        x, y + height,
        x + thickness, y,
        x + thickness, y + height,

        x + thickness, y,
        x + width, y,
        x + thickness, y + thickness,
        x + thickness, y + thickness,
        x + width, y,
        x + width, y + thickness,

        x + thickness, y + thickness * 2,
        x + width * 2 / 3, y + thickness * 2,
        x + thickness, y + thickness * 3,
        x + thickness, y + thickness * 3,
        x + width * 2 / 3, y + thickness * 2,
        x + width * 2 / 3, y + thickness * 3
    ]

    return new Mesh({vertexes: data, dimension: 2})
}