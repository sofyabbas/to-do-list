const uploadButton = document.querySelector(".icon-upload3");
const taskContainer = document.getElementById("container");
const inputText = document.querySelector("input");

uploadButton.addEventListener("click", (eo => {
    eo.preventDefault();
    const task = `        
        <div class="task">
            <span class="icon-star icon"></span>
            <p lang="ar" class="task-text">${inputText.value}</p>
            <div>
                <span class="icon-trash-o icon"></span>
                <span class="icon-sad2 icon"></span>
            </div>
            <!-- <span class="icon-heart"></span> -->
        </div>`;
    taskContainer.innerHTML += task;
    inputText.value="";
}));

taskContainer.addEventListener("click", eo => {
    if (eo.target.className === "icon-trash-o icon") {

        eo.target.parentElement.parentElement.remove();
    }else if(eo.target.className==="icon-sad2 icon"){
        eo.target.classList.add("hide");
        const heartIcon=`<span class="icon-heart"></span>`;
        
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finshed");
        
        eo.target.parentElement.innerHTML +=heartIcon;
    }else if(eo.target.className==="icon-heart"){
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finshed");
        let pe = eo.target.parentElement.getElementsByTagName("span")[1].classList.remove("hide");
        eo.target.remove();  
    }else if(eo.target.className==="icon-star icon"){
        eo.target.classList.add("orange");
        taskContainer.prepend(eo.target.parentElement);
    }else if(eo.target.className==="icon-star icon orange"){
        eo.target.classList.remove("orange");
    }
});
