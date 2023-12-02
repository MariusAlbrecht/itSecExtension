var table = document.getElementsByTagName("tbody")[0]
var headElem = document.createElement("th")

headElem.style = "padding-left: 15px;"
headElem.innerText = "score"

document.getElementsByTagName("thead")[0].rows[0].appendChild(headElem)

var score

for (var i = 0, row; row = table.rows[i]; i++) {
    score = 0
    for (var j = 2, cell; cell = row.cells[j]; j++) {
        if (cell.title === "") continue

        score += parseInt(cell.title.split(".")[0])
    }
    var elem = document.createElement("td");
    elem.style = "font-size: 1.3em; font-weight: bold; padding-left: 15px;"
    elem.innerText = score
    row.appendChild(elem)
}