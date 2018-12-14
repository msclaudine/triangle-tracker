 function triangleCheck() {
  var A = parseInt(document.trianleSides.A.value);
  var B = parseInt(document.trianleSides.B.value);
  var C = parseInt(document.trianleSides.C.value);

  var AB = parseInt(document.trianleSides.A.value) + parseInt(document.trianleSides.B.value);
  var AC = parseInt(document.trianleSides.A.value) + parseInt(document.trianleSides.C.value);
  var BC = parseInt(document.trianleSides.B.value) + parseInt(document.trianleSides.C.value);

  var txt;
  
  if ((A === C) && (A=== B) && (B===C)){
    txt="This is equilateral triangle!";
     }
     else if ((A===B) ||(A===C) || (B===C)) {
      txt="This is Isoscelenes triangle!";
      
      }
   