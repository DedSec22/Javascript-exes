












// let $ = (id) => document.getElementById(id);
function val(id, value = null) {
    if (value != null)
    document.getElementById(id).value = value;
    else
        return document.getElementById(id).value;

}
function html(id, text = null) {
    if (text != null)
    document.getElementById(id).innerHTML = text;
    else
    document.getElementById(id).innerHTML = '';
}

let GenerateTable = function () {
    let rows = document.getElementById("rows");
    let columns = document.getElementById("columns");
    let output = document.getElementById("output");

    var SelectedLoop = document.querySelector("input[name='loop']:checked").value;
    console.log(SelectedLoop)

    let temp = '';
    var totalrow = parseInt(val("rows"));
    var totalcolumn = parseInt(val("columns"));

    if (SelectedLoop === 'for') {
        for (let i = 1; i <= totalrow; i = i + 1)
        {
            temp += '<tr>';
            for (let c = 1; c <= totalcolumn; c++)
            {
                temp += `<td>${c}</td>`;
            }
            temp += '</tr>';
        }

    }
    else if (SelectedLoop === 'while') {
        let i = 1;
        while (i <= totalrow) {
            temp += '<tr>';
            let c = 1;
            while (c <= totalcolumn) {
                temp += `<td>${c}</td>`;
                c++;
            }
            temp += '</tr>';
            i++;
        }
    }
    else if (SelectedLoop === 'dowhile') {
        let i =1;
        do{
            temp += '<tr>';
            let c = 1;
            do{
                temp += `<td>${c}</td>`;
                c++;
            }
            while (c <= totalcolumn);
            temp += '</tr>';
            i++;
        }
        while(i <= totalrow);
    }
    output.innerHTML = temp;
    html('output', temp);
}

function ResetAll() {
    val("rows", "");
    val("columns", "");
    html("output");
    let radio = document.querySelector("input[name='loop']:checked");
    radio.checked = false;
}