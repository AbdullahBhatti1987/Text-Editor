var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var underline = document.getElementById("underline");
var textleft = document.getElementById("textleft");
var textcenter = document.getElementById("textcenter");
var textright = document.getElementById("textright");
var fontsizesmall = document.getElementById("fontsizesmall");
var fontsizelarge = document.getElementById("fontsizelarge");
var fontfamily = document.getElementById("fontFamilySelect");
var textarea = document.getElementById("textarea");

if (textarea !== null) {
  bold.addEventListener("click", function () {
    textarea.style.fontWeight =
      textarea.style.fontWeight === "bold" ? "normal" : "bold";
    //   if(textarea.style.fontWeight === 'normal'){
    //       textarea.style.fontWeight = 'bold';
    // } else{
    //       textarea.style.fontWeight = 'normal';
    //   }
  });

  italic.addEventListener("click", function () {
    textarea.style.fontStyle = 
      textarea.style.fontStyle === "italic" ? "normal" : "italic";
  });

  underline.addEventListener("click", function () {
    textarea.style.textDecoration =
      textarea.style.textDecoration === "underline" ? "none" : "underline";
  });

  textleft.addEventListener("click", function () {
    textarea.style.textAlign = "left";
  });

  textcenter.addEventListener("click", function () {
    textarea.style.textAlign = "center";
  });

  textright.addEventListener("click", function () {
    textarea.style.textAlign = "right";
  });
  
  fontsizesmall.addEventListener("click", function () {
      textarea.style.fontSize = "x-small";
    // if (textarea.style.fontSize == "xx-large") {
    //   textarea.style.fontSize = "x-large";
    // } else if (textarea.style.fontSize == "x-large") {
    //   textarea.style.fontSize = "larger";
    // } else if (textarea.style.fontSize == "larger") {
    //   textarea.style.fontSize = "large";
    // } else if (textarea.style.fontSize == "medium") {
    //   textarea.style.fontSize = "small";
    // } else if (textarea.style.fontSize == "small") {
    //   textarea.style.fontSize = "smaller";
    // } else if (textarea.style.fontSize == "smaller") {
    //   textarea.style.fontSize = "x-small";
    // } else if (textarea.style.fontSize == "x-small") {
    //   textarea.style.fontSize = "xx-small";
    // }
  });

  fontsizelarge.addEventListener("click", function () {
    textarea.style.fontSize = "large";
  });

  textcolor.addEventListener("input", function () {
    textarea.style.color = textcolor.value;
  });

  fontfamily.addEventListener("change", function () {
    textarea.style.fontFamily = fontfamily.value;
  });
} else {
  alert("Enter text");
}
