let userRole = "admin"; 
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log ("Access Level =",accessLevel);

let isLoggedIn = false;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin") {
        userMessage = "Welcome Admin !";
    } else {
        userMessage = "Welcome User";
    }
} else {
    userMessage = "Please log in to the system";
}

console.log ("User message ",userMessage);

let userType = "subscriber";
let userCategory;