let siteBody = document.getElementById("body");
isLogin = false;
page = "/login";

let base = [
  { id: 1, name: "Html", status: false, isEdited: false },
  { id: 2, name: "JavaScript", status: false, isEdited: false },
  { id: 3, name: "React Js", status: false, isEdited: false },
  { id: 4, name: "React", status: false, isEdited: false },
];

const bodyTasks = () => {
  let add = "";
  let save = "";

  const siteBody = document.getElementById("body");

  siteBody.innerHTML = `
  <div>
    <h1 id="titleInnerBase" class="task_count">${base.length} Tasks</h1>
  </div>

  <div class="mainDate" id="taskList"></div>
  <div class="addWrap">
      <input type="text" id="addInput" placeholder="Add Task" />
      <button class="task-delete task-edit" id="addBtn">
      <i class="fa-solid fa-plus"></i>
      </button>
  </div>
`;

  const generic = (state, action) => {
    switch (action.type) {
      // Check
      case "check": {
        return state.map((value) => {
          return value.id == action.payload
            ? { ...value, status: !value.status }
            : value;
        });
      }

      // Delete
      case "delite": {
        const innerbase = state.filter((v) => v.id !== action.payload);
        base = innerbase;
        document.getElementById(
          "titleInnerBase"
        ).innerText = `${base.length} Tasks`;
        return innerbase;
      }

      // Search
      case "search": {
        return base.filter((v) =>
          v.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }

      // Add
      case "add": {
        const innerData11 = [
          ...state,
          {
            id: state.length ? state[state.length - 1].id + 1 : 1,
            name: action.payload,
            status: false,
            isEdited: false,
          },
        ];

        document.getElementById(
          "titleInnerBase"
        ).innerText = `${innerData11.length} Tasks`;
        return innerData11;
      }

      // Edit
      case "edit": {
        return state.map((value) => {
          if (value.id == action.payload) {
            save = value.name;
            return { ...value, isEdited: !value.isEdited };
          } else return value;
        });
      }

      // Save
      case "save": {
        return state.map((value) => {
          if (value.id == action.payload) {
            return { ...value, name: save, isEdited: false };
          } else return value;
        });
      }

      default:
        return state;
    }
  };

  const dispatch = (action) => {
    base = generic(base, action);
    render();
  };

  const render = () => {
    if (!base.length) {
      document.getElementById("taskList").innerHTML = `
            <div class="not-found">
              <img class="notfound_icon" src="./img/search.gif" alt="">
              <h2 class="notfound-txt">
                  Hech qanday malumot mavjud emas
              </h2>
        </div> 
        `;
    } else
      document.getElementById("taskList").innerHTML = base
        .map(
          (value) => `
        <div class="task-item">
          <input type="checkbox" class="checkck" ${
            value.status ? "checked" : ""
          } onchange="toggleCheck(${value.id})" />
          ${
            value.isEdited
              ? `
            <input class="editInput" type="text" value="${value.name}" oninput="updateSave(event)" />
            <button class="task-delete task-edit" onclick="saveTask(${value.id})">
            <i class="fa-solid fa-floppy-disk"></i>
            </button>
            <button class="task-delete" onclick="cancelEdit(${value.id})">
            <i class="fa-solid fa-xmark"></i>
            </button>
          `
              : `
            <span ${
              value.status
                ? 'style="text-decoration: line-through;color: #838383;"'
                : ""
            } class="textItem" >${value.name}</span>


            <button class="task-delete task-edit" onclick="editTask(${
              value.id
            })">
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="task-delete" onclick="deleteTask(${value.id})">
            <i class="fa-solid fa-trash"></i>
            </button>
          `
          }
        </div>
      `
        )
        .join("");
  };

  document.getElementById("addBtn").addEventListener("click", () => {
    if (add.trim() !== "") {
      dispatch({ type: "add", payload: add });
      add = "";
      document.getElementById("addInput").value = "";
    } else {
      alert("Malumot kiriting!");
    }
  });

  document.getElementById("addInput").addEventListener("change", (event) => {
    add = event.target.value;
  });

  window.toggleCheck = (id) => dispatch({ type: "check", payload: id });
  window.editTask = (id) => dispatch({ type: "edit", payload: id });
  window.saveTask = (id) => dispatch({ type: "save", payload: id });
  window.cancelEdit = (id) => dispatch({ type: "edit", payload: id });
  window.deleteTask = (id) => dispatch({ type: "delite", payload: id });
  window.updateSave = (event) => (save = event.target.value);

  render();
};
const changePage = (pageText) => {
  try {
    page = pageText;
    getData();
    console.log(`Ushbu sahifaga otildi ${pageText}`);
  } catch (error) {
    console.error(`xatolik ${error}`);
  }
};

var getData = () => {
  error = "Kirish";
  if (isLogin) {
    bodyTasks();
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
        <button onclick="changePage('/signUp')" id="register" class="add">
        Hisob yo'qmi? Ro'yxatdan o'tish uchun bosing
      </button>
      <div></div>
      `;
    } else if (page === "/signUp") {
      siteBody.innerHTML = SignUpHtml;
    }
  }
};

getData();
