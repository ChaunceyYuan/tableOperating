// 管理员数据
var dataAdmin = [
    { "stuID": "201661005", "stuName": "于佳宁", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980618", "stuTelNum": "15327148912", "stuNativePlace": "内蒙古包头市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661289", "stuName": "张星", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980312", "stuTelNum": "17612766435", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661709", "stuName": "方金水", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981006", "stuTelNum": "18696279624", "stuNativePlace": "湖北省黄石市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661710", "stuName": "谢松贝", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980308", "stuTelNum": "17671695532", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661711", "stuName": "姜珊秀丽", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980825", "stuTelNum": "13593730849", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661712", "stuName": "金虎", "stuSex": "男", "stuAge": 23, "stuBirthday": "19961018", "stuTelNum": "13733587467", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661713", "stuName": "王卫", "stuSex": "男", "stuAge": 20, "stuBirthday": "19990504", "stuTelNum": "15272274402", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661714", "stuName": "郭莉", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990131", "stuTelNum": "18571459121", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661715", "stuName": "袁成新", "stuSex": "男", "stuAge": 23, "stuBirthday": "19960716", "stuTelNum": "16602745917", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661716", "stuName": "史洪婷", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980115", "stuTelNum": "15387137690", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661717", "stuName": "邓宝莉", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980129", "stuTelNum": "13396095129", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661718", "stuName": "尹文雪", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980201", "stuTelNum": "13247170201", "stuNativePlace": "湖北省襄阳市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661719", "stuName": "吴可馨", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981215", "stuTelNum": "15926022376", "stuNativePlace": "湖北省鄂州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661721", "stuName": "车林威", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980718", "stuTelNum": "17607113359", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661722", "stuName": "丁竹", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980826", "stuTelNum": "17771454525", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661723", "stuName": "易鸣", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971120", "stuTelNum": "15572685346", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661724", "stuName": "舒成超", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980726", "stuTelNum": "17671724843", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661725", "stuName": "陈茜", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980402", "stuTelNum": "15387143893", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661726", "stuName": "丁佳文", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980810", "stuTelNum": "17137210182", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661727", "stuName": "江思思", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980513", "stuTelNum": "15071491191", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661728", "stuName": "陈施", "stuSex": "女", "stuAge": 22, "stuBirthday": "19970802", "stuTelNum": "15387143801", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661729", "stuName": "李伦", "stuSex": "男", "stuAge": 22, "stuBirthday": "19970903", "stuTelNum": "13227308638", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661730", "stuName": "刘培", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981106", "stuTelNum": "18672127976", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661731", "stuName": "张海峰", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971010", "stuTelNum": "16602773639", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661732", "stuName": "雷雨阳", "stuSex": "男", "stuAge": 22, "stuBirthday": "19970627", "stuTelNum": "13545679927", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661733", "stuName": "黄媛媛", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980518", "stuTelNum": "13035110438", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661734", "stuName": "欧阳有军", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981011", "stuTelNum": "17771454795", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661735", "stuName": "伍杨丹", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990207", "stuTelNum": "15387150907", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661736", "stuName": "申祥云", "stuSex": "女", "stuAge": 23, "stuBirthday": "19961126", "stuTelNum": "15271906235", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661737", "stuName": "高杨子", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980523", "stuTelNum": "13986530447", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661738", "stuName": "袁精润", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971016", "stuTelNum": "17152711947", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661739", "stuName": "陈锦慧", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990818", "stuTelNum": "15207107997", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661740", "stuName": "裴陈钦", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981016", "stuTelNum": "15972852895", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661742", "stuName": "曹杰", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980515", "stuTelNum": "13409732810", "stuNativePlace": "湖北省咸宁市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661743", "stuName": "汪仕豪", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971112", "stuTelNum": "13387617531", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661744", "stuName": "丁茂东", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981212", "stuTelNum": "15271839115", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661745", "stuName": "阮子辰", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980119", "stuTelNum": "17371679331", "stuNativePlace": "湖北省咸宁市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661746", "stuName": "谢双", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980707", "stuTelNum": "17771454710", "stuNativePlace": "湖北省随州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661747", "stuName": "徐红牛", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971120", "stuTelNum": "13164128325", "stuNativePlace": "湖北省随州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661748", "stuName": "廖枕云", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981223", "stuTelNum": "13617292372", "stuNativePlace": "湖北省仙桃市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662395", "stuName": "徐凌强", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980917", "stuTelNum": "18259958693", "stuNativePlace": "福建省南平市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662396", "stuName": "柯华荣", "stuSex": "男", "stuAge": 23, "stuBirthday": "19960823", "stuTelNum": "13147189271", "stuNativePlace": "福建省泉州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662630", "stuName": "杨隆凯", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980706", "stuTelNum": "17340554500", "stuNativePlace": "湖南省常德市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662639", "stuName": "夏波", "stuSex": "男", "stuAge": 20, "stuBirthday": "19990102", "stuTelNum": "15387143836", "stuNativePlace": "湖南省邵阳市", "stuDescribe": "这是默认描述，什么都没有" },
]
var dataTitle = [{ "stuID": "学号", "stuName": "姓名", "stuSex": "性别", "stuAge": "年龄", "stuBirthday": "生日", "stuTelNum": "手机号码", "stuNativePlace": "籍贯", "stuDescribe": "描述" }];



