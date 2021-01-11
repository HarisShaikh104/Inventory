
window.onload = () => {

    fetch('http://localhost:3000/category').then((response) => {
        var i;
        var Strloop = '';
        Strloop += '<h1> Category </h1>'
        Strloop += '<table border="1" cellspacing="0" align="Left" verticalalign="Top" style="margin-bottom:5px;" id="tbl">';

        Strloop += '<tr>'
        Strloop += '<th> CategoryId </th>'
        Strloop += '<th> CategoryName </th>'
        Strloop += '</tr>'

        response.json().then((data) => {
            for (i = 0; i < data.length; i++) {
                Strloop += '<tr>'
                Strloop += '<td>' + data[i].CategoryId + '</td>'
                Strloop += '<td>' + data[i].CategoryName + '</td>'
                Strloop += '<td> <button id="BtnEdit_' + data[i].CategoryId + '"> Edit </button> </td>'
                Strloop += '<td> <button id="BtnDelete_' + data[i].CategoryId + '" onclick="replyClick(this.id)"> Delete </button> </td>'
                Strloop += '</tr>';
            }
            Strloop += '</table>';
            document.write(Strloop)
        })
    })
}

function replyClick(id) {
    var id = id.split('_')
    var StrJson = '{'
    StrJson += '"CategoryId":"' + id[1] + '"'
    StrJson += '}'

    fetch('http://localhost:3000/category/delete', {
        method: 'DELETE',
        body: StrJson
    }).then((response) => {
        
    })
}