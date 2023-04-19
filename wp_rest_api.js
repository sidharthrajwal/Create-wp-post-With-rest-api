$(document).ready(function(){


  // Quick Add Post AJAX
var quickAddBtn = document.querySelector('#quick-add-button');

if( quickAddBtn ) {
    
    quickAddBtn.addEventListener("click", function(){
        //alert('clicked');
       var  dttaa =    document.querySelector('.admin-quick-add [name="title"]').value;

       if(dttaa == " ")
        {

            alert("sdsds")
            return false
        }
        else{
        var ourPostData = {
            "title" : document.querySelector('.admin-quick-add [name="title"]').value,
            "content" : document.querySelector('.admin-quick-add [name="content"]').value,
            "status": "publish",
        }

       }

var userData = {
         
            "username": "admin", 
            "password": "admin@123", 
        }

var AuthPost = new XMLHttpRequest();
 AuthPost.open("POST", "http://192.168.0.77/sidharth/neword/wp-json/jwt-auth/v1/token");
  AuthPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   AuthPost.setRequestHeader("Accept", "application/json;charset=UTF-8");
   AuthPost.send(JSON.stringify(userData));
    AuthPost.onreadystatechange = function() {
if(AuthPost.readyState == 4) {
   var Authjson =  JSON.parse(AuthPost.responseText);
       var tokken =  Authjson.token
       console.log(tokken)
     var createPost = new XMLHttpRequest();

        createPost.open("POST", "http://192.168.0.77/sidharth/neword/wp-json/wp/v2/posts");

        createPost.setRequestHeader("Authorization", "Bearer "+tokken);
        createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        createPost.send(JSON.stringify(ourPostData));
        createPost.onreadystatechange = function() {
            if(createPost.readyState == 4) {
                 // alert('Post Created.');
                if( createPost.status == 201 ) {
                     alert('Post - Created.');
                    document.querySelector('.admin-quick-add [name="title"]').value = '';
                    document.querySelector('.admin-quick-add [name="content"]').value = '';
                } else {
                    alert('Error - Try again.');
                }
            }}
    

    }
}

       
        // }}
    // });
// }
})
}




}); 
