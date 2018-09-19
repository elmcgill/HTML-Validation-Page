//These functions keep track of which boxes have been validated as correct, these could be used to navigate to the next page if there were one
var valCheck1;
var valCheck2;
var valCheck3;

//Function that puts the image beside the Email box
function validateEmail() {
    valCheck1 = false;
    var image1 = getImage(emailCheck(document.forms["Email"]["email"].value), "email");
    document.getElementById("Email1").appendChild(image1);
}

//Function that puts the image beside the Phone box
function validatePhone(){
	valCheck2 = false;
    var image1 = getImage(phoneCheck(document.forms["Phone"]["Phone"].value), "Phone");
    document.getElementById("Phone1").appendChild(image1);
}

//Function that puts the image beside the Address box
function validateAddress(){
	valCheck3 = false;
    var image1 = getImage(addressCheck(document.forms["Address"]["Address"].value), "Address");
    document.getElementById("Address1").appendChild(image1);
}

//Checks if the adress is in Ames,IA for as well as checks to make sure that it only contains letters or numbers
function addressCheck(address){
	
	var comma = address.indexOf(",");
	var len = address.length-3;
	var len2 = address.length;
	
	if(!address.includes(",")){
		window.alert("Address must be in City,ST fomat");
		valCheck3 = false;
		return false;
	}
	
	if(comma != len){
		window.alert("Address must be in City,ST fomat");
		valCheck3 = false;
		return false;
	}
	
	for(i=0;i<len2;i++){
		var txt = address.charAt(i);
		if(i != comma){
			if(!alphaNumCheck(txt)){
				valCheck3 = false;
				return false;
			}
		}
	}
	valCheck3 = true;
	return true;
}
//Checks if the phone number is formatted in either xxx-xxx-xxxx, or xxxxxxxxxx, and makes sure that the phone number only contains numbers
function phoneCheck(phone){
	
	var x = phone.length;
	
	if(x != 10 && x != 12){
		window.alert("Check your input for errors");
		valCheck2 = false;
		return false;
	}
	
	if(x == 10){
		if (phone.match(/^[0-9]+$/)) {
        return true;
		} else {
			window.alert("Phone number must only contain numbers");
			valCheck2 = false;
			return false;
		}
	}
	
	if(x == 12){
		for(i=0;i<12;i++){
			var txt1 = phone.charAt(i);
			if(i != 3 && i != 7){
				if (!txt1.match(/^[0-9]+$/)) {
					window.alert("Phone number must only contain numbers");
					valCheck2 = false;
					return false;
				}
			}
			if(i == 3 && txt1 != "-"){
				window.alert("Check your formatting, it must be in xxx-xxx-xxxx");
				valCheck2 = false;
				return false;
			}
			if(i == 7 && txt1 != "-"){
				window.alert("Check your formatting, it must be in xxx-xxx-xxxx");
				valCheck2 = false;
				return false;
			}
		}
	}
	
	valCheck2 = true;
	return true;
}

//Gets the correct image depending on if the validation was successful or not
function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

//Checks to make sure the email is fomatted exactly like xxx@xxx.xxx and checks that where there is no @ or . that the characters are only numbers or letters
function emailCheck(email) {
	var n = email.length;
	
    if(n !=11){
		window.alert("Email must be in xxx@xxx.xxx format");
		valCheck1 = false;
		return false;
	}
	
	for(i=0;i<email.length;i++){
		var txt = email.charAt(i);
		if(i != 3 && i != 7){
			if(!alphaNumCheck(txt)){
				window.alert("Email must contatin only numbers or letters");
				valCheck1 = false;
				return false;
			}
		}
		if(i == 3 && txt != "@"){
			window.alert("Email must be in xxx@xxx.xxx format");
			valCheck1 = false;
			return false;
		}
		if(i == 7 && txt != "."){
			window.alert("Email must be in xxx@xxx.xxx format");
			valCheck1 = false;
			return false
		}
	}
    valCheck1 = true;
	return true;
}

//Function that checks that an entry only contains letters or numbers
function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}