// let TITLE = document.getElementById("title");

var users = [
  {
    id: 1,
    name: "user",
    pass: "user",
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