// 克隆数据
function clone(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = {};
        for (var key in arr[i]) {
            newArr[i][key] = arr[i][key];
        }
    }
    return newArr;
}

// 用户数据
var dataUser = clone(dataAdmin);

var dataBackup = clone(dataUser);




























var dataUser2 = [
    { "stuID": "201661005", "stuName": "于佳宁", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980618", "stuTelNum": "15327148912", "stuNativePlace": "内蒙古包头市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661289", "stuName": "张星", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980312", "stuTelNum": "17612766435", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661709", "stuName": "方金水", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981006", "stuTelNum": "18696279624", "stuNativePlace": "湖北省黄石市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661710", "stuName": "谢松贝", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980308", "stuTelNum": "17671695532", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661711", "stuName": "姜珊秀丽", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980825", "stuTelNum": "13593730849", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661712", "stuName": "金虎", "stuSex": "男", "stuAge": 23, "stuBirthday": "19961018", "stuTelNum": "13733587467", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661713", "stuName": "王卫", "stuSex": "男", "stuAge": 20, "stuBirthday": "19990504", "stuTelNum": "15272274402", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661714", "stuName": "郭莉", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990131", "stuTelNum": "18571459121", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661715", "stuName": "袁成新", "stuSex": "男", "stuAge": 23, "stuBirthday": "19960716", "stuTelNum": "16602745917", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661716", "stuName": "史洪婷", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980115", "stuTelNum": "15387137690", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661717", "stuName": "邓宝莉", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980129", "stuTelNum": "13396095129", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661718", "stuName": "尹文雪", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980201", "stuTelNum": "13247170201", "stuNativePlace": "湖北省襄阳市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661719", "stuName": "吴可馨", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981215", "stuTelNum": "15926022376", "stuNativePlace": "湖北省鄂州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661721", "stuName": "车林威", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980718", "stuTelNum": "17607113359", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661722", "stuName": "丁竹", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980826", "stuTelNum": "17771454525", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661723", "stuName": "易鸣", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971120", "stuTelNum": "15572685346", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661724", "stuName": "舒成超", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980726", "stuTelNum": "17671724843", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661725", "stuName": "陈茜", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980402", "stuTelNum": "15387143893", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661726", "stuName": "丁佳文", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980810", "stuTelNum": "17137210182", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661727", "stuName": "江思思", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980513", "stuTelNum": "15071491191", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661728", "stuName": "陈施", "stuSex": "女", "stuAge": 22, "stuBirthday": "19970802", "stuTelNum": "15387143801", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661729", "stuName": "李伦", "stuSex": "男", "stuAge": 22, "stuBirthday": "19970903", "stuTelNum": "13227308638", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661730", "stuName": "刘培", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981106", "stuTelNum": "18672127976", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661731", "stuName": "张海峰", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971010", "stuTelNum": "16602773639", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661732", "stuName": "雷雨阳", "stuSex": "男", "stuAge": 22, "stuBirthday": "19970627", "stuTelNum": "13545679927", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661733", "stuName": "黄媛媛", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980518", "stuTelNum": "13035110438", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661734", "stuName": "欧阳有军", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981011", "stuTelNum": "17771454795", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661735", "stuName": "伍杨丹", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990207", "stuTelNum": "15387150907", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661736", "stuName": "申祥云", "stuSex": "女", "stuAge": 23, "stuBirthday": "19961126", "stuTelNum": "15271906235", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661737", "stuName": "高杨子", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980523", "stuTelNum": "13986530447", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661738", "stuName": "袁精润", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971016", "stuTelNum": "17152711947", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661739", "stuName": "陈锦慧", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990818", "stuTelNum": "15207107997", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661740", "stuName": "裴陈钦", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981016", "stuTelNum": "15972852895", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661742", "stuName": "曹杰", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980515", "stuTelNum": "13409732810", "stuNativePlace": "湖北省咸宁市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661743", "stuName": "汪仕豪", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971112", "stuTelNum": "13387617531", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661744", "stuName": "丁茂东", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981212", "stuTelNum": "15271839115", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661745", "stuName": "阮子辰", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980119", "stuTelNum": "17371679331", "stuNativePlace": "湖北省咸宁市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661746", "stuName": "谢双", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980707", "stuTelNum": "17771454710", "stuNativePlace": "湖北省随州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661747", "stuName": "徐红牛", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971120", "stuTelNum": "13164128325", "stuNativePlace": "湖北省随州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661748", "stuName": "廖枕云", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981223", "stuTelNum": "13617292372", "stuNativePlace": "湖北省仙桃市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662395", "stuName": "徐凌强", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980917", "stuTelNum": "18259958693", "stuNativePlace": "福建省南平市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662396", "stuName": "柯华荣", "stuSex": "男", "stuAge": 23, "stuBirthday": "19960823", "stuTelNum": "13147189271", "stuNativePlace": "福建省泉州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662630", "stuName": "杨隆凯", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980706", "stuTelNum": "17340554500", "stuNativePlace": "湖南省常德市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662639", "stuName": "夏波", "stuSex": "男", "stuAge": 20, "stuBirthday": "19990102", "stuTelNum": "15387143836", "stuNativePlace": "湖南省邵阳市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661005", "stuName": "于佳宁", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980618", "stuTelNum": "15327148912", "stuNativePlace": "内蒙古包头市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661289", "stuName": "张星", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980312", "stuTelNum": "17612766435", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661709", "stuName": "方金水", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981006", "stuTelNum": "18696279624", "stuNativePlace": "湖北省黄石市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661710", "stuName": "谢松贝", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980308", "stuTelNum": "17671695532", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661711", "stuName": "姜珊秀丽", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980825", "stuTelNum": "13593730849", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661712", "stuName": "金虎", "stuSex": "男", "stuAge": 23, "stuBirthday": "19961018", "stuTelNum": "13733587467", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661713", "stuName": "王卫", "stuSex": "男", "stuAge": 20, "stuBirthday": "19990504", "stuTelNum": "15272274402", "stuNativePlace": "湖北省十堰市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661714", "stuName": "郭莉", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990131", "stuTelNum": "18571459121", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661715", "stuName": "袁成新", "stuSex": "男", "stuAge": 23, "stuBirthday": "19960716", "stuTelNum": "16602745917", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661716", "stuName": "史洪婷", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980115", "stuTelNum": "15387137690", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661717", "stuName": "邓宝莉", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980129", "stuTelNum": "13396095129", "stuNativePlace": "湖北省宜昌市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661718", "stuName": "尹文雪", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980201", "stuTelNum": "13247170201", "stuNativePlace": "湖北省襄阳市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661719", "stuName": "吴可馨", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981215", "stuTelNum": "15926022376", "stuNativePlace": "湖北省鄂州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661721", "stuName": "车林威", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980718", "stuTelNum": "17607113359", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661722", "stuName": "丁竹", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980826", "stuTelNum": "17771454525", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661723", "stuName": "易鸣", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971120", "stuTelNum": "15572685346", "stuNativePlace": "湖北省荆门市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661724", "stuName": "舒成超", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980726", "stuTelNum": "17671724843", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661725", "stuName": "陈茜", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980402", "stuTelNum": "15387143893", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661726", "stuName": "丁佳文", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980810", "stuTelNum": "17137210182", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661727", "stuName": "江思思", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980513", "stuTelNum": "15071491191", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661728", "stuName": "陈施", "stuSex": "女", "stuAge": 22, "stuBirthday": "19970802", "stuTelNum": "15387143801", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661729", "stuName": "李伦", "stuSex": "男", "stuAge": 22, "stuBirthday": "19970903", "stuTelNum": "13227308638", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661730", "stuName": "刘培", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981106", "stuTelNum": "18672127976", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661731", "stuName": "张海峰", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971010", "stuTelNum": "16602773639", "stuNativePlace": "湖北省孝感市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661732", "stuName": "雷雨阳", "stuSex": "男", "stuAge": 22, "stuBirthday": "19970627", "stuTelNum": "13545679927", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661733", "stuName": "黄媛媛", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980518", "stuTelNum": "13035110438", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661734", "stuName": "欧阳有军", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981011", "stuTelNum": "17771454795", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661735", "stuName": "伍杨丹", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990207", "stuTelNum": "15387150907", "stuNativePlace": "湖北省荆州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661736", "stuName": "申祥云", "stuSex": "女", "stuAge": 23, "stuBirthday": "19961126", "stuTelNum": "15271906235", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661737", "stuName": "高杨子", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980523", "stuTelNum": "13986530447", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661738", "stuName": "袁精润", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971016", "stuTelNum": "17152711947", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661739", "stuName": "陈锦慧", "stuSex": "女", "stuAge": 20, "stuBirthday": "19990818", "stuTelNum": "15207107997", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661740", "stuName": "裴陈钦", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981016", "stuTelNum": "15972852895", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661742", "stuName": "曹杰", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980515", "stuTelNum": "13409732810", "stuNativePlace": "湖北省咸宁市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661743", "stuName": "汪仕豪", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971112", "stuTelNum": "13387617531", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661744", "stuName": "丁茂东", "stuSex": "男", "stuAge": 21, "stuBirthday": "19981212", "stuTelNum": "15271839115", "stuNativePlace": "湖北省黄冈市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661745", "stuName": "阮子辰", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980119", "stuTelNum": "17371679331", "stuNativePlace": "湖北省咸宁市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661746", "stuName": "谢双", "stuSex": "女", "stuAge": 21, "stuBirthday": "19980707", "stuTelNum": "17771454710", "stuNativePlace": "湖北省随州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661747", "stuName": "徐红牛", "stuSex": "男", "stuAge": 22, "stuBirthday": "19971120", "stuTelNum": "13164128325", "stuNativePlace": "湖北省随州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201661748", "stuName": "廖枕云", "stuSex": "女", "stuAge": 21, "stuBirthday": "19981223", "stuTelNum": "13617292372", "stuNativePlace": "湖北省仙桃市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662395", "stuName": "徐凌强", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980917", "stuTelNum": "18259958693", "stuNativePlace": "福建省南平市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662396", "stuName": "柯华荣", "stuSex": "男", "stuAge": 23, "stuBirthday": "19960823", "stuTelNum": "13147189271", "stuNativePlace": "福建省泉州市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662630", "stuName": "杨隆凯", "stuSex": "男", "stuAge": 21, "stuBirthday": "19980706", "stuTelNum": "17340554500", "stuNativePlace": "湖南省常德市", "stuDescribe": "这是默认描述，什么都没有" },
    { "stuID": "201662639", "stuName": "夏波", "stuSex": "男", "stuAge": 20, "stuBirthday": "19990102", "stuTelNum": "15387143836", "stuNativePlace": "湖南省邵阳市", "stuDescribe": "这是默认描述，什么都没有" },
]