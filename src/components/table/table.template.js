const CODES = {
    A: 65,
    Z: 90
}
function toCell(_, index) {
    return `<div class="cell" contenteditable data-col="${index}"></div>`
}
function toCol(el, index) {
    return `<div class="column" data-type="resizable" data-col="${index}">
                ${el}
                <div class="col-resize" data-resize="col"></div>
            </div>`
}
function createRow(content, i) {
    const resize = i ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `<div class="row" data-type="resizable">
                <div class="row-info">
                    ${i ? i : ''}
                    ${resize}
                </div> 
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

    rows.push(createRow(cols, null))

    for (let i = 0; i < rowCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')

        rows.push(createRow(cells, i + 1))
    }

    return rows.join('')
}