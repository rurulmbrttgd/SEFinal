Note:
You need to have a nodejs installed in your device, mysql and xampp (if needed) in order to properly run the system

For the database:
1. Download the “salesoptima.sql” 
2. Open SQL Workbench, create a connection.
3. Click File then click Open SQL Script then browse it to salesoptima.sql
4. If it doesn’t work, use xampp and just start the “Apache” and “MySql”


For running the system:
1. Clone the files by the clone options from github or use Github Desktop
2. Open the folder named SEFinal as VS code
3. Create 2 terminal and type “cd frontend” and “cd api” 
4. When you are inside the frontend and api, you then start to download the following packages:
	For Frontend just type npm install @email/browsers, react, react-router-dom, bootstrap
	For API/Backend just type npm cors, cookie-parser, jsonwebtoken, axios, mysql, express
5. After installing all the required packages, go to each terminal and type npm run dev for Frontend and npm start for API/Backend
6. Then ctrl + click the localhost that will appear in the console from the frontend terminal and the website will pop up.
