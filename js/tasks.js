let taskCount = document.getElementById("task_count");
let remainCount = document.getElementById("remain_count");
let dataName = document.getElementById("data");
let TaskDelete = document.getElementById("taskdelete");
let input = document.getElementById("input");
let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
let search = document.getElementById("search");
let Insearch = document.getElementById("searchBtn");
let searchBtn = document.getElementById("seachbtn");

let tasks = [
  {
    id: 1,
    name: "Html",
  },
  {
    id: 2,
    name: "Css",
  },
  {
    id: 3,
    name: "Javascript",
  },
  {
    id: 4,
    name: "React Js",
  },
];

let taskCountCalc = () => {
  taskCount.innerHTML = `${tasks.length}`;
};

getData();

// * sign in profile

let DelData = (id) => {
  if (tasks.length) {
    tasks = tasks.filter((value) => value.id != id);
    console.log(tasks);
    getData();
  }
  if (tasks.length == 0) {
    dataName.innerHTML = `
            <div class="not-found" >
                <img class="notfound_icon" src="./img/search.gif" alt="" >
                    <h2 class="notfound-txt">
                        Hech qanday malumot mavjud emas
                    </h2>
        </div> `;
  }
  taskCountCalc();
};

let inputValue = "";
// input.addEventListener("change", (e) => (inputValue = e.target.value));
let AddData = () => {
  if (inputValue.length) {
    tasks = [...tasks, { id: tasks.length + 1, name: inputValue }];
    inputValue = "";
    input.value = "";
    getData();
    taskCountCalc();
  }
};

// let SearchValue = '';
// Insearch.addEventListener('change', (x) => SearchValue = x.target.value)
// let SearchFunc = (title) => {
//     if (SearchValue.length) {
//         console.log(SearchValue);
//         // tasks.map(
//         //     (value,index)=>{
//         //         tasks.filter((value) => value.name.includes(SearchValue)= tasks.value.name{
//         //         })
//         //     }
//         // )
//             tasks = tasks.filter((value) => value.name.match(`${SearchValue}`) == title)
//             console.log(tasks);
//             getData()
//     }
// }

// getData()
