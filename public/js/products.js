
window.onload = () => {

    fetch('http://localhost:3000/product').then((response) => {
        var i;
        var Strloop = '';
        Strloop += '<h1> Products </h1>'
        Strloop += '<table border="1" cellspacing="0" align="Left" verticalalign="Top" style="margin-bottom:5px;" id="tbl">';

        Strloop += '<tr>'
        Strloop += '<th> ProductId </th>'
        Strloop += '<th> ProductName</th>'
        Strloop += '<th> CategoryName </th>'
        Strloop += '</tr>'

        response.json().then((data) => {
            for (i = 0; i < data.length; i++) {
                Strloop += '<tr>'
                Strloop += '<td>' + data[i].ProductId + '</td>'
                Strloop += '<td>' + data[i].ProductName + ' </td>'
                Strloop += '<td>' + data[i].CategoryName + '</td>'
                Strloop += '<td> <button id="BtnEdit_' + data[i].ProductId + '"> Edit </button> </td>'
                Strloop += '<td> <button id="BtnDelete_' + data[i].ProductId + '"> Delete </button> </td>'
                Strloop += '</tr>';
            }
            Strloop += '</table>';
            document.write(Strloop)
        })
    })
}