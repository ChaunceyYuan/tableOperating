// 获取查询菜单
var select_menu = document.getElementsByClassName("select_menu")[0];
// 获取查询按钮
var select_btn = document.getElementById("select_btn");
// 为查询按钮绑定单击事件
select_btn.onclick = function() {
    dataUser = clone(dataBackup);
    defaultChecked();
    // 获取搜索查询菜单中的输入框，两个，姓名输入框和电话输入框
    var select_inputs = this.parentElement.getElementsByTagName("input");
    // 获取性别选择中的下拉框
    var select_select = document.getElementById("select_sex").getElementsByTagName("select")[0];
    // 获取下拉框中的被选中的选项的文本
    var select_select_text = select_select.options[select_select.selectedIndex].text;
    // 定义新数组，用于存放查询到的数据
    var selectDataUser1 = [];
    // 如果姓名输入框里面的内容为空，表示查询所有的学生信息
    if (select_inputs[0].value == "") {
        // 遍历数组
        for (let i = 0; i < dataUser.length; i++) {
            // 将所有数据压入到新的数组
            selectDataUser1.push(dataUser[i]);
        }
    } else {
        for (let i = 0; i < dataUser.length; i++) {
            var regStr = "^[\u4e00-\u9fa5]*" + select_inputs[0].value + "[\u4e00-\u9fa5]*$";
            var reg_exp_select = new RegExp(regStr);
            if (reg_exp_select.test(dataUser[i]["stuName"])) {
                selectDataUser1.push(dataUser[i]);
            }
        }
    }
    var selectDataUser2 = [];
    if (select_inputs[1].value == "") {
        for (var i = 0; i < selectDataUser1.length; i++) {
            selectDataUser2.push(selectDataUser1[i]);
        }
    } else {
        for (var i = 0; i < selectDataUser1.length; i++) {
            var regStr = "^\\d*" + select_inputs[1].value + "\\d*$";
            var reg_exp_select = new RegExp(regStr);
            if (reg_exp_select.test(selectDataUser1[i]["stuTelNum"])) {
                // console.log(stuData[i]["stuName"]);
                selectDataUser2.push(selectDataUser1[i]);
            }
        }
        console.log(selectDataUser2);
    }
    var selectDataUser3 = [];
    // console.log(select_select_text);
    if (select_select_text == "-请选择-") {
        for (var i = 0; i < selectDataUser2.length; i++) {
            selectDataUser3.push(selectDataUser2[i]);
        }
    } else if (select_select_text == "男") {
        for (var i = 0; i < selectDataUser2.length; i++) {
            if (selectDataUser2[i]["stuSex"] == "男") {
                selectDataUser3.push(selectDataUser2[i]);
            }
        }
    } else if (select_select_text == "女") {
        for (var i = 0; i < selectDataUser2.length; i++) {
            if (selectDataUser2[i]["stuSex"] == "女") {
                selectDataUser3.push(selectDataUser2[i]);
            }
        }
    }
    dataUser = selectDataUser3;
    paging(dataUser);
}