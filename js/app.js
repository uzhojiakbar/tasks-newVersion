let siteBody = document.getElementById("body");
isLogin = false;
page = "/login";

var getData = () => {
  console.log(isLogin);

  if (isLogin) {
    console.log("LOOG:", tasks);
    siteBody.innerHTML = ` 
    
    `;
    // tasks.map((value) => {
    //   if (dataName) {
    //     dataName.innerHTML = tasks
    //       .map(
    //         (value) => `;
    //           <div id="data-item" class="data-item">
    //               <div class="task-name">
    //                   <input onclick="remain_count(checkbox)" id="${value.id}" class="data-check" type="checkbox" id="">
    //                   <label class="dataname" id="data-name" for="${value.id}">
    //                       ${value.name}
    //                   </label>
    //               </div>
    //               <button onclick="DelData(${value.id})"  id="taskdelete" class="task-delete"><i class="fa-solid fa-trash-can"></i></button>
    //               </div>
    //           `
    //       )
    //       .join("");
    //   }
    // });
  } else {
    if (page === "/login") {
      siteBody.innerHTML = ` 
     <div id="title" class="title">
        <div class="task_count">Kirish</div>
      </div>
        <div class="login">
          <input
            id="username_login"
            class="addtoo inputLogin"
            type="text"
            placeholder="Username yozing..."
          />
          <input
            id="pass_login"
            class="addtoo inputLogin"
            type="password"
            placeholder="Password yozing..."
          />
          <button onclick="LoginUser()" id="adtoo" class="add">Kirish</button>
        </div>
        <button onclick="AddData()" id="register" class="add">
        Hisob yo'qmi? Ro'yxatdan o'tish uchun bosing
      </button>
      <div></div>
      `;
    } else if (page === "/signUp") {
      siteBody.innerHTML = ` 
     <div id="title" class="title">
        <div class="task_count">Kirish</div>
      </div>
        <div class="login">
          <input
            id="username_login"
            class="addtoo inputLogin"
            type="text"
            placeholder="Username yozing..."
          />
          <input
            id="pass_login"
            class="addtoo inputLogin"
            type="password"
            placeholder="Password yozing..."
          />
          <button onclick="LoginUser()" id="adtoo" class="add">Kirish</button>
        </div>
        <button onclick="AddData()" id="register" class="add">
        Hisob yo'qmi? Ro'yxatdan o'tish uchun bosing
      </button>
      <div></div>
      `;
    }
  }
};

getData();
