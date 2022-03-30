import express from 'express';

import {
  getMoney,
  getExpenses,
  getIncomes,
  getBalances,
  updateMoney,
  updateBalance,
  addExpense,
  addIncome,
  addBalance,
  deleteExpenses,
  deleteIncomes,
  deleteBalance
} from '../controllers/moneyController.js';
import {
  addMoneyUser,
  getMoneyUsers,
  deleteMoneyUser,
  getMoneyUsersAll
} from '../controllers/userController.js';
import {
  getBody,
  getTraining,
  updateBody,
  updateTraining,
  addBody,
  addTraining,
  deleteBody,
  deleteTraining
} from '../controllers/healthController.js';

import routes from '../lib/routes/apiRoutes.js';

const apiRouter = express.Router();

apiRouter.route(routes.addUserRoute()).post(addMoneyUser);
apiRouter.route(routes.getUsersRoute()).get(getMoneyUsers);
apiRouter.route(routes.getUsersAllRoute()).get(getMoneyUsersAll);
apiRouter.route(routes.getUserByLoginRoute()).get(getMoneyUsers);
apiRouter.route(routes.deleteUserRoute()).post(deleteMoneyUser);

apiRouter.route(routes.getMoneyByIdRoute()).get(getMoney);
apiRouter.route(routes.getMoneyAllRoute()).get(getMoney);
apiRouter.route(routes.getExpensesRoute()).get(getExpenses);
apiRouter.route(routes.getIncomeRoute()).get(getIncomes);
apiRouter.route(routes.getBalancesRoute()).get(getBalances);
apiRouter.route(routes.getBalancesByIdRoute()).get(getBalances);

apiRouter.route(routes.updateMoneyByIdRoute()).post(updateMoney);
apiRouter.route(routes.updateBalanceByIdRoute()).post(updateBalance);

apiRouter.route(routes.addExpenseRoute()).post(addExpense);
apiRouter.route(routes.addIncomeRoute()).post(addIncome);
apiRouter.route(routes.addBalanceRoute()).post(addBalance);

apiRouter.route(routes.deleteExpenseRoute()).post(deleteExpenses);
apiRouter.route(routes.deleteIncomeRoute()).post(deleteIncomes);
apiRouter.route(routes.deleteBalanceRoute()).post(deleteBalance);

apiRouter.route(routes.getBodyRoute()).get(getBody);
apiRouter.route(routes.getBodyByIdRoute()).get(getBody);
apiRouter.route(routes.getTrainingRoute()).get(getTraining);
apiRouter.route(routes.getTrainingByIdRoute()).get(getTraining);

apiRouter.route(routes.updateBodyRoute()).post(updateBody);
apiRouter.route(routes.updateTrainingRoute()).post(updateTraining);

apiRouter.route(routes.addBodyRoute()).post(addBody);
apiRouter.route(routes.addTrainingRoute()).post(addTraining);

apiRouter.route(routes.deleteBodyRoute()).post(deleteBody);
apiRouter.route(routes.deleteTrainingRoute()).post(deleteTraining);

export default apiRouter;
