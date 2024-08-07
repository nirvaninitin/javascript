--> Events
NOTE : syntax for every event is the same only the event name is changed

"click" :- when clicked on the element
"keydown":- keyboard event when the key is pressed by the user
"keypressed" :- ''''same''''
"mouseenter" :- When the pointer is entered into the element
"mousedown":- when the pointer is pressed onto the element
"mouseleave" :- When the pointer is moved out of the element

syntax: element.addEventListner('click', function(e){
    code to be runned when element gets clicked
})

-->Proterties of events:

target:- it returns the value where the event occured.


-->methods of events :

preventdefault():- it prevents the default behaviour of the object
