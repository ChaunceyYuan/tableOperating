function deleteChecked(elem) {
    // console.log(elem);
    var showChks = document.querySelectorAll("div.stuInfoShow input[type='checkbox']");
    var check_all = document.getElementById("check_all");
    // console.log(showChks);
    if (elem == showChks[0]) {
        for (let i = 1; i < showChks.length; i++) {
            showChks[i].checked = showChks[0].checked;
        }
    } else {
        for (let i = 1; i < showChks.length; i++) {
            if (showChks[i].checked == false) {
                showChks[0].checked = false;
                break;
            }
            showChks[0].checked = true;
        }
    }
    for (let i = 0; i < showChks.length; i++) {
        if (showChks[i].checked) {
            check_all.style.display = "block";
            break;
        }
        check_all.style.display = "none";
    }


    var check_all_btn = check_all.getElementsByTagName("button")[0];
    check_all_btn.onclick = function() {
        // console.log(this);
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
                for (let i = 1; i < showChks.length; i++) {
                    if (showChks[i].checked) {
                        // console.log(showChks[i].parentElement.nextElementSibling.innerHTML);
                        for (let j = 0; j < dataAdmin.length; j++) {
                            if (showChks[i].parentElement.nextElementSibling.innerHTML == dataAdmin[j]["stuID"]) {
                                dataAdmin.splice(j, 1);
                                break;
                            }
                        }
                    }
                }

                input_admin_pwd.style.display = "none";
                alter.style.display = "none";
                check_all.style.display = "none";
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
}