var select_option_age;
var select_option_year;
var select_option_month;
var select_option_day;
var select_option_province;
var select_option_cities;

function addInfoToSelect() {
    // 为年龄下拉框中加入数据
    select_option_age = document.getElementsByName("select_option_age")[0];
    select_option_age.innerHTML = "";
    // console.log(select_option_age);
    for (var i = 16; i <= 30; i++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        option.value = i;
        select_option_age.appendChild(option);
    }

    // 为年份下拉框中加入数据
    select_option_year = document.getElementsByName("select_option_year")[0];
    select_option_year.innerHTML = "";
    for (var i = 1989; i <= 2003; i++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        option.value = i;
        select_option_year.appendChild(option);
    }

    // 为月份下拉框中加入数据
    select_option_month = document.getElementsByName("select_option_month")[0];
    select_option_month.innerHTML = "";
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        option.value = i;
        select_option_month.appendChild(option);
    }

    // 为日期下拉框中加入数据
    select_option_day = document.getElementsByName("select_option_day")[0];
    select_option_day.innerHTML = "";
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        option.value = i;
        select_option_day.appendChild(option);
    }


    // 为籍贯二级联动下拉框中加入数据
    //获取显示直辖市、省的下拉框
    select_option_province = document.getElementsByName("select_option_province")[0];
    //获取直辖市、地级市的下拉框
    select_option_cities = document.getElementsByName("select_option_cities")[0];
    // 默认设置为请选择选项
    select_option_province.innerHTML = "<option>-请选择-</option>";
    select_option_cities.innerHTML = "<option>-请选择-</option>";
    // 循环遍历城市列表
    for (var i = 0; i < cityData.length; i++) {
        // 将城市列表中的每个元素的text和value作为参数，生成新的option项
        var opt = new Option(cityData[i].text, cityData[i].value);
        // 将新生成的option加入到直辖市、省的下拉框中
        select_option_province.appendChild(opt);
    }
    // 为直辖市、 省的下拉框加入onchange事件
    select_option_province.onchange = function() {
        // 每次改变身份选项后，地级市级和县级下拉框内容清空，设置为“请选择”
        select_option_cities.innerHTML = "<option>-请选择-</option>";
        // 获取当前被选中的option的下标，-1是为了清除加了“请选择”带来的影响
        var a = this.selectedIndex - 1;
        // 循环遍历城市列表
        for (var j = 0; j < cityData[a].children.length; j++) {
            // 将城市列表中的第a个元素的每个children的text和value作为参数，生成新的option项
            var opt = new Option(cityData[a].children[j].text, cityData[a].children[j].value);
            // 将新生成的option加入到地级市的下拉框中
            select_option_cities.appendChild(opt);
        }
    }
}