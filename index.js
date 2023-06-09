// index.js
const express = require('express')

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express()


app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

// Export the Express API
module.exports = app