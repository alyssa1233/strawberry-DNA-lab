//add code for what button does
document.getElementById("img-btn").addEventListener("click", function(){
  
    var agree = confirm("hello");
    // confirm gets a boolean (true or false)
    
    if (agree){
  
           agree = confirm("you clicked ok! here's more info");
  
          if (agree){
  
               agree = confirm("you clicked ok! here's even more info!");
  
                if (agree){
  
                   agree = confirm("you clicked ok! here's even MORE info!");
  
                }
  
                else{
                  return;
                }
          }
          else{
            return;
          }
    }
    else{
      return;
    }
    }                                                
  );                                                
