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

     
     window.location.href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=nnelanimonde@gmail.com&su="+subject+
     "&body="+message+
     "%0D%0A%0D%0AFrom:%20"+name+"%0D%0AEmail:%20"+email;
}