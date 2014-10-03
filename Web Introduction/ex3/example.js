function addTextToList()
{
  //Retrieves the olElement from the document
  var olElement = document.getElementById("list");
  
  //Creates a new <li> element
  var newElement = document.createElement("li");
  
  //Appends the text to the new <li> element as a child.
  newElement.appendChild(document.createTextNode(document.getElementById("textToAdd").value));
  
  //Appends the new <li> element to the <ol> element.
  olElement.appendChild(newElement);
  
  //Clears the textbox for the next insertion.
  document.getElementById("textToAdd").value = "";
}
