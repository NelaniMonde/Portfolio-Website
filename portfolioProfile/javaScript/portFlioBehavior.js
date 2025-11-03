function sendMail()
{
    var name = document.getElementById("name").value ;
    var email = document.getElementById("email").value ;
    var subject = document.getElementById("subject").value ;
    var message = document.getElementById("message").value ;
    



   /* message+="\n\n\n"+name+"\n\n"+email;*/

    // window.location.href="mailto:kingmode8@gmail.com?subject="
    // +encodeURIComponent(subject)+"&body="+encodeURIComponent(message);

    // window.location.href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kingmode8@gmail.com&su="+subject+"&body="+message+".";

    //  window.location.href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=kingmode8@gmail.com&su="+subject+
    //  "&body="+message+
    //  "%0D%0AFrom:%20"+name+"%0D%0A%0D%0AEmail:%20"+email;

    
    if(name.length <=0 || email.length <=0 || subject.length <=0 || message.length <=0)
    {
        if(name.length <=0)
        {
            alert("Name Missing Please Enter your name");
        }

        if(email.length <=0)
        {
            alert("Email Missing Please Enter your email");
        }

        if(subject.length <=0)
        {
            alert("Email Subject Missing Please Enter the email Subject");
        }

        
        if(message.length <=0)
        {
            alert("Email Message has not been filled in Please Enter the email message");
        }
    }
    else
    {
     
     window.location.href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=nnelanimonde@gmail.com&su="+subject+
     "&body="+message+
     "%0D%0A%0D%0AFrom:%20"+name+"%0D%0AEmail:%20"+email;
    }
}