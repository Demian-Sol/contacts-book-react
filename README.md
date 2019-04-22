Contact book app, based on create-react-app.

Used technologies: react, redux, 

Implemented features:
- Listing contacts
- Changing contact data
- Chrome, Opera, Safari, Firefox, IE 11 compatibility
- Saving confirmed changes in local storage
- Searching contacts,
- Alphabetical sorting and grouping contacts by first letter
- Adaptive markup, working window width: 320px - 1280px+
- Adding/removing contacts from 'favorite' category
- Additional favorite contacts list
- Buttons for toggling on and off both lists

Considering small size of application, I decided to keep App.js the only container and redux connection point.

Some components are written as classes to prevent memory leaks caused by function redeclarations during re-renders.
