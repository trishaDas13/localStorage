let input = document.querySelectorAll('span');

//todo ---------- Create object with the data ----------
function createObject(firstName,lastName,phone,state,city,country,village){
    let obj;
    if(firstName != null || lastName != null || phone != null || state != null || city != null || country != null || village != null) {
        obj = {
            fname : firstName,
            lname : lastName,
            phn : phone,
            state : state,  
            city : city,
            country : country,
            village :village,
        }
    } 
    storeData(obj);
}
//todo ---------- Showing Alert on loading the window ----------
function showingAlert(){
    let firstName = prompt ("Please enter your first name");
    let lastName = prompt ("Please enter your last name");
    let country = prompt ("Please enter your country");
    let phone = prompt ("Please enter your phone number");
    let state = prompt ("Please enter your state");
    let city = prompt ("Please enter your city");
    let village = prompt ("Please enter your village");
    createObject(firstName,lastName,phone,state,city,country,village);
}
showingAlert();

//todo ---------- Store data in local storage ----------
function storeData(data){
    localStorage.setItem('storage', JSON.stringify(data));
    getData();
}
function getData(){
    let store = localStorage.getItem('storage');
    if(store){
        let info = JSON.parse(store);
        input[0].innerText = info.fname;
        input[1].innerText = info.lname;
        input[2].innerText = info.country;
        input[3].innerHTML = info.phn;
        input[4].innerText = info.state;
        input[5].innerText = info.city;
        input[6].innerText = info.village;
    }
    else{
        // localStorage.setItem('storage', JSON.stringify(data));
        store;
    }
}
