function removeData(elem) {
    var li_stuId = elem.parentElement.parentElement.children[1];
    var alter = document.getElementsByClassName("alter")[0];
    alter.style.display = "block";
    var input_admin_pwd = document.getElementById("input_admin_pwd");
    input_admin_pwd.style.display = "block";
    var input_admin_pwd_btns = input_admin_pwd.getElementsByTagName("button");
    var input_admin_pwd_input = input_admin_pwd.getElementsByTagName("input")[0];
    input_admin_pwd_input.value = "";
    input_admin_pwd_input.placeholder = "请输入系统管理员密码";
    input_admin_pwd_btns[1].onclick = function() {
        if (input_admin_pwd_input.value == "962464") {
            for (var i = 0; i < dataAdmin.length; i++) {
                if (li_stuId.innerHTML == dataAdmin[i]["stuID"]) {
                    dataAdmin.splice(i, 1);
                    break;
                }
            }
            input_admin_pwd.style.display = "none";
            alter.style.display = "none";

            dataUser = clone(dataAdmin);
            dataBackup = clone(dataUser);
            paging(dataUser);

        } else {
            input_admin_pwd_input.value = "";
            input_admin_pwd_input.placeholder = "密码错误";
        }
    }
    input_admin_pwd_btns[0].onclick = function() {
        input_admin_pwd.style.display = "none";
        alter.style.display = "none";
    }
}