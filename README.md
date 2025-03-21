# shaunK79-github.io-calculator

So as it appears EVERYONE does a calculator project I thought I would give it a go too.
I followed a tutorial to get an idea of how to go about it. I was particularly concerned about the Javascript.

The html and css I am quite comfotable with - I started off with the input( display ) screen whihc sits at the very top, gave it a class of 'display' and then set about creating a container which housed a table with my rows and columns, making sure that each one was 'classed' with a unique name. These were all the buttons of th calculator.

Then proceeded with the css and styling the container, table, buttons with hover affects which change color axpand slightly when clicked. I quite enjoyed playing around the styling. The front of the calculator i took inspiration from my iphone calculator but obviously styled it up with the hover affects.

So the Javascript- --- i gave it a good go but became stuck at the 'calculating' part of the script.

i managed to declare the variable of display = document.querySelector('display')

and i got most of this correct    function appendToDisplay(input){
	                                  if(display) display.value += input;
                                  }

and this one i managed with fine   function appendToDisplay(input){
	                                   if(display) display.value += input;
                                  }

but the part that got me was the function calculate()
i eventually had to get the code from the tutorial but atleast i am aware now of 'try' and 'catch'

although its receommended that eval() is not used!!!
