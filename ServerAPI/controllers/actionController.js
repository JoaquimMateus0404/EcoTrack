const Action = require('../models/Action');

exports.createAction = async (req, res) => {
  const { title, description, category, points } = req.body;
  console.log("Usuário autenticado:", req.user); // Verificar usuário autenticado
  try {
    const newAction = new Action({
      title,
      description,
      category,
      points,
      userId: req.user.id,
    });
    const action = await newAction.save();
    res.json(action);
  } catch (err) {
    console.error("Erro no createAction:", err);  // <== Adicionado para ver o erro
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
  const { title, description, category, points } = req.body;
  try {
    let action = await Action.findById(req.params.id);
    if (!action) {
      return res.status(404).json({ msg: 'Action not found' });
    }
    if (action.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    action = await Action.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, category, points } },
      { new: true }
    );
    res.json(action);
  } catch (err) {
    res.status(500).send('Server error');
  }
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