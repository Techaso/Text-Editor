/**
 * Update the output text as a user types in the textarea
 */
function updateText(){
  // CODE GOES HERE
  // console.log('working')
  let ip = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = ip;
}

/**
 * Toggle the bold class for the output text
 */
function makeBold(elem){
  //CODE GOES HERE
  // document.getElementById('bold').classList.toggle('active');
  elem.classList.toggle('active'); // elem is 'this', used inside onclick = "" in HTML
  document.getElementById("text-output").classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle('active'); // elem is 'this', used inside onclick = "" in HTML
  document.getElementById("text-output").classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * Using the classList property
 * Using contains, remove, and add functions
 */
function makeUnderline(elem){
    //CODE GOES HERE

    /* METHOD - 1
      elem.classList.toggle('active'); // elem is 'this', used inside onclick = "" in HTML
      document.getElementById("text-output").classList.toggle('underline');
    */

   /* METHOD - 2 */
   elem.classList.toggle('active');
   let formattedText = document.getElementById("text-output");
   if(formattedText.classList.contains('underline')){
     formattedText.classList.remove('underline');
   }else {
     formattedText.classList.add('underline');
   }

}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 */
function alignText(elem, alignType){
  // CODE GOES HERE
  // loop over all button elements so that .active class can be removed from all together
  let alignButtons = document.getElementsByClassName('align');
  for(let i = 0; i<alignButtons.length; i++){
    alignButtons[i].classList.remove('active');
  }
  elem.classList.toggle('active');
  document.getElementById('text-output').style.textAlign = alignType;
}