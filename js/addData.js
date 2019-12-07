var add_info = document.getElementById("add_info");
var add_info_btn = add_info.getElementsByTagName("button")[0];
add_info_btn.onclick = function() {
    var alter = document.getElementsByClassName("alter")[0];
    alter.style.display = "block";
    addInfoToSelect();
    // 清空输入框
    var alter_area_inputs = alter.getElementsByTagName("input");
    alter_area_inputs[0].value = "";
    alter_area_inputs[0].nextElementSibling.style.display = "none";
    alter_area_inputs[1].value = "";
    alter_area_inputs[1].nextElementSibling.style.display = "none";
    alter_area_inputs[2].value = "";
    alter_area_inputs[2].nextElementSibling.style.display = "none";
    alter.getElementsByTagName("textarea")[0].value = "";
    // 下拉框恢复默认
    var selects = alter.getElementsByTagName("select");
    selects[0].getElementsByTagName("option")[0].selected = true;
    selects[1].getElementsByTagName("option")[0].selected = true;
    selects[2].getElementsByTagName("option")[0].selected = true;
    selects[3].getElementsByTagName("option")[0].selected = true;
    selects[4].getElementsByTagName("option")[0].selected = true;
    selects[5].getElementsByTagName("option")[0].selected = true;
    selects[6].getElementsByTagName("option")[0].selected = true;

    var stuID_input_statu = false;
    var stuName_input_statu = false;
    var stuTelNum_input_statu = false;
    alter_area_inputs[0].onblur = function() {
        stuID_input_statu = inputTset(this, /^\d{9}$/, "学号输入正确", "请输入正确的9位学号", stuID_input_statu);
    }
    alter_area_inputs[1].onblur = function() {
        stuName_input_statu = inputTset(this, /^[\u4e00-\u9fa5]{2,5}$/, "姓名输入正确", "请输入正确的姓名，2-5个汉字", stuName_input_statu);
    }
    alter_area_inputs[2].onblur = function() {
        stuTelNum_input_statu = inputTset(this, /^1[3456789]\d{9}$/, "手机号输入正确", "请输入正确的手机号码", stuTelNum_input_statu);
    }

    function inputTset(elem, reg, str1, str2, statu) {
        elem.nextElementSibling.style.display = "none";
        if (elem == alter_area_inputs[0]) {
            for (var i = 0; i < dataUser.length; i++) {
                if (elem.value == dataUser[i]["stuID"]) {
                    elem.nextElementSibling.style.display = "inline-block";
                    elem.nextElementSibling.innerHTML = "该学号已存在";
                    elem.nextElementSibling.style.color = "#f00";
                    elem.nextElementSibling.style.backgroundImage = "url(img/wrong.png)";
                    statu = false;
                    break;
                }
            }
        }
        if (reg.test(elem.value)) {
            elem.nextElementSibling.style.display = "inline-block";
            elem.nextElementSibling.innerHTML = str1;
            elem.nextElementSibling.style.color = "#0f0";
            elem.nextElementSibling.style.backgroundImage = "url(img/ok.png)";
            statu = true;
        } else {
            elem.nextElementSibling.style.display = "inline-block";
            elem.nextElementSibling.innerHTML = str2;
            elem.nextElementSibling.style.color = "#f00";
            elem.nextElementSibling.style.backgroundImage = "url(img/wrong.png)";
            statu = false;
        }
        return statu;
    }

    document.getElementById("alter_area_btn2").onclick = function() {
        stuID_input_statu = inputTset(alter_area_inputs[0], /^\d{9}$/, "学号输入正确", "请输入正确的9位学号", stuID_input_statu);
        stuName_input_statu = inputTset(alter_area_inputs[1], /^[\u4e00-\u9fa5]{2,5}$/, "姓名输入正确", "请输入正确的姓名，2-5个汉字", stuName_input_statu);
        stuTelNum_input_statu = inputTset(alter_area_inputs[2], /^1[3456789]\d{9}$/, "手机号输入正确", "请输入正确的手机号码", stuTelNum_input_statu);
        if (stuID_input_statu == true && stuName_input_statu == true && stuTelNum_input_statu == true) {
            var input_admin_pwd = document.getElementById("input_admin_pwd");
            input_admin_pwd.style.display = "block";
            var input_admin_pwd_btns = input_admin_pwd.getElementsByTagName("button");
            var input_admin_pwd_input = input_admin_pwd.getElementsByTagName("input")[0];
            input_admin_pwd_input.value = "";
            input_admin_pwd_input.placeholder = "请输入系统管理员密码";
            input_admin_pwd_btns[1].onclick = function() {
                if (input_admin_pwd_input.value == "962464") {
                    input_admin_pwd.style.display = "none";
                    alter.style.display = "none";
                    var obj = {};
                    // 显示学号
                    obj["stuID"] = alter_area_inputs[0].value;
                    // 显示姓名
                    obj["stuName"] = alter_area_inputs[1].value;
                    // 显示性别
                    obj["stuSex"] = selects[0].options[selects[0].selectedIndex].text;
                    // 显示年龄
                    obj["stuAge"] = selects[1].options[selects[1].selectedIndex].text;
                    // 年份
                    var newYear = selects[2].options[selects[2].selectedIndex].text;
                    // 月份
                    var newMonth = selects[3].options[selects[3].selectedIndex].text;
                    // 如果月份小于10，补0，也为了下一次修改不出错
                    if (Number(newMonth) < 10) {
                        newMonth = "0" + newMonth;
                    }
                    // 日期
                    var newDay = selects[4].options[selects[4].selectedIndex].text;
                    // 如果日期小于10，补0，也为了下一次修改不出错
                    if (Number(newDay) < 10) {
                        newDay = "0" + newDay;
                    }
                    // 显示生日
                    obj["stuBirthday"] = newYear + newMonth + newDay;
                    // 显示手机号
                    obj["stuTelNum"] = alter_area_inputs[2].value;
                    // 显示籍贯
                    obj["stuNativePlace"] = selects[5].options[selects[5].selectedIndex].text + selects[6].options[selects[6].selectedIndex].text;
                    // 显示简介
                    obj["stuDescribe"] = alter.getElementsByTagName("textarea")[0].value;
                    dataAdmin.unshift(obj);
                    dataUser = clone(dataAdmin);
                    dataBackup = clone(dataUser);
                    paging(dataUser);
                    obj = null;
                } else {
                    input_admin_pwd_input.value = "";
                    input_admin_pwd_input.placeholder = "密码错误";
                }
            }
            input_admin_pwd_btns[0].onclick = function() {
                input_admin_pwd.style.display = "none";
            }
        } else {
            // alert("wrong");
            if (stuID_input_statu == false) {
                this.parentElement.parentElement.getElementsByTagName("p")[0].style.display = "inline-block";
                this.parentElement.parentElement.getElementsByTagName("p")[0].innerHTML = "请输入正确的9位学号";
                this.parentElement.parentElement.getElementsByTagName("p")[0].style.color = "#f00";
                this.parentElement.parentElement.getElementsByTagName("p")[0].style.backgroundImage = "url(img/wrong.png)";
            }
            if (stuName_input_statu == false) {
                this.parentElement.parentElement.getElementsByTagName("p")[1].style.display = "inline-block";
                this.parentElement.parentElement.getElementsByTagName("p")[1].innerHTML = "请输入正确的姓名，2-5个汉字";
                this.parentElement.parentElement.getElementsByTagName("p")[1].style.color = "#f00";
                this.parentElement.parentElement.getElementsByTagName("p")[1].style.backgroundImage = "url(img/wrong.png)";
            }
            if (stuTelNum_input_statu == false) {
                this.parentElement.parentElement.getElementsByTagName("p")[2].style.display = "inline-block";
                this.parentElement.parentElement.getElementsByTagName("p")[2].innerHTML = "请输入正确的手机号码";
                this.parentElement.parentElement.getElementsByTagName("p")[2].style.color = "#f00";
                this.parentElement.parentElement.getElementsByTagName("p")[2].style.backgroundImage = "url(img/wrong.png)";
            }
        }
    }
    document.getElementById("alter_area_btn1").onclick = function() {
        var alter = document.getElementsByClassName("alter")[0];
        alter.style.display = "block";
        // 清空输入框
        var alter_area_inputs = alter.getElementsByTagName("input");
        alter_area_inputs[0].value = "";
        alter_area_inputs[0].nextElementSibling.style.display = "none";
        alter_area_inputs[1].value = "";
        alter_area_inputs[1].nextElementSibling.style.display = "none";
        alter_area_inputs[2].value = "";
        alter_area_inputs[2].nextElementSibling.style.display = "none";
        alter.getElementsByTagName("textarea")[0].value = "";
        // 下拉框恢复默认
        var selects = alter.getElementsByTagName("select");
        selects[0].getElementsByTagName("option")[0].selected = true;
        selects[1].getElementsByTagName("option")[0].selected = true;
        selects[2].getElementsByTagName("option")[0].selected = true;
        selects[3].getElementsByTagName("option")[0].selected = true;
        selects[4].getElementsByTagName("option")[0].selected = true;
        selects[5].getElementsByTagName("option")[0].selected = true;
        selects[6].getElementsByTagName("option")[0].selected = true;
    }
}

// 点击关闭时，关闭修改或者添加的页面
document.getElementById("close_alter_area").onclick = function() {
    document.getElementsByClassName("alter")[0].style.display = "none";
}