let questionsList = document.querySelectorAll('.accordion');
let statuses = document.querySelectorAll('.status')

questionsList.forEach((question,index)=>{
    question.addEventListener('click', ()=>{
        let panels = document.querySelectorAll('.panel');
        if (panels[index].style.maxHeight){
            panels[index].style.maxHeight = null;
        } else {
            panels[index].style.maxHeight = panels[index].scrollHeight + "px";
        }
    })
})

statuses.forEach((status)=>{
    status.style.background =  'red';
    status.addEventListener('click',()=>{
        if (status.style.background ===  'red') {
            status.style.background =  'yellow';
        }else if(status.style.background === 'yellow'){
            status.style.background =  'green';
        }else{
            status.style.background =  'red';
        }
    })
})
