var database = [{
    username : "Shantanu",
    Password : "Shanu",
},
{
username : "Homies",
Password : "MyBoiis"
},
{
username : "Goku",
Password : "SuperSaiyan"
},
{
    username : "Vegeta",
    Password : "SaiyanPrince"
}];

var newsfeed = [
    {
    username : "Goku",
    notifications : "There are 10 notifications from your friends",
    message : "9 messages still unread"
},
{
    username : "Vegeta",
    posts : "You have shared a post",
    Likes : "Many people liked your post"
},
{
    username : "Shantanu",
    notifications : "none",
}];

// var username1 = prompt("Enter your username! ", '');
// var password1 = prompt("Enter your password! ", '');

// Right approach using Loops
function isSignedIn(user, pass){
    for(var i = 0; i < database.length; ++i){
        if(database[i].username === user && database[i].Password === pass){
            console.log("True!! User is present");
            return true;
        }
    }
    return false;
}

function signIn(user, pass){
    if(isSignedIn(user, pass)){
        console.log(newsfeed);
    }
    else{
        alert("User Not Registered!!!");
    }
}

// NOT THE RIGHT APPROACH [
// var signIn = (user, pass) => {
//     for(var i = 0; i < database.length; i++){
//         if(database[i].username === user && database[i].Password === pass){
//             console.log(newsfeed);
//             break;
            
//         }
//         else{
//             alert("Sorry!! Wrong username or password ");
//             continue;
//         }
//     }
// }
// ]





// var signIn = (user, pass) =>{
//     if(user === database[0].username && pass === database[0].Password){
//         console.log(newsfeed[0], newsfeed[1]);
//     }
//     else{
//         alert("Wrong username or password! bitchh");
//     }
// };

var username1 = prompt("Enter your username! ", '');
var password1 = prompt("Enter your password! ", '');

// isSignedIn(username1, password1);
signIn(username1, password1);