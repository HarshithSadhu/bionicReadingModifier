// Get The URL
const site = window.location.hostname

// var elementList = document.querySelectorAll('*');
var elementList = document.querySelectorAll('p:not(:empty), li:not(:empty)');

var textContent1 = [];

for (var i = 0; i < elementList.length; i++) {
  var element = elementList[i];
  var containsBR = false;

  // Check if the element contains any <br> tags
  var brTags = element.getElementsByTagName('br');
  if (brTags.length > 0) {
    containsBR = true;
  }

  if (!containsBR) {
    textContent1.push(element);
  }
}

console.log(textContent1);


for (let element of textContent1) {
  // Perform operations on each element
  //console.log(element.textContent);
  boldFirstTwoLetters(element);
}

var pElement = document.querySelector('span');
  
// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

  Add_Custom_Style(`

      .bold-first-two {
          font-weight: bold;
        }

  `)

function boldFirstTwoLetters(element) {
    var text = element.textContent;
    var modifiedText = '';
    var words = text.split(" ");
    //console.log(words);
    for(let word of words){
      // if(word !=""){
      // const currentContent = element.innerHTML;
        
      
      if (word.length > 2) {
        modifiedText += '<span class="bold-first-two">' + word.substr(0, 2) + '</span>' + word.substr(2)+' ';
      } else {
        modifiedText += '<span class="bold-first-two">' + word + '</span>'+' ';
      }
    // }
      // element.innerHTML = currentContent + modifiedText;
    }  
    
    element.innerHTML = modifiedText;
  }