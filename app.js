function initSearch(){
	alert("Hello World");

	// get all the information you need to run the search
	var yourName = prompt("Who do you want to search for?");

	// then pass that info to the respective function.
	var result = getPersonInfo("J", "T")

	// once the search is done, pass the results to the responder function
	responder(result);
}

function responder(results){
	// results may be a list of strings, an object, or a single string. 
	alert(results);
}

function getPersonInfo(firstname, lastname){
	var result = "This will be the information for whoever you searched for";
	// look up person's information
	return result;
}

function getFamily(){
	// return list of names of immediate family members
}

// there will be much more here, and some of the code above will certainly change

initSearch();
window.close(); // exit window as the end of the session -- you may remove this