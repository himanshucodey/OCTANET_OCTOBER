const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById('list-container');

function AddTask(){
    if(InputBox.value === ''){              //jodi inputbox ar value te ki6u na dow tobe alert diba "You must to write something!"
        alert("You must to write something!");
    }
    else{                                   // ar jodi input box ar value te ki6u thake tobe seta k li rup a li name ar variable a add korba. Tar por sei input value k li rupe niche ui ar moddhe add korba.
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    SaveData()
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked-c");
        SaveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        SaveData()
    }
}, false);

function SaveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

function ShowTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
ShowTask()