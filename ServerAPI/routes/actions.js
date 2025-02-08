const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const actionController = require('../controllers/actionController');

/**
 * @swagger
 * tags:
 *   name: Actions
 *   description: Gerenciamento de ações sustentáveis
 */

/**
 * @swagger
 * /api/actions:
 *   post:
 *     summary: Criar uma nova ação sustentável
 *     tags: [Actions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - category
 *               - points
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Reciclagem de Plástico"
 *               description:
 *                 type: string
 *                 example: "Coletamos plásticos recicláveis no bairro"
 *               category:
 *                 type: string
 *                 enum: ["Reciclagem", "Energia", "Água", "Mobilidade"]
 *                 example: "Reciclagem"
 *     responses:
 *       201:
 *         description: Ação criada com sucesso
 *       400:
 *         description: Erro ao criar a ação (dados inválidos)
 */
router.post('/', authMiddleware, actionController.createAction);

/**
 * @swagger
 * /api/actions:
 *   get:
 *     summary: Listar todas as ações sustentáveis
 *     tags: [Actions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ações retornada com sucesso
 *       401:
 *         description: Não autorizado
 */
router.get('/', authMiddleware, actionController.getActions);

/**
 * @swagger
 * /api/actions/{id}:
 *   put:
 *     summary: Atualizar uma ação sustentável
 *     tags: [Actions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da ação a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: ["Reciclagem", "Energia", "Água", "Mobilidade"]
 *     responses:
 *       200:
 *         description: Ação atualizada com sucesso
 *       400:
 *         description: Erro ao atualizar a ação (dados inválidos)
 */
router.put('/:id', authMiddleware, actionController.updateAction);

/**
 * @swagger
 * /api/actions/{id}:
 *   delete:
 *     summary: Excluir uma ação sustentável
 *     tags: [Actions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da ação a ser excluída
 *     responses:
 *       200:
 *         description: Ação excluída com sucesso
 *       400:
 *         description: Erro ao excluir a ação
 */
router.delete('/:id', authMiddleware, actionController.deleteAction);

module.exports = router;
