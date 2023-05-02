# Module 2 Group Assignment

CSCI 5117, Spring 2022, [assignment description](https://canvas.umn.edu/courses/355584/pages/project-2)

## App Info:

* Team Name: Booktok
* App Name: YumYumTok
* App Link: <https://booktok-project2.netlify.app/>

### Students

* Monika Bartulovic, bartu043@umn.edu
* Fiorela Esquivel Martinez, esqui049@umn.edu
* Hoin Jang, jang0064@umn.edu
* Sol Kim, kim01540@umn.edu


## Key Features:

**Describe the most challenging features you implemented
(one sentence per bullet, maximum 4 bullets):**

* At first, we attempted to retrieve the data using the Yelp API to search restaurants, but due to a CORS error, We ended up using the Google Places API, which I believe was the primary cause of our troubles.
* We also experienced CORS errors using the Google Places API and later figured out that we had to use Google's Places Library, which is meant for client-side applications.

Which (if any) device integration(s) does your app support?

* Our app utilizes the location services of a user to be able to return restaurant suggestions near their location. 

Which (if any) progressive web app feature(s) does your app support?

* When the user enters a food-related keyword that they are interested in, related search terms will appear and help them find restaurants more easily.
* Responsive Design



## Mockup images

Figma Wireframe: https://www.figma.com/file/0xv3ZRWf61KXjlvsNLr7UL/BookTok-WireFrame?node-id=0-1&t=gAittDcKbzwDNnEO-0


## Testing Notes:

**Is there anything special we need to know in order to effectively test your app? (optional):**

* No

## Screenshots of Site (complete):
Figure 1: Since there is no restaurant information on the Timeline, a user needs to add to it. This picture shows the Find Restaurants page. 
A user can either click on a suggestion that appears as they type or ignore the search bar suggestions and do a general search by pressint the
enter key or the search button. 

![](/nextjs-starter/static/FindRestaurants.jpeg)

Figure 2: This is the list of Korean restaurants that appeared after the user typed "Korean" in the search bar. Results are biased to your location, 
but user's can also search "Korean in New York" to see restaurant suggestions in New York. Similarly, user's can search "near me" to see general 
restaurants near their location. The search is very flexible and even keywords can be searched. 

![](/nextjs-starter/static/RestaurantLists.jpeg)

Figure 3: Review and add to wish list after the user clicks 'Add place' for Korean Restaurant, one of the restaurants on the list.

![](/nextjs-starter/static/Review.jpeg)

Figure 4: These are the images that appeared when the user clicked the 'Add'button after filling out the review and wish list.

![](/nextjs-starter/static/AfterClicking.jpeg)

Figure 5: Finally, user can see the restaurants added by the user on the main page appearing on the Timeline. 

![](/nextjs-starter/static/Timeline.jpeg)

Figure 6: The user can also see the contents that they entered earlier in their wish list.
![](/nextjs-starter/static/WishList.jpeg)





## External Dependencies:

**Document integrations with 3rd Party code or services here.
Please do not document required libraries (e.g., Vue, Vuefire, Firebase).**

* [Font Awesome](https://fontawesome.com/): Styling, components
* [React Icons](https://react-icons.github.io/react-icons/): Styling, components
* [Google Maps Api](https://mapsplatform.google.com/?utm_source=search&utm_medium=googleads&utm_campaign=brand_core_exa_desk_mobile_us&gad=1&gclid=CjwKCAjwxr2iBhBJEiwAdXECw1nmUt1ONu7nYh5VrzdUvheIJCWWHBWV8rhHddX-VLNrBN4z8qG5oRoCPV8QAvD_BwE&gclsrc=aw.ds): Get a list of restaurants and their locations
* [Gelocation Api](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API): Access the user's location

**If there's anything else you would like to disclose about how your project
relied on external code, expertise, or anything else, please disclose that
here:**

* X
