import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173/"],
        methods: ["POST", "GET", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "salesoptima",
});

//login form
app.post('/login', (req, res) => {
    const { busowner_email, busowner_password } = req.body;
    const sql = "SELECT * FROM users_login WHERE (busowner_email = ?) AND busowner_password = ?";
    db.query(sql, [busowner_email, busowner_email, busowner_password], (err, data) => {
        if (err) {
            return res.status(500).json({ Message: "Server Side Error" });
        }
        if (data.length === 0) {
            return res.status(401).json({ Message: "Wrong Email or Password" });
        } else {
            const token = jwt.sign({ role: "admin" }, "jwt-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Login Successfully!" });
        }
    });
});