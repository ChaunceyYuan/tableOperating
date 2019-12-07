function alterData(elem) {
    // console.log(elem);
    addInfoToSelect();
    var p_s = document.getElementsByClassName("alter_area")[0].getElementsByTagName("p");
    for (var i = 0; i < p_s.length; i++) {
        p_s[i].style.display = "none";
    }
    var alter = document.getElementsByClassName("alter")[0];
    alter.style.display = "block";
    var alter_area_inputs = alter.getElementsByTagName("input");
    var lis = elem.parentElement.parentElement.children;
    // 显示学号
    alter_area_inputs[0].value = lis[1].innerHTML;
    // 显示姓名
    alter_area_inputs[1].value = lis[2].innerHTML;
    // 显示手机号
    alter_area_inputs[2].value = lis[6].innerHTML;
    // 显示简介
    alter.getElementsByTagName("textarea")[0].value = lis[8].innerHTML;
    // 在年龄的下拉框中，显示当前需要修改的人的年龄
    select_option_age[Number(lis[4].innerHTML) - 16].selected = true;
    // 显示出生日期的年份
    select_option_year[Number(lis[5].innerHTML.slice(0, 4)) - 1989].selected = true;
    // 显示出生日期的月份
    select_option_month[Number(lis[5].innerHTML.slice(4, 6)) - 1].selected = true;
    // 显示出生日期的日期
    select_option_day[Number(lis[5].innerHTML.slice(6)) - 1].selected = true;
    // 显示性别
    var select_option_sex = document.getElementsByName("select_option_sex")[0];
    if (lis[3].innerHTML == "男") {
        select_option_sex[1].selected = true;
    } else if (lis[3].innerHTML == "女") {
        select_option_sex[0].selected = true;
    }
    // 显示籍贯
    var stuNativePlace = lis[7].innerHTML;
    // 显示省份
    // console.log(stuNativePlace);
    var select_option_province_names = document.getElementsByName("select_option_province")[0].children;
    // console.dir(select_option_province_names);
    for (var i = 0; i < select_option_province_names.length; i++) {
        var a = stuNativePlace.indexOf(select_option_province_names[i].innerHTML);
        if (a != -1) {
            // console.log(select_option_province_names[i].innerHTML);
            select_option_province_names[i].selected = true;
            var select_option_province_names_value = select_option_province_names[i].value;
            // 刷新显示地级市
            showCities(i);
            break;
        }
    }
    // 解决获取不到地级市的问题的函数
    function showCities(a) {
        // 每次改变身份选项后，地级市级和县级下拉框内容清空，设置为“请选择”
        select_option_cities.innerHTML = "<option>-请选择-</option>";
        // console.log(a);
        // 循环遍历城市列表
        for (var j = 0; j < cityData[a - 1].children.length; j++) {
            // 将城市列表中的第a-1个元素的每个children的text和value作为参数，生成新的option项
            var opt = new Option(cityData[a - 1].children[j].text, cityData[a - 1].children[j].value);
            // 将新生成的option加入到地级市的下拉框中
            select_option_cities.appendChild(opt);
        }
    }
    // 显示地级市
    // console.log(stuNativePlace);
    var select_option_cities_names = document.getElementsByName("select_option_cities")[0].children;
    // console.dir(select_option_cities_names);
    for (var i = 0; i < select_option_cities_names.length; i++) {
        var a = stuNativePlace.indexOf(select_option_cities_names[i].innerHTML);
        if (a != -1) {
            // console.log(select_option_cities_names[i].innerHTML);
            select_option_cities_names[i].selected = true;
            break;
        }
    }

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

    // 修改后提交
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

                    var stuIDSave = lis[1].innerHTML;

                    // 显示学号
                    lis[1].innerHTML = alter_area_inputs[0].value;
                    obj["stuID"] = lis[1].innerHTML;
                    // 显示姓名
                    lis[2].innerHTML = alter_area_inputs[1].value;
                    obj["stuName"] = lis[2].innerHTML;
                    // 显示性别
                    lis[3].innerHTML = select_option_sex.options[select_option_sex.selectedIndex].text;
                    obj["stuSex"] = lis[3].innerHTML;
                    // 显示年龄
                    lis[4].innerHTML = select_option_age.options[select_option_age.selectedIndex].text;
                    obj["stuAge"] = lis[4].innerHTML;
                    // 年份
                    var newYear = select_option_year.options[select_option_year.selectedIndex].text;
                    // 月份
                    var newMonth = select_option_month.options[select_option_month.selectedIndex].text;
                    // 如果月份小于10，补0，也为了下一次修改不出错
                    if (Number(newMonth) < 10) {
                        newMonth = "0" + newMonth;
                    }
                    // 日期
                    var newDay = select_option_day.options[select_option_day.selectedIndex].text;
                    // 如果日期小于10，补0，也为了下一次修改不出错
                    if (Number(newDay) < 10) {
                        newDay = "0" + newDay;
                    }
                    // 显示生日
                    lis[5].innerHTML = newYear + newMonth + newDay;
                    obj["stuBirthday"] = lis[5].innerHTML;
                    // 显示手机号
                    lis[6].innerHTML = alter_area_inputs[2].value;
                    obj["stuTelNum"] = lis[6].innerHTML;
                    // 显示籍贯
                    lis[7].innerHTML = select_option_province.options[select_option_province.selectedIndex].text + select_option_cities.options[select_option_cities.selectedIndex].text;
                    obj["stuNativePlace"] = lis[7].innerHTML;
                    // 显示简介
                    lis[8].innerHTML = alter.getElementsByTagName("textarea")[0].value;
                    obj["stuDescribe"] = lis[8].innerHTML;



                    for (let i = 0; i < dataAdmin.length; i++) {
                        if (dataAdmin[i]["stuID"] == stuIDSave) {
                            dataAdmin.splice(i, 1, obj);
                            break;
                        }
                    }
                    // console.log(dataAdmin);
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

    // 修改时重置
    document.getElementById("alter_area_btn1").onclick = function() {
        var p_s = this.parentElement.parentElement.getElementsByTagName("p");
        for (var i = 0; i < p_s.length; i++) {
            p_s[i].style.display = "none";
        }
        alter_area_inputs[0].value = "";
        alter_area_inputs[1].value = "";
        select_option_sex[0].selected = true;
        select_option_age[0].selected = true;
        select_option_year[0].selected = true;
        select_option_month[0].selected = true;
        select_option_day[0].selected = true;
        alter_area_inputs[2].value = "";
        select_option_province[0].selected = true;
        select_option_cities[0].selected = true;
        alter.getElementsByTagName("textarea")[0].value = "";
    }
}