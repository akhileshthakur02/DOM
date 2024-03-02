const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((b)=>{
    b.addEventListener('click',function(event){
        /*
        if(event.target.id === 'grey'){
         body.style.backgroundColor = "grey";
        }
        else if(event.target.id === 'white'){
            body.style.backgroundColor = "azure";
        }
        else if(event.target.id === 'yellow'){
            body.style.backgroundColor = "yellow";
        }
        else {
            body.style.backgroundColor = "blue";
        } */

                // using switch case 
        switch(event.target.id){
            case 'grey' :
                body.style.backgroundColor = "grey";
                break;
            case 'white' :
                body.style.backgroundColor = "azure";
                break;
            case 'yellow' : 
                body.style.backgroundColor = "yellow";
                break;  
            case 'blue':
                body.style.backgroundColor = "blue";
                break;  
        }
    })
});