const Action = require('../models/Action');
const User = require("../models/User"); 

exports.createAction = async (req, res) => {
  const { title, description, category } = req.body;
  
  try {
    // Definir os pontos automaticamente com base na categoria
    const pointsByCategory = {
      "Reciclagem": 10,
      "Energia": 15,
      "Água": 12,
      "Mobilidade": 20
    };

    const points = pointsByCategory[category] || 5; // Caso a categoria não esteja definida, atribui 5 pontos

    // Criar a ação com os pontos gerados automaticamente
    const newAction = new Action({
      title,
      description,
      category,
      points,
      userId: req.user.id,
    });

    const action = await newAction.save();

    // Atualizar os pontos do usuário
    await User.findByIdAndUpdate(req.user.id, { $inc: { points: points } });

    res.json(action);
  } catch (err) {
    console.error("Erro no createAction:", err);
    res.status(500).send('Server error');
  }
};




exports.getActions = async (req, res) => {
  try {
    const actions = await Action.find({ userId: req.user.id });
    res.json(actions);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateAction = async (req, res) => {
  const { title, description, category } = req.body;

  try {
    let action = await Action.findById(req.params.id);
    if (!action) {
      return res.status(404).json({ msg: 'Action not found' });
    }

    if (action.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Verifica se a categoria foi alterada
    let newPoints = action.points; // Mantém os pontos atuais por padrão
    if (category && category !== action.category) {
      newPoints = calculatePoints(category); // Define os novos pontos com base na categoria
    }

    // Atualiza a ação com os novos valores
    action = await Action.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, category, points: newPoints } },
      { new: true }
    );

    res.json(action);
  } catch (err) {
    console.error("Erro no updateAction:", err);
    res.status(500).send('Server error');
  }
};

// Função para definir pontos com base na categoria
const calculatePoints = (category) => {
  const categoryPoints = {
    "Reciclagem": 10,
    "Energia": 15,
    "Água": 12,
    "Mobilidade": 20
  };

  return categoryPoints[category] || 5; // Caso a categoria não esteja definida, atribui 5 pontos
};


exports.deleteAction = async (req, res) => {
  try {
    let action = await Action.findById(req.params.id);
    if (!action) {
      return res.status(404).json({ msg: 'Action not found' });
    }
    if (action.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await Action.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Action removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};