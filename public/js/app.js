function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

senderName = document.getElementById('name').value
// Email = document.getElementById('email').value
// phone = document.getElementById('phone').value
// subject = document.getElementById('subject').value
// message = document.getElementById('message').value

body = senderName + Email + phone + subject + message


function sendEmail(){
    Email.send({
        name: senderName,
        Host : "smtp.gmail.com",
        Username : "abdullahquranacademy280@gmail.com",
        Password : "abdullah6870",
        To : 'abdullahquranacademy280@gmail.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body :  ` <div>
                    <h2>Mail From <span>${document.getElementById('name').value}</span></h2>
                    <h5>Email : <span>${document.getElementById('email').value}</span></h5>
                    <h5>Phone : <span>${document.getElementById('phone').value}</span></h5>
                    <h5>Subject : <span>${document.getElementById('subject').value}</span></h5>
                    <p>Message : <span>${document.getElementById('message').value}</span></p>
                </div>`
        
        
        // `<h2>Name : ${document.getElementById('name').value}</h2>`
        // `<h2>Name : ${document.getElementById('name').value}</h2>`+
        // +"Contact No : "+document.getElementById('phone').value+`<br/>`+
        // +"Message : "+document.getElementById('message').value
        
      
        
    }).then(
      message => {
          if(message == "OK"){
              alert("Thank you for getting in touch! We appreciate you contacting with AQA . One of our colleagues will get back in touch with you soon!Have a great day!")
          }
          else{
              console.error(message);
              alert("Message Not sent Try Again")
          }
          smtp.EnableSsl = true;
        smtp.UseDefaultCredentials = false;
      }
      
    )
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('message').value = ''
    
}

function sendEmailMain(){
    Email.send({
        name: document.getElementById('s-name'),
        Host : "smtp.gmail.com",
        Username : "abdullahquranacademy280@gmail.com",
        Password : "abdullah6870",
        To : 'abdullahquranacademy280@gmail.com',
        From : document.getElementById('s-email').value,
        Subject : document.getElementById('s-subject').value,
        Body :  ` <div>
                    <h2>Mail From <span>${document.getElementById('s-name').value}</span></h2>
                    <h5>Email : <span>${document.getElementById('s-email').value}</span></h5>
                    <h5>Phone : <span>${document.getElementById('s-phone').value}</span></h5>
                    <h5>Subject : <span>${document.getElementById('s-subject').value}</span></h5>
                    <p>Message : <span>${document.getElementById('s-message').value}</span></p>
                </div>`
        
        
        // `<h2>Name : ${document.getElementById('name').value}</h2>`
        // `<h2>Name : ${document.getElementById('name').value}</h2>`+
        // +"Contact No : "+document.getElementById('phone').value+`<br/>`+
        // +"Message : "+document.getElementById('message').value
        
      
        
    }).then(
      message => {
          if(message == "OK"){
              alert("Thank you for getting in touch! We appreciate you contacting with AQA . One of our colleagues will get back in touch with you soon!Have a great day!")
          }
          else{
              console.error(message);
              alert("Message Not sent Try Again")
          }
          smtp.EnableSsl = true;
        smtp.UseDefaultCredentials = false;
      }
      
    )
    console.log(document.getElementById('s-name'))
    document.getElementById('s-name').value = ''
    document.getElementById('s-email').value = ''
    document.getElementById('s-subject').value = ''
    document.getElementById('s-phone').value = ''
    document.getElementById('s-message').value = ''
    
    
}

