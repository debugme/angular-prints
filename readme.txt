[What To Do]

(1) Using AngularJS write a small javascript application which presents a simple web shopping page to a user.
(2) It should allow them to add and remove items to/from a virtual shopping basket.
(3) The page should also have a “check out” option that presents the user with various delivery options to select from.
(4) Once selected, a summary of the order + delivery method and charges should be presented.  On acceptance, a “thank you” page should be shown.
(5) At any point in the process the user should be able to step back and amend their selections.
(6) All data should be mocked (don't spend time coding database connections etc).
(7) As the role may require these skills, feel free to use any HTML5/CSS3 code to improve your application.

[How To Run]

(1) Unzip the contents off the ZIP file
(2) Start a local server in the same folder as index.html e.g. python -m SimpleHTTPServer
(3) The application simulates a front-end for a web site which sells vintage photos
(4) It has been written using responsive design principles. This means it should work on an iPhone, iPad or Mac Book Pro.


[How To Use]

(1) Load a browser to connect to the server you just started e.g. http://localhost:8000
(1) Clicking on a photo adds it to the shopping cart with the following visual cues:
    (a) The photo blurs to indicate it has been added to the cart
    (b) The cart in the navigation bar gets a '+' sign to indicate it is no longer empty
    (c) The total in the navigation bar gets incremented by the price of the added photo
(2) Clicking on a photo previously clicked on removes it from the shopping cart with the following visual cues:
    (a) The photo unblurs to indicate it has been removed from the cart
    (b) The cart in the navigation bar loses its '+' sign when no items are in the cart
    (c) The total in the navigation bar gets decremented by the price of the removed photo
(3) Clicking the shopping cart or total in the navigation bar takes you to the Check Out page
(4) The Check Out page allows you to choose from a Gold, Silver or Bronze delivery option, updating total accordingly
(5) Clicking Submit takes you to the Thank You page; it resets all the data
(6) Clicking Cancel takes you back to the Home page; it does not reset any data
(7) Clicking on the logo in the top left of the navigation bar takes you to the Home page

Thank You.

Asad Razvi.
