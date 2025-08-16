const express = require("express");
const { createServer } = require("http");
const fs = require("fs");

const app = express();
const PORT = 3000;

const students = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const avg = (grades) => grades.reduce((a, b) => a + b, 0) / grades.length;

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/active", (req, res) => {
    const active = students.filter(s => s.status === "active");
    res.json(active);
});

app.get("/students/inactive", (req, res) => {
    const inactive = students.filter(s => s.status === "inactive");
    res.json(inactive);
});

app.get("/students/top", (req, res) => {
    const topStudent = students.reduce((top, s) => {
        return avg(s.grades) > avg(top.grades) ? s : top;
    });
    res.json(topStudent);
});


app.get("/students/fail", (req, res) => {
    const failed = students.filter(s => avg(s.grades) < 60);
    res.json(failed);
});


const server = createServer(app);

server.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});
