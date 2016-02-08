var variants = ['bolden','italicize','underlined','boldItalic','boldUnderline', 'italicUnderline', 'allVariants']; //7
var fontSize = ["largestfont","largerfont","smallerfont","smallestfont"]; //5
var color = ["blueText","greenText", "redText", "purpleText", "magentaText", "pinkText"]; //6
var textalignment = ["textleft","textcenter","textright"]; //3
var fontStyle = ["helveticaFont","courierfont","arialfont", "timesNRfont"];  //4
var letterSpacing = ["smallerLetterSpacing", "bigLetterSpacing","biggerLetterSpacing", "biggestLetterSpacing"]; //4
var borders = ["dottedborder","dashedborder", "solidborder", "rounded-solidborder","rounded-dottedborder","rounded-dashedborder"]; //6

var blockTags = ['div', 'article', 'section', 'header', 'footer', 'nav', 'figure', 'li'];  //8
var sections = ['section', 'aside', 'div.main'];  //3
var headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];  //6
var textHolders = ['a', 'em', 'strong', 'abbr'];  //4

var currentStyle = [];

// Random Number Generator for determining what element of an array to choose  
var randomMod = function(array){
  return array[Math.floor(Math.random() * array.length)];  
};


var blockTagsDecide = function(){
    blockTags.forEach(function (x){
        currentStyle.push([x,randomMod(variants)]);
        // currentStyle.push([x,randomMod(fontSize)]);
        currentStyle.push([x,randomMod(color)]);
        currentStyle.push([x,randomMod(textalignment)]);
        currentStyle.push([x,randomMod(fontStyle)]);
        // currentStyle.push([x,randomMod(letterSpacing)]);
        // currentStyle.push([x,randomMod(borders)]);
    })
};

var sectionsDecide = function(){
    sections.forEach(function (x){
        currentStyle.push([x,randomMod(variants)]);
        // currentStyle.push([x,randomMod(fontSize)]);
        currentStyle.push([x,randomMod(color)]);
        currentStyle.push([x,randomMod(textalignment)]);
        currentStyle.push([x,randomMod(fontStyle)]);
        // currentStyle.push([x,randomMod(letterSpacing)]);
        // currentStyle.push([x,randomMod(borders)]);
    })    
};

var headersDecide = function(){
    headers.forEach(function (x){
        currentStyle.push([x,randomMod(variants)]);
        // currentStyle.push([x,randomMod(fontSize)]);
        currentStyle.push([x,randomMod(color)]);
        currentStyle.push([x,randomMod(textalignment)]);
        currentStyle.push([x,randomMod(fontStyle)]);
        // currentStyle.push([x,randomMod(letterSpacing)]);
        // currentStyle.push([x,randomMod(borders)]);
    })    
};

var textHoldersDecide = function(){
    textHolders.forEach(function (x){
        currentStyle.push([x,randomMod(variants)]);
        // currentStyle.push([x,randomMod(fontSize)]);
        currentStyle.push([x,randomMod(color)]);
        currentStyle.push([x,randomMod(textalignment)]);
        currentStyle.push([x,randomMod(fontStyle)]);
        // currentStyle.push([x,randomMod(letterSpacing)]);
        // currentStyle.push([x,randomMod(borders)]);
    })    
};

var removeStyle = function(styleSet){
  styleSet.forEach(removeStylePair);  
};

var removeStylePair = function(aPair){
  Array.prototype.forEach.call(document.querySelectorAll(aPair[0]), function($el){
    $el.classList.remove(aPair[1]);
  });
};

var applyStylePair = function(aPair){
  Array.prototype.forEach.call(document.querySelectorAll(aPair[0]), function($el){
    $el.classList.add(aPair[1]);
  });
};

var applyStyle = function(styleSet){
    styleSet.forEach(applyStylePair);
};

var removeElements = function(){
  currentStyle.forEach(function (style){
      var index_of_style = currentStyle.indexOf(style);
     currentStyle.splice(index_of_style, 1); 
  });  
};

var nextStyle = function(){

// currentStyle.forEach(function (aPair){
//     removeStylePair(currentStyle);
// });

var prevStyle = currentStyle;
prevStyle.forEach(removeStylePair);

//   currentStyle = [];
 removeStyle(currentStyle);
  console.log(currentStyle);
  
  blockTagsDecide();
  sectionsDecide();
  headersDecide();
  textHoldersDecide();
  
//   console.log(currentStyle);
//   console.log(currentStyle[0]);
 
 applyStyle(currentStyle);
 
//  currentStyle.forEach(function (aPair){
//      applyStylePair(aPair);
//  });
};

var appStart = function(){
  document.body.addEventListener("click", nextStyle);
}

document.addEventListener("DOMContentLoaded", appStart);
document.body.addEventListener('click',nextStyle);