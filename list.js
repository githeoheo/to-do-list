const btn = document.getElementById("btn"); //버튼
let addValue = document.getElementById("addValue"); //할일 입력
let result = document.getElementById("result"); // 추가된 할일

//할일 추가시
function addTodo() {
  if (addValue.value == false) {
    alert("내용을 입력하세요!");
  } else {
    let list = document.createElement("li");
    let del = document.createElement("button");
    list.innerHTML = addValue.value;
    result.appendChild(list);
    list.appendChild(del);
    del.innerText = "x";
    del.style.fontSize = "20px";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "17px";
    del.style.marginTop = "10px";
    del.style.cursor = "pointer";
    del.addEventListener("click", deleteList);
    del.style.position = "relative";

    addValue.value = "";
    addValue.focus();
    list.addEventListener("click", function () {
      if (list.style.color == "black") {
        list.style.textDecoration = "line-through";
        list.style.color = "gray";
      } else {
        list.style.textDecoration = "none";
        list.style.color = "black";
      }
    });
  }
}

//Enter로 할일 추가시
function addTodoEnter(e) {
  console.log(e.code);
  if (e.code == "Enter" || e.code == "NumpadEnter") {
    if (addValue.value == false) {
      alert("내용을 입력하세요!");
    } else {
      let list = document.createElement("li");
      let del = document.createElement("button");
      list.innerHTML = addValue.value;
      result.appendChild(list);
      list.appendChild(del);
      del.innerText = "x";
      del.style.fontSize = "20px";
      del.style.border = "none";
      del.style.float = "right";
      del.style.right = "17px";
      del.style.marginTop = "10px";
      del.style.cursor = "pointer";
      del.addEventListener("click", deleteList);
      del.style.position = "relative";

      addValue.value = "";
      addValue.focus();
      list.addEventListener("click", function () {
        if (list.style.color == "black") {
          list.style.textDecoration = "line-through";
          list.style.color = "gray";
        } else {
          list.style.textDecoration = "none";
          list.style.color = "black";
        }
      });
    }
  }
}

function deleteList(e) {
  let removeOne = e.target.parentElement;
  removeOne.remove();
}
// //모두 삭제시
function allClearList(e) {
  if (confirm("정말 삭제하시겠습니까?") == true) {
    if (result.innerText == "") {
      alert("삭제할 목록이 없습니다");
    } else {
      result.innerText = "";
    }
  } else {
    return false;
  }
}
