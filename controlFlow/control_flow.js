//exercice 
/**let userRole = "admin"; 
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log ("Access Level =",accessLevel);

let isLoggedIn = true;
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

console.log ("User message =",userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log ("user category =", userCategory);


let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log ("Authentication Status =", authenticationStatus);

**/

//practice task 



const userRoleSelect= document.getElementById("userRole");
const response = document.getElementById("response");

userRoleSelect.addEventListener("change", (e) => 
{
    let servicesAvailable;
    const role = e.target.value;

    switch (role) {
        case "Employee":
            servicesAvailable = "Full access to Dietary Services"
            break;
        case "Enrolled Member":
            servicesAvailable = "Dietary Services & 1/1 interaction with a dietician"
            break;
        case "Subscriber":
            servicesAvailable = "partial access to Dietaty Services only"
            break;
        case "Non-Subscriber":
            servicesAvailable = "No service available, please enroll"
            break;
        default:
            servicesAvailable = "Unknown"
        break;
    }
    response.innerText=servicesAvailable;
});





