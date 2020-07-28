var User = require('./user.js');

//  插入数据
function insert() {
    var user = new User({
        username: 'admin',
        password: 'admin', // 密码
        lastlogin: new Date(), //last login
    });

    user.save(function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    })
}

//  修改数据
function update() {
    // 更新数据的条件查询
    var wherestr = { 'username': 'admin' };

    // 执行更新数据
    var updatestr = { 'password': '1234' };

    User.update(wherestr, updatestr, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
}
//  删除数据

function del() {
    // 删除数据的条件
    var wherestr = { 'username': 'admin' };

    User.remove(wherestr, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
}
function find() {
    // 删除数据的条件
    var wherestr = { 'userName': 'admin' };

    User.find(wherestr, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
}
function getCountByConditions() {
    User.count({}, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res); // 会输出数据库数据的数量
        }
    });
}
// 调用函数
getCountByConditions();

/*
insert()
del();
update();
find();
 */