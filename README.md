Technologies used: HTML, CSS, jQuery, Javascript

Development process:
My first and primary goal was to focus on the game logic and get that working. I
began on the first day (Tuesday evening) by making sure all authentication was
set up, so that users could sign in, out and change their passwords. The
following day, I jumped right into setting up games. I set up the ability to
create a new game, and then I set up the patch request to update games. I more
or less wrote the code to display x and o in the game board, record wins, and
send updated-status all at the same time. It was the most difficult part of the
project for me. I struggled most with determining what format to send the data
in in the patch request. The form fields confused me, so I instead built a
function to build a JSON object with the required fields to send. The function
was initially a mess of super repetitive code, and I struggled particularly
with making sure it could format the object in the correct way to be read by
the back-end. In particular, I tried using the JSON.stringify method because I
thought I had to send it JSON, but after several tries, I dropped that and sent
the object I created as it was, and that worked fine.

From there out, it was fairly smooth sailing. On Thursday, I cleaned up the code
from Wednesday because it was extremely repetitive, and began transfering all of
the success logging from the console to messages displayed on screen.

On Friday, I finished logging messages to the interface and styled the page,
including a media query for smaller sizes.

Unsolved problems:
