const taskContainer = document.querySelector("#container");
const uploadButton = document.querySelector(".icon-upload3");
const taskText = document.querySelector("#newtask");


uploadButton.addEventListener("click", eo => {
    eo.preventDefault();
    const newTask = `       
    <div class="task">
       <span class="icon-star icon"></span>
       <p class="task-text">${taskText.value}</p>
       <div>
           <span class="icon-trash-o icon"></span>
           <span class="icon-sad2 icon"></span>
       </div>
   </div>`;
    taskContainer.innerHTML += newTask;
    taskText.value = "";
});

// taskContainer.addEventListener("click",eo=>{
//     if(eo.target.className==="icon-trash-o icon"){
//         eo.target.parentElement.parentElement.remove();
//     }else if(eo.target.className==="icon-sad2 icon"){
//         eo.target.classList.add("hide");
//         eo.target.parentElement.parentElement.querySelector(".task-text").classList.add("finshed");
//         eo.target.parentElement.innerHTML +=`<span class="icon-heart"></span>`;
//     }else if(eo.target.className==="icon-heart"){
//         eo.target.parentElement.parentElement.querySelector(".task-text").classList.remove("finshed");
//         console.log( eo.target.parentElement.getElementsByTagName("span")[1].classList.remove("hide"));
//         eo.target.classList.add("hide");     
//     }else if(eo.target.className==="icon-star icon"){
//         eo.target.classList.add("orange");
//         taskContainer.prepend(eo.target.parentElement);
//     }else if(eo.target.className==="icon-star icon orange"){
//         eo.target.classList.remove("orange");
//     }
// });
taskContainer.addEventListener("click", eo => {
    switch (eo.target.className) {
        case "icon-trash-o icon":
            eo.target.parentElement.parentElement.remove();
            break;
        case "icon-sad2 icon":
            eo.target.classList.add("hide");
            eo.target.parentElement.parentElement.querySelector(".task-text").classList.add("finshed");
            eo.target.parentElement.innerHTML += `<span class="icon-heart"></span>`;
            break;
        case "icon-heart":
            eo.target.parentElement.parentElement.querySelector(".task-text").classList.remove("finshed");
            console.log(eo.target.parentElement.getElementsByTagName("span")[1].classList.remove("hide"));
            eo.target.classList.add("hide");
            break;
        case "icon-star icon":
            eo.target.classList.add("orange");
            taskContainer.prepend(eo.target.parentElement)
            break;
        case "icon-star icon orange":
            eo.target.classList.remove("orange");
            break;
    }
});


