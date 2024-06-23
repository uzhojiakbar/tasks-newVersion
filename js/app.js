let getData = () => {
  if (isLogin) {
    console.log(tasks);
    // tasks.map((value) => {
    //   if (dataName) {
    //     dataName.innerHTML = tasks
    //       .map(
    //         (value) => `
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
    siteBody.innerHTML = ` 
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
            type="text"
            placeholder="Password yozing..."
          />
          <button onclick="LoginUser()" id="adtoo" class="add">Kirish</button>
        </div>
      `;
  }
};

getData();
