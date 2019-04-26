var db;

function plus_btn() {

    var plusUI = document.createElement('a');
    //plusUI.setAttribute('type', 'button');
    plusUI.setAttribute('href', 'javascript:void(0);');
    plusUI.setAttribute('class', 'float');
    plusUI.setAttribute('id', 'btn1');
    plusUI.innerHTML = "<i class=\"fa fa - plus my - float \"></i>";

    var ids = document.getElementById('con_newpop');
    ids.appendChild(plusUI);

    var link = document.getElementById('btn1');
    link.addEventListener('click', function() {
        noti();
    });
}

function noti() {
    if (!window.openDatabase) {

        alert("현재 브라우저는 Web SQL Database를 지원하지 않습니다.")
        return false;

    } else {
        //주소받아서 id확인
        var full_url = window.location.href
        stidx = full_url.indexOf("=");
        edidx = full_url.indexOf("&");

        var pid = full_url.substring(stidx + 1, edidx);
        //alert(pid);

        //db
        db = openDatabase("h-db", "1.0", "협조문 db", "1024*1024");
        if (selectData(pid)) {
            prompt('input data');
        } else {

        }
    }
}

function createTable() {
    db.transaction(function(tx) {
        tx.executeSql("create table main(pid,name)");
    });
}

function insertData() {
    db.transaction(function(tx) {
        tx.executeSql("insert into main values(0,'a')");
    });
}

function droptable() {
    db.transaction(function(tx) {
        tx.executeSql("DROP TABLE MAIN");
    });
}

function selectData(pids) {
    var sqlstring = "SELECT " + pids + " FROM main WHERE pid";

    db.transaction(function(tx) {
        var tx_result;
        tx.executeSql(sqlstring, [],

            function(tx, result) {
                var row = result.rows.item(0);
                tx_result = confirm(row['id'] + "/" + row['name']);
            });
        return tx_result;
    });
}

window.onload = plus_btn;