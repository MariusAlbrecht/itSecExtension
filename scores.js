let table = document.getElementsByTagName("tbody")[0]
let headElem = document.createElement("th")
const addOnIncomplete = await isignoreInco() ? 0 : 9999
const rowStart = await isIgnoreFirst4() ? 0 : 4

headElem.style = "padding-left: 15px;"
headElem.innerText = "score"
document.getElementsByTagName("thead")[0].rows[0].appendChild(headElem)
let score, mbyANumber
for (let i = rowStart, row; row = table.rows[i]; i++) {
    score = 0
    for (let j = 2, cell; cell = row.cells[j]; j++) {
        mbyANumber = parseInt(cell.title.split(".")[0])
        score += isNaN(mbyANumber) ? addOnIncomplete : mbyANumber
    }
    let elem = document.createElement("td");
    elem.style = "font-size: 1.3em; font-weight: bold; padding-left: 15px;"
    elem.innerText = score
    row.appendChild(elem)
}

async function isIgnoreFirst4() {
    let res = await browser.storage.local.get('IgnoreFirst4')
    return res.first4
}
async function isignoreInco() {
    let res = await browser.storage.local.get('first4')
    return res.first4
}