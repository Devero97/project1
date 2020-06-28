const CODES = {
    A: 65,
    Z: 90
}
function toCell() {
    return `<div class="cell" contenteditable=""></div>`
}
function toCol(el) {
    return `<div class="column">
                ${el}
            </div>`
}
function toRow(content, i) {
    return `<div class="row">
                <div class="row-info">${i ? i : ''}</div> 
                <div class="row-data">${content}</div>
            </div>`
}
function toChar(_, i) {
    return String.fromCharCode(CODES.A + i)
}


export function createTable(rowCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toCol)
        .join('')

    rows.push(toRow(cols, null))

    for (let i = 0; i < rowCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')

        rows.push(toRow(cells, i + 1))
    }

    return rows.join('')
}