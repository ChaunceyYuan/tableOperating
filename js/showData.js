// showData(dataUser);// 翻页中调用了此函数，翻页函数在全局调用了

// 显示标题
function showDataTittle(dataTitle) {
    var stuInfoShow = document.getElementsByClassName("stuInfoShow")[0];
    var frag = document.createDocumentFragment();
    var ulTittle = document.createElement("ul");

    var liTittleChk = document.createElement("li");
    setLiStyle("选择", liTittleChk)
    var chkBox = document.createElement("input");
    chkBox.type = "checkbox";
    chkBox.onclick = function() {
        deleteChecked(this);
    }
    liTittleChk.appendChild(chkBox);
    chkBox = null;
    var chkSpan = document.createElement("span");
    chkSpan.innerHTML = "全选";
    liTittleChk.appendChild(chkSpan);
    chkSpan = null;
    ulTittle.appendChild(liTittleChk);
    liTittleChk = null;

    for (let key in dataTitle[0]) {
        // console.log(key);
        var liTittle = document.createElement("li");
        setLiStyle(key, liTittle);
        liTittle.innerHTML = dataTitle[0][key];
        ulTittle.appendChild(liTittle);
        liTittle = null;
    }

    var liTittleOperating = document.createElement("li");
    setLiStyle("操作", liTittleOperating);
    liTittleOperating.innerHTML = "操作";
    ulTittle.appendChild(liTittleOperating);
    liTittleOperating = null;

    frag.appendChild(ulTittle);
    stuInfoShow.appendChild(frag);

    var stuInfoShow = null;
    var frag = null;
    var ulTittle = null;
}
// 显示内容
function showData(dataUser) {
    var stuInfoShow = document.getElementsByClassName("stuInfoShow")[0];
    stuInfoShow.innerHTML = "";
    showDataTittle(dataTitle);
    var frag = document.createDocumentFragment();

    if (dataUser.length != 0) {
        for (let i = 0; i < dataUser.length; i++) {
            // console.log(dataUser[i]);
            var ulData = document.createElement("ul");
            if (i % 2 == 0) {
                ulData.style.backgroundColor = "#F3F3F3";
            } else {
                ulData.style.backgroundColor = "#ffffff";
            }

            var liDataChk = document.createElement("li");
            setLiStyle("选择", liDataChk);
            var chkBox = document.createElement("input");
            chkBox.type = "checkbox";
            chkBox.onclick = function() {
                deleteChecked(this);
            }
            liDataChk.appendChild(chkBox);
            ulData.appendChild(liDataChk);
            liDataChk = null;
            chkBox = null;

            for (let key in dataUser[i]) {
                var liData = document.createElement("li");
                setLiStyle(key, liData);
                liData.innerHTML = dataUser[i][key];
                ulData.appendChild(liData);
                liData = null;
            }

            var liDataOperating = document.createElement("li");
            setLiStyle("操作", liDataOperating);
            for (let j = 0; j < 2; j++) {
                var btn = document.createElement("button");
                if (j == 0) {
                    btn.innerHTML = "修改";
                    btn.onclick = function() {
                        alterData(this);
                    }
                } else {
                    btn.innerHTML = "删除";
                    btn.onclick = function() {
                        removeData(this);
                    }
                }
                liDataOperating.appendChild(btn);
                btn = null;
            }
            ulData.appendChild(liDataOperating);
            liDataOperating = null;

            frag.appendChild(ulData);
            ulData = null;
        }
    } else {
        var noDataDiv = document.createElement("div");
        noDataDiv.className = "noData";
        frag.appendChild(noDataDiv);
        noDataDiv = null;
    }

    stuInfoShow.appendChild(frag);
    var frag = null;
    var stuInfoShow = null;
}



// 设置li的样式 宽度
function setLiStyle(key, li) {
    // 通过传入的key值进行区分
    switch (key) {
        // 如果是学号和生日栏
        case "stuID":
        case "stuBirthday":
            // 宽度设置为100
            li.style.width = "100px";
            // 结束
            break;
        case "stuName": // 姓名
            // 宽度设置为90
            li.style.width = "90px";
            // 结束
            break;
        case "stuSex": // 性别
        case "stuAge": // 年龄
            // 宽度设置为50
            li.style.width = "50px";
            // 结束
            break;
        case "stuTelNum": // 电话号码
        case "stuNativePlace": // 籍贯
            // 宽度设置为120
            li.style.width = "120px";
            // 结束
            break;
        case "stuDescribe": // 描述
            // 宽度设置为268
            li.style.width = "268px";
            // 结束
            break;
        case "操作":
            li.style.width = "170px";
            // 结束
            break;
        case "选择":
            li.style.width = "80px";
            break;
        default:
            break;
    }
}