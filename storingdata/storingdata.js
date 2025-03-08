//METHODS TO STORE DATA IN A BROWSER
//1. local storage - stores data permanently unless manually deleted
//stores only strings
//available across all pages under same origin

// localStorage.setItem("name", "Alice");
// console.log(localStorage.getItem("name"));
//removes from local storage
// localStorage.removeItem("name");
// localStorage.clear();

//2. temporary storage
//stores data when the tab is open
//works like local storage but clears local storage when tab is closed
// sessionStorage.setItem("user", "Sam");
// console.log(sessionStorage.getItem("user"));
// sessionStorage.removeItem("user");
// sessionStorage.clear();

//3. cookies - small storage for server communication
//4. indexDb - for large data
//5. cache - storing api responses
