let base = [
  { id: 1, name: "Html", status: false, isEdited: false },
  { id: 2, name: "JavaScript", status: false, isEdited: false },
  { id: 3, name: "React Js", status: false, isEdited: false },
  { id: 4, name: "React", status: false, isEdited: false },
];

const bodyTasks = () => {
  let searchInput = "";
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
        document.getElementById(
          "titleInnerBase"
        ).innerText = `${base.length} Tasks`;
        return [
          ...state,
          {
            id: state.length ? state[state.length - 1].id + 1 : 1,
            name: action.payload,
            status: false,
            isEdited: false,
          },
        ];
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

  //   document.getElementById("searchBtn").addEventListener("click", () => {
  //     dispatch({ type: "search", payload: searchInput });
  //   });

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

bodyTasks();

// -------------------

// let base = [
//   { id: 1, name: "Html", status: false, isEdited: false },
//   { id: 2, name: "JavaScript", status: false, isEdited: false },
//   { id: 3, name: "React Js", status: false, isEdited: false },
//   { id: 4, name: "React", status: false, isEdited: false },
// ];

// const bodyTasks = () => {
//   let searchInput = "";
//   let add = "";
//   let save = "";

//   console.log(base);
//   const generic = (state, action) => {
//     switch (action.type) {
//       // Check
//       case "check": {
//         return state.map((value) => {
//           return value.id == action.payload
//             ? { ...value, status: !value.status }
//             : value;
//         });
//       }

//       // Delete
//       case "delite": {
//         return state.filter((v) => v.id !== action.payload);
//       }
//       case "search": {
//         return mock.filter((v) =>
//           v.name.toLowerCase().includes(action.payload.toLowerCase())
//         );
//       }

//       // Add
//       case "add": {
//         return [
//           ...state,
//           {
//             id: state[state.length - 1].id + 1,
//             name: action.payload,
//             status: false,
//             isEdited: false,
//           },
//         ];
//       }

//       // Edit
//       case "edit": {
//         return state.map((value) => {
//           if (value.id == action.payload) {
//             action.setSave(value.name);
//             return { ...value, isEdited: !value.isEdited };
//           } else return value;
//         });
//       }

//       // Save
//       case "save": {
//         return state.map((value) => {
//           if (value.id == action.payload) {
//             return { ...value, name: action.save, isEdited: false };
//           } else return value;
//         });
//       }

//       default:
//         return state;
//     }
//   };
//   siteBody.innerHTML = `
//   <div class="main" id="body">
//   <div class="head">
//     <div>
//       <h1 class="task_count">${base.length} Tasks</h1>
//     </div>

//     <!-- Search -->
//     <div class="search">
//       <input
//         type="text"
//         placeholder="Search task"
//         onchange="inputValue"
//         class="searchInput"
//       />
//       <button class="searchBtn">S</button>
//     </div>

//     <!-- Main -->
//     <div class="mainData"></div>

//     <!-- Add -->
//   </div>
// </div>
//   `;
//   return "hello";
// };
// BodyTasks();
