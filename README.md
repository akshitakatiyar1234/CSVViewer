**Packages Installed**
1.express-ejs-layouts
2.dotenv
3.ejs
4.express
5.mongoose
6.nodemon
7.express-session
8.multer
9.papaparse <br/ >
10.connect-flash

**Run my project**
npm start


**Features**
1.User can upload any csv file into the system - using Multer JS
2.Display a list of all uploaded csv files - CSV is parsed and converted into JSON and stored in the Mongo Database
3.When the user selects a file, it displays all the data (with column headers) in a table on the page (front end)
4.There is a search box which searches on the front end itself and displays the matching rows of the table only (empty search box displays all the data).
5.There is a sorting button (ascending and descending) for each column on the front end
6.There is a validation on the front end and server side on being able to upload only csv type of files
7.There is a pagination of the data displayed in the table to a max of 100 records per page
