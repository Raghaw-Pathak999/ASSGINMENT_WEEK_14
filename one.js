

let allUser = ["AMIT", "INNU", "NOBITA", "DOREMON", "GEEYANN", "NINJA"] 


function isUserPresent(user) {
    if (allUser.includes(user)) {
      console.log(`Yes, ${user} is a valid user.`);
      return true;
    } else {
      console.log(`No, ${user} is not a valid user.`);
      return true;
    }
  }
  
isUserPresent("AMIT");
isUserPresent("username");
