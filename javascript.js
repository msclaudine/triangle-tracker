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
      else if ((AB > C) && (AC > B) && (BC > A) && (A!=B) && (A!=C) && (B!=C)) {
        txt="This is scalene triangle!";}
         
         else if ((AB <=C) ||(AC<= B) ||(BC <= A) ) {
         txt="can not form a triangle!";}
         else if ((A<=0) ||(B<= 0) ||(C<= 0) || (A==="") || (B==="") || (C==="")) {
          txt="INVALID NUMBER";}
        else {
        txt="This not valid number.";
        }
        document.getElementById("me").innerHTML=txt  
      }
      