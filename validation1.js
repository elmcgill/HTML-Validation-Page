//Variables keep track of if each line got validated
valCheck1 = false;
valCheck2 = false;
valCheck3 = false;
valCheck4 - false;

//Function that puts the image beside the First Name box
function validateFN() {
    valCheck1 = false;
    var image1 = getImage(validateFirstName(document.forms["First and Last Name"]["FN"].value), "FN");
    document.getElementById("First Name").appendChild(image1);
}

//The function that puts the image beside the Last Name box
function validateLN() {
    valCheck2 = false;
    var image1 = getImage(validateLastName(document.forms["First and Last Name"]["LN"].value), "LN");
    document.getElementById("Last Name").appendChild(image1);
}

//Function that puts the image beside the gender drop down
function validateGender(){
	valCheck3 = false;
	var image1 = getImage(validateDropDown(), "Gender");
	document.getElementById("Gender2").appendChild(image1);
}

//Function that puts the image beside the state dropdown
function validateState(){
	valCheck4 = false;
	var image1 = getImage(validateDropDown(), "State");
	document.getElementById("State2").appendChild(image1);
}

//Function that gets the specified image depending on if the input is right or wrong
function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

//Function that validates that there is an entry in the dropdown menu
function validateDropDown(){
	valCheck3 = true;
	valCheck4 = true;
	return true;
}

//Function that validates that first name only contains letters or numbers
function validateFirstName(FN){
	
	if(alphaNumCheck(FN) == true){
		valCheck1 = true;
		return true;
	}
	else valCheck1 = false;
	return false;
}

//Function that validates that last name only contains letters or numbers
function validateLastName(LN){
	
	if(alphaNumCheck(LN) == true){
		valCheck2 = true;
		return true;
	}
	else valCheck2 = false;
	return false;
}

//Function that checks if an entry only contains letters and numbers
function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

//Function that validates that every line had successfuly been filled out, then navigates you to the next page
function nextPage(){
  
	if(getValCheck1() == true && getValCheck2() == true && getValCheck3() == true && getValCheck4() == true){
	window.location="validation2.html";
	}
	else{
	window.alert("You are missing somthing");
	}
}

//These functions simple return the valCheck values, used to determine if the page can be changed to the next page
function getValCheck1(){
	return valCheck1;
}

function getValCheck2(){
	return valCheck2;
}

function getValCheck3(){
	return valCheck3;
}

function getValCheck4(){
	return valCheck4;
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}