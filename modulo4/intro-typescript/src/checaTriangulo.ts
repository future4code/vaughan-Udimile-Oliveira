const checaTriangulo = (ladoA: number, ladoB: number, ladoC: number) => {
    if (ladoA !== ladoB && ladoB !== ladoC) {
        return "Escaleno"
    } else if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilatero"
    } else { return "Isosceles" }
}