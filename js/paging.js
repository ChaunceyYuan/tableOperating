// 调用翻页函数，第一次翻页，用于显示默认的页面信息
paging(dataUser);


// 定义翻页函数，参数为传递过来的学生信息数组的函数
function paging(dataUser) {
    // 定义当前页数
    var pageNo = 1;
    // 每页显示的数据条数
    var pageSize = 9;
    // 定义默认的每页显示的数据条数，防止后续操作修改了每页显示的数据条数
    var pageSizeDafualt = 9;
    // 定义数据总条数，数据总条数等于参数传递进来的数组的长度
    var pageCount = dataUser.length;
    // 定义总页数，总页数等于数据总条数除以每页显示的数据条数向上取整
    var pageSum = Math.ceil((pageCount / pageSize));
    // 将数据显示区域的高度设置为每页限速的数据条数加上1（标题行）乘60 再加上一点偏移量
    document.getElementById("stuInfoShow").style.height = (pageSizeDafualt + 1) * 60 + 3 + "px";
    // 如果总条数小于每页显示的条数
    if (pageCount < pageSize) {
        // 总页数等于1
        pageSum = 1;
        // 每页显示的条数等于数据总条数
        pageSize = pageCount;
    }



    // 获取页码区域
    var paging = document.getElementById("paging");

    // 刷新页码
    paging.innerHTML = "<button>上一页</button><button>下一页</button>";

    // 创建一个虚拟节点frag
    var frag = document.createDocumentFragment();
    // 获取页码中的第二个button
    var theSecbtn = document.getElementById("paging").getElementsByTagName("button")[1];
    // 根据当前应该有的总页数显示页数按钮
    for (let i = 0; i < pageSum; i++) {
        // 创建一个button
        var btn = document.createElement("button");
        // button的内容等于当前i+1
        btn.innerHTML = i + 1;
        // 页码按钮宽度30
        btn.style.width = "30px";
        // 为每个按钮绑定单击事件
        btn.onclick = function() {
                // 当前页数等于按钮中的数字转换成number
                pageNo = Number(this.innerHTML);
                // 调用页面内容改变的函数
                pageChange();
            }
            // 将创建的btn加入到frag中
        frag.appendChild(btn);
    }
    // 将frag虚拟节点内的元素加入到页码显示区域中
    paging.insertBefore(frag, theSecbtn);
    // 设置新的翻页后，总是第一页的按钮高亮
    paging.style.width = 2 * 60 + 30 * pageSum + (pageSum + 1) * 20 + "px";
    paging.children[1].style.backgroundColor = "#52d3f0";


    // 调用页面内容改变的函数，首次调用
    pageChange();


    // 获取页码中的所有button
    var pagingBtn = paging.getElementsByTagName("button");
    // 为第一个button绑定单击事件，即上一页按钮
    pagingBtn[0].onclick = function() {
        // 当前页码减1
        pageNo--;
        // 清除删除已选框
        check_all.style.display = "none";
        // 调用页面内容改变的函数
        pageChange();
    }

    // 为第二个button绑定单击事件，即下一页按钮
    pagingBtn[pagingBtn.length - 1].onclick = function() {
        // 当前页码加1
        pageNo++;
        // 清除删除已选框
        check_all.style.display = "none";
        // 调用页面内容改变的函数
        pageChange();
    }



    // 定义页面内容改变的函数
    function pageChange() {
        // 将页面显示的条数设置为默认条数，防止后续操作修改了每页显示的数据条数
        pageSize = pageSizeDafualt;
        // 如果当前页数超过了总页数
        if (pageNo >= pageSum) {
            // 当前也始终的等于总页数
            pageNo = pageSum;
        }
        // 如果当期页数变得比1小
        if (pageNo <= 0) {
            // 当前页数等于1
            pageNo = 1;
        }
        // 定义当前页显示的数据是从数据的第几条开始的，等于当前也减去1乘以每页显示的条数
        var startNo = (pageNo - 1) * pageSize;
        // 如果数据总条数减去当前页乘以每页显示的条数小于0，即到了最后一页，且最后一页需要显示的数据条数小于每一页应该显示的数据条数
        if ((pageCount - pageNo * pageSize) < 0) {
            // 将当前页显示的数据条数设置未剩下的需要显示的数据条数，即总条数减去前面n多页已经显示过的内容
            pageSize = pageCount - (pageSum - 1) * pageSize;
        }
        // 定义一个新的数据对象，用于存储当前页需要显示的数据
        var newDataUser = [];
        // 遍历参数传进来的数据，从当前也需要从第几条需要显示的数据开始，到这一条加上每页需要显示的数据条数结束
        for (let i = startNo; i < startNo + pageSize; i++) {
            // 将这一区间的数据，全部压入存储当前页需要显示的数据
            newDataUser.push(dataUser[i]);
        }

        // 将当前页需要显示的数据显示在页面中
        showData(newDataUser);

        // 控制页码的高亮显示
        // 获取页码区域
        var paging = document.getElementById("paging");
        // 找到页码区域里面的所有子元素
        var otherPage = paging.children;
        // 遍历，从第三页子元素开始，排除前两个，前两个是上一页和下一页按钮
        for (let j = 1; j < otherPage.length; j++) {
            // 如果当前页等于第j个按钮的内容里面的数值
            if (pageNo == Number(otherPage[j].innerHTML)) {
                // 这个按钮背景设置颜色，高亮
                otherPage[j].style.backgroundColor = "#52d3f0";
            }
            // 否则去掉背景颜色
            else {
                // 不设置背景颜色
                otherPage[j].style.backgroundColor = "";
            }
        }
    }
}