// 95% of storage used … If you run out, you won't have enough storage to create, edit, and upload files. Get 100 GB of storage for ₹130.00 ₹35.00/month for 3 months.
// script.js
let buttons =document.getElementsByTagName('button');

let result = document.getElementById('result');

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="="){
            result.innerText=""
            result.innerText=input
        }

    }
    else{
       
    
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="){
            result.innerText+=input
            x = x+6
            x+=7
        }

        if(input=="="){          
            let display = result.innerText
            result.innerText= eval(display)
        }
    }

}