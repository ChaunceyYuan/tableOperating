// 获取排序菜单
var sort_menu = document.getElementsByClassName("sort_menu")[0];

// 获取
var sortByIDUp = sort_menu.getElementsByTagName("input")[0];
sortByIDUp.checked = true;
sortByIDUp.onclick = function() {
    for (var i = 0; i < dataUser.length - 1; i++) {
        for (var j = 0; j < dataUser.length - 1 - i; j++) {
            if (dataUser[j]["stuID"] > dataUser[j + 1]["stuID"]) {
                var obj = dataUser[j];
                dataUser[j] = dataUser[j + 1];
                dataUser[j + 1] = obj;
            }
        }
    }
    if (dataUser.length == dataAdmin.length) {
        dataAdmin = clone(dataUser);
        dataBackup = clone(dataUser);
    }
    paging(dataUser);
}

var sortByIDDown = sort_menu.getElementsByTagName("input")[1];
sortByIDDown.onclick = function() {
    for (var i = 0; i < dataUser.length - 1; i++) {
        for (var j = 0; j < dataUser.length - 1 - i; j++) {
            if (dataUser[j]["stuID"] < dataUser[j + 1]["stuID"]) {
                var obj = dataUser[j];
                dataUser[j] = dataUser[j + 1];
                dataUser[j + 1] = obj;
            }
        }
    }
    paging(dataUser);
}

var sortByNameUp = sort_menu.getElementsByTagName("input")[2];
sortByNameUp.onclick = function() {
    for (var i = 0; i < dataUser.length - 1; i++) {
        for (var j = 0; j < dataUser.length - 1 - i; j++) {
            if (pinyin.getFullChars(dataUser[j]["stuName"]) > pinyin.getFullChars(dataUser[j + 1]["stuName"])) {
                var obj = dataUser[j];
                dataUser[j] = dataUser[j + 1];
                dataUser[j + 1] = obj;
            }
        }
    }
    paging(dataUser);
}

var sortByNameDown = sort_menu.getElementsByTagName("input")[3];
sortByNameDown.onclick = function() {
    for (var i = 0; i < dataUser.length - 1; i++) {
        for (var j = 0; j < dataUser.length - 1 - i; j++) {
            if (pinyin.getFullChars(dataUser[j]["stuName"]) < pinyin.getFullChars(dataUser[j + 1]["stuName"])) {
                var obj = dataUser[j];
                dataUser[j] = dataUser[j + 1];
                dataUser[j + 1] = obj;
            }
        }
    }
    paging(dataUser);
}

var sortByAgeUp = sort_menu.getElementsByTagName("input")[4];
sortByAgeUp.onclick = function() {
    for (var i = 0; i < dataUser.length - 1; i++) {
        for (var j = 0; j < dataUser.length - 1 - i; j++) {
            if (dataUser[j]["stuBirthday"] < dataUser[j + 1]["stuBirthday"]) {
                var obj = dataUser[j];
                dataUser[j] = dataUser[j + 1];
                dataUser[j + 1] = obj;
            }
        }
    }
    paging(dataUser);
}

var sortByAgeDown = sort_menu.getElementsByTagName("input")[5];
sortByAgeDown.onclick = function() {
    for (var i = 0; i < dataUser.length - 1; i++) {
        for (var j = 0; j < dataUser.length - 1 - i; j++) {
            if (dataUser[j]["stuBirthday"] > dataUser[j + 1]["stuBirthday"]) {
                var obj = dataUser[j];
                dataUser[j] = dataUser[j + 1];
                dataUser[j + 1] = obj;
            }
        }
    }
    paging(dataUser);
}

function defaultChecked() {
    var defaultChecked = sort_menu.getElementsByTagName("input");
    for (var i = 0; i < defaultChecked.length; i++) {
        if (i == 0) {
            defaultChecked[i].checked = true;
            continue;
        }
        defaultChecked[i].checked = false;
    }
}