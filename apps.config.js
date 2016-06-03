/**
 * Created by apple on 16/6/3.
 */
module.exports = {
    apps: [
        {
            //required
            id: "tender",//编号
            title: "招标人",//HTML文件标题
            entry: {
                name: "tender",//该应用的入口名
                src: "./src/app/app.js"//该应用对应的入口文件
            },//入口文件
            indexPage: "./src/app/app.html",//主页文件

            //optional
            dev: true,//判断是否当前正在调试,默认为false
            compiled: true//判斷當前是否加入编译,默认为true
        }
    ],
    devServer: {
        port: 3000
    }
};