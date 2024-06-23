// let TITLE = document.getElementById("title");

const users = [
  {
    id: 1,
    name: "opisis",
    pass: "123",
  },
];

const checkUser = (user, pass) => {
  users.map((v) => {
    if (v.name === user && v.pass === pass) {
      isLogin = v;
      getData();
      console.warn(isLogin?.name, " Hisobiga kirildi!");
      return;
    }
  });
  console.error(user, " Hisobiga kirilmadi!");
  return;
};

const LoginUser = () => {
  const UsernameLogin = document.getElementById("username_login").value;
  const PasswordLogin = document.getElementById("pass_login").value;

  checkUser(UsernameLogin, PasswordLogin);
};
