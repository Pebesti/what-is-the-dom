const myButton = document.querySelector (".theButton");

const theMesage = document.querySelector (".theMessage");

const theName = document.querySelector (".theName");

const theDate = document.querySelector (".theDate");

 myButton.addEventListener("click", function(){ 
 
  const username = theName.value;
  const currentDate = theDate.value;

    
     theMesage.classList.remove ("Blue");
     theMesage.classList.remove ("Green");
     theMesage.classList.remove ("Orange");


     const theCurrentColor = document.querySelector(".theColor:checked");
     theMesage.classList.add(theCurrentColor.value);
     
     alert(theMesage.classList);
    


  if (username.value === "") {
      theMesage.innerHTML = "Please enter a name" ;

  } else {

    var message = "Hi, " + username + " you pressed the button" ;
    
    if (currentDate !== "") {

      message += " on " + currentDate 
    }

    theMesage.innerHTML = message;
  
  }
 
 
 {
  // if ( theMessage.innerHTML ===){
  //  theMessage.innerHTML = "You clicked on the button! "
 //  } else
 //theMesage.innerHTML = "" ;
 
 }
});