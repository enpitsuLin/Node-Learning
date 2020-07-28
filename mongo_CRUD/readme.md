#   使用mongoose进行简单增删改查
```shell
npm install mongoose
```
先安装mongoose，然后就可以使用require来使用了。

首先连接本地数据库并监听几个事件

```js
var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/dataDb';

//  连接数据库
mongoose.connect(DB_URL);

// 链接成功
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to ' + DB_URL);
});

// 链接异常
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error:' + err);
});

// 链接断开

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});
```

运行，成功的话就会看见
```shell
Mongoose connection open to mongodb://localhost:27017/dataDb
```

然后简单实现了下使用mongoose的增删改查