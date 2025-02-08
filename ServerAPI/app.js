const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const actionRoutes = require('./routes/actions');
const swaggerSetup = require('./swagger/swagger');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Conectar ao Banco de Dados
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/actions', actionRoutes);

// Swagger
swaggerSetup(app);

// Iniciar Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));