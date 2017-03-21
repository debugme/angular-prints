# Demo

http://vintage-prints.herokuapp.com/

# Vintage Prints

A simple AngularJS shopping cart application that provides a responsive user experience on iPhone, iPad and Mac Book Pro.

1. Run the application as a node application e.g. npm install; npm start

2. Load a browser to connect to the server you just started e.g. http://localhost:5000

3. Clicking on a photo adds it to the shopping cart with the following visual cues:
  * The photo blurs to indicate it has been added to the cart
  * The cart in the navigation bar gets a '+' sign to indicate it is no longer empty
  * The total in the navigation bar gets incremented by the price of the added photo

4. Clicking on a photo previously clicked on removes it from the shopping cart with the following visual cues:
  * The photo unblurs to indicate it has been removed from the cart
  * The cart in the navigation bar loses its '+' sign when no items are in the cart
  * The total in the navigation bar gets decremented by the price of the removed photo

5. Clicking the shopping cart or total in the navigation bar takes you to the Check Out page

6. The Check Out page allows you to choose from a Gold, Silver or Bronze delivery option, updating the total accordingly

7. Clicking Submit takes you to the Thank You page; it resets all the data

8. Clicking Cancel takes you back to the Home page; it does not reset any data

9. Clicking on the logo in the top left of the navigation bar takes you back to the Home page
