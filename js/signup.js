console.log(users);

const SignUp = () => {
  const usernameSignUp = document.getElementById("username_signUp").value;
  const passSignUp = document.getElementById("pass_signUp").value;
  const rePassSignUp = document.getElementById("repass_signUp").value;

  const Title = document.getElementById("title");
  userBor = 0;

  if (!usernameSignUp.length) {
    error = "Username Kiritilmagan";
    Title.innerHTML = `
        <div class="task_count">${error}</div>
    `;
    console.log(error);
    return false;
  }

  if (!passSignUp.length && !rePassSignUp.length) {
    error = "Parol kiriting";
    Title.innerHTML = `
        <div class="task_count">${error}</div>
    `;
    console.log(error);
    return false;
  }
  if (passSignUp !== rePassSignUp) {
    error = "Parollar bir xil emas";
    Title.innerHTML = `
        <div class="task_count">${error}</div>
    `;
    console.log(error);
    return false;
  }

  users.map((v) => {
    if (v.name === usernameSignUp) {
      userBor = 1;
    }
  });

  if (userBor) {
    error = "Username Avvaldan bor!";
    console.log("1", error);
    Title.innerHTML = `
          <div class="task_count">${error}</div>
          `;
    return false;
  }

  const user = {
    id: users[users.length - 1].id + 1,
    name: usernameSignUp,
    pass: passSignUp,
  };
  users.push(user);
  page = "/login";
  getData();
};

let SignUpHtml = ` 
     <div id="title" class="title">
        <div class="task_count">${error}</div>
      </div>
        <div class="login">
          <input
            id="username_signUp"
            class="addtoo inputLogin"
            type="text"
            placeholder="Username yozing..."
          />
          <input
            id="pass_signUp"
            class="addtoo inputLogin"
            type="password"
            placeholder="Password yozing..."
          />
           <input
            id="repass_signUp"
            class="addtoo inputLogin"
            type="password"
            placeholder="Password ni qayta yozing..."
          />
          <button onclick="SignUp()" id="adtoo" class="add">Royxatdan otish</button>
        </div>
        <button onclick="changePage('/login')" id="register" class="add">
        Hisob bormi? Hisobga kirish uchun bosing
      </button>
      <div></div>
`;
