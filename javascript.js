 function triangleCheck() {
  var A = parseInt(document.trianleSides.A.value);
  var B = parseInt(document.trianleSides.B.value);
  var C = parseInt(document.trianleSides.C.value);

  var AB = parseInt(document.trianleSides.A.value) + parseInt(document.trianleSides.B.value);
  var AC = parseInt(document.trianleSides.A.value) + parseInt(document.trianleSides.C.value);
  var BC = parseInt(document.trianleSides.B.value) + parseInt(document.trianleSides.C.value);
  
  var txts=["INVALID INPUTS","THIS IS EQUILATERAL TRIANGLE","THIS IS ISOSCELENES TRIANGLE","THIS IS SCALENE TRIANGLE",
  "CAN NOT FORM A TRIANGLE", "THIS IS NOT VALID NUMBERS"];
  var out;

  if ((A<=0) ||(B<= 0) ||(C<= 0) || (A==="") && (B==="") && (C==="")) {
  return document.getElementById("me").innerHTML=txts[0]}
  if ((A === C) && (A=== B) && (B===C)){
      out=txts[1];
     }
     else if ((A===B) ||(A===C) || (B===C)) {
      out=txts[2];
      
      }
      else if ((AB > C) && (AC > B) && (BC > A) && (A!=B) && (A!=C) && (B!=C)) {
        out=txts[3];}
         
         else if ((AB <=C) ||(AC<= B) ||(BC <= A) ) {
          out=txts[4];}
  
        else {
        out=txts[5];
        }
        document.getElementById("me").innerHTML=out   
      }
      