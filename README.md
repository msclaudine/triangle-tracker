TRIANGLE TRACKER PROGRAM

This program (TRIANGLE TRACKER PROGRAM)is developed by MUSANABANDI CLAUDINE.

It helps in tracking the type of triangle by intering the three sides of triangle.

SETUP
If you would like a local copy of this website, make sure you have git installed then run:

\$ git clone https://github.com/msclaudine/triangle-tracker.git

you may browse it from:

Technologies used:
HTML
CSS &
JAVASCRIPT

© Copyright 2018 M.Claudine

Triangle tracking

1. define invalid input
   eg:sides that have lenght less than or equals to zero (A<=0 or B<=0 0r c<=0 or both sides equal to zero or negative values).
   if this conditioin is not true

2. check if triangle is equilateral by cheking if all its sides are equal

   eg:12,12,12.

   if this condition also is also not true

3. it checks if triangle is isosceles by checking if it has any two sides which are equal
   eg:25,25,9.
   also when it found this condition not satisified

4. it checks if inputed sides form a scalene triangle by checking to see
   if all sides are different (no side equal to another)and the sum of any two sides is greater than the rest one
   eg:3,4,9
5. after check if given sides can form a triangle by checking if the sum of any two sides are not less than or equal to the rest one
   when the sum of any two sides is less than or equal to the third one; those can note form a triangle
