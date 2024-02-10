import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "dev",
  password: "jenjen",
  database: "salesoptima",
});

// login form
app.post('/login', (req, res) => {
  const { busowner_email, busowner_password } = req.body;
  const sql = "SELECT * FROM businessowner WHERE busowner_email = ? AND busowner_password = ?";
  
  db.query(sql, [busowner_email, busowner_password], (err, data) => {
    if (err) {
      return res.status(500).json({ Message: "Server Side Error" });
    }
    
    if (data.length === 0) {
      return res.status(401).json({ Message: "Wrong Email or Password" });
    } else {
      // Assuming you have a secret key for JWT, replace 'your-secret-key' with your actual key
      const token = jwt.sign({ user: busowner_email }, 'your-secret-key', { expiresIn: '1h' });

      res.cookie('token', token, { httpOnly: true });
      res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
      res.header('Access-Control-Allow-Credentials', true);

      return res.json({ Status: "Login Successfully!" });
    }
  });
});

app.listen(8081, () => {
  console.log("Running");
});


app.get('/customers', (req, res) => {
  const sql = "SELECT * FROM customer";

  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json({ Message: "Server Side Error" });
    }

    return res.json({ customers: data });
  });
});



//get product
app.get('/product', (req, res) => {
  const sql = "SELECT * FROM product";

  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json({ Message: "Server Side Error" });
    }

    return res.json({ customers: data });
  });
});


app.get('/customers/:id', (req, res) => {
  const customer_id = req.params.id;

  // SQL query to retrieve transactions of the customer along with total amount information
  const sql = `
    SELECT 
        t.transaction_id,
        t.product_id,
        t.product_name,
        t.product_quantity,
        t.product_price,
        t.transaction_date,
        ta.total_price,
        ta.total_amount
    FROM 
        Transaction t
    JOIN 
        TotalAmount ta ON t.transaction_id = ta.transaction_id
    WHERE 
        t.customer_id = ?
  `;

  db.query(sql, [customer_id], (err, transactions) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ status: 'Error', message: 'Internal server error' });
    } else if (transactions.length === 0) {
      // If no transactions for the customer ID are found
      res.status(404).json({ status: 'Error', message: 'No transactions found for this customer' });
    } else {
      // If transactions are found, send the data in the response
      res.json({ status: 'Success', transactions });
    }
  });
});

//Forgot Password
app.post('/forgotpassword', (req, res) => {
  const { busowner_email, busowner_password } = req.body;
  // You may want to perform additional validation here

  // Update the user's password in the database
  const sql = "UPDATE businessowner SET busowner_password = ? WHERE busowner_email = ?";
  db.query(sql, [busowner_password, busowner_email], (err, data) => {
    if (err) {
      return res.status(500).json({ Message: "Server Side Error" });
    }

    return res.json({ Status: "Password Reset Successfully!" });
  });
});

// Define a GET endpoint to fetch data between the specified date range
app.get('/data', (req, res) => {
  // Extract the query parameters from the request
  const fromDate = req.query.fromDate;
  const toDate = req.query.toDate;

  // SQL query to fetch data between the specified date range
  const sql = `
      SELECT * 
      FROM Transaction 
      WHERE transaction_date >= ? AND transaction_date <= ?
  `;

  // Execute the SQL query with the specified date range
  db.query(sql, [fromDate, toDate], (err, data) => {
      if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ status: 'Error', message: 'Internal server error' });
      } else {
          // Send the fetched data in the response
          res.json({ status: 'Success', data });
      }
  });
});



app.post('/register', (req, res) => {
  const {
    busowner_fname,
    busowner_lname,
    busowner_email,
    busowner_phone,
    busowner_company,
    busowner_cert,
    busowner_password,
  } = req.body;

    // Check if the email is already registered
    const checkEmailQuery = "SELECT * FROM businessowner WHERE busowner_email = ?";
    db.query(checkEmailQuery, [busowner_email], (err, data) => {
      if (err) {
        return res.status(500).json({ Message: "Server Side Error" });
      }
  
      if (data.length > 0) {
        return res.status(400).json({ Message: "Email is already registered" });
      }
  
      // Insert new user into the database
      const insertUserQuery =
        "INSERT INTO businessowner (busowner_fname, busowner_lname, busowner_email, busowner_phone, busowner_company, busowner_cert, busowner_password) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
      db.query(
        insertUserQuery,
        [busowner_fname, busowner_lname, busowner_email, busowner_phone, busowner_company, busowner_cert, busowner_password],
        (err, result) => {
          if (err) {
            return res.status(500).json({ Message: "Server Side Error" });
          }
  
          return res.json({ Status: "Registration Successful!" });
        }
      );
    });
  });

  app.post('/logout', (req, res) => {
    // Clear the token from the client (browser) by removing the cookie
    res.clearCookie('token', { httpOnly: true });
  
    // Respond with a success message or any other relevant information
    res.json({ status: 'Success', message: 'Logout successful' });
  });