// let TITLE = document.getElementById("title");

const users = [
  {
    id: 1,
    name: "opisis",
    pass: "123",
  },
  {
    id: 2,
    name: "asadbek",
    pass: "123",
  },
];

const LoginUser = () => {
  const UsernameLogin = document.getElementById("username_login").value;
  const PasswordLogin = document.getElementById("pass_login").value;

  users.map((v) => {
    if (v.name == UsernameLogin && v.pass == PasswordLogin) {
      isLogin = v;
      console.warn(isLogin?.name, " Hisobiga kirildi!");
      getData();
    }
  });
};
