## Features Done in the code

- products are displayed in a grid -> Done
- each product has :
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying -> Done
  - a "price" field, in cents. This should be formatted as dollars like `$3.51`. -> Done
  - a "date" field, which is the date the product was added to the catalog. -> The date is formatted.
- the product grid should automatically load more items as you scroll down -> Done
- display an animated "loading..." message while the user waits for the data to load -> A spin loader added while fetching data
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~". -> Done

### Pleas folow these steps in order to run the app and backend api

1. Clone the project.
2. Please type this command `yarn` in order to install all the dependencies.
3. To run the app just write this command in terminal i.e `yarn start` It will start the backend and front end concurrently, You can run the front according to the local host you see on terminal.
