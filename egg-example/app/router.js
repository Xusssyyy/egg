"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, middleware } = app;
  // router.get("/", controller.home.index);
  // router.get("/user/:id", controller.home.user);
  // router.post("/add", controller.home.add);
  // router.get("/user", controller.home.user);
  // router.post("/add_user", controller.home.addUser); // 新增
  // router.post("/delete_user", controller.home.deleteUser); // 删除
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串
  router.post("/api/user/register", controller.user.register);
  router.post("/api/user/login", controller.user.login);
  router.get("/api/user/test", _jwt, controller.user.test); // 放入第二个参数，作为中间件过滤项
  router.get("/api/user/get_userinfo", _jwt, controller.user.getUserInfo); // 获取用户信息
  router.post("/api/user/edit_userinfo", _jwt, controller.user.editUserInfo); // 修改用户个性签名
  router.post("/api/upload", controller.upload.upload); // 上传
};
