import express from 'express';

import controllers from '../controllers';
import routes from '../lib/routes/apiRoutes.js';

const { usersController, moneyController, healthController } = controllers;
const apiRouter = express.Router();

apiRouter.route(routes.addUserRoute()).post(usersController.addMoneyUser);
apiRouter.route(routes.getUsersRoute()).get(usersController.getMoneyUsers);
apiRouter
  .route(routes.getUsersAllRoute())
  .get(usersController.getMoneyUsersAll);
apiRouter
  .route(routes.getUserByLoginRoute())
  .get(usersController.getMoneyUsers);
apiRouter.route(routes.deleteUserRoute()).post(usersController.deleteMoneyUser);

apiRouter.route(routes.getMoneyByIdRoute()).get(moneyController.getMoney);
apiRouter.route(routes.getMoneyAllRoute()).get(moneyController.getMoney);
apiRouter.route(routes.getExpensesRoute()).get(moneyController.getExpenses);
apiRouter.route(routes.getIncomeRoute()).get(moneyController.getIncomes);
apiRouter.route(routes.getBalancesRoute()).get(moneyController.getBalances);
apiRouter.route(routes.getBalancesByIdRoute()).get(moneyController.getBalances);

apiRouter
  .route(routes.updateMoneyByIdRoute())
  .post(moneyController.updateMoney);
apiRouter
  .route(routes.updateBalanceByIdRoute())
  .post(moneyController.updateBalance);

apiRouter.route(routes.addExpenseRoute()).post(moneyController.addExpense);
apiRouter.route(routes.addIncomeRoute()).post(moneyController.addIncome);
apiRouter.route(routes.addBalanceRoute()).post(moneyController.addBalance);

apiRouter
  .route(routes.deleteExpenseRoute())
  .post(moneyController.deleteExpenses);
apiRouter.route(routes.deleteIncomeRoute()).post(moneyController.deleteIncomes);
apiRouter
  .route(routes.deleteBalanceRoute())
  .post(moneyController.deleteBalance);

apiRouter.route(routes.getBodyRoute()).get(healthController.getBody);
apiRouter.route(routes.getBodyByIdRoute()).get(healthController.getBody);
apiRouter.route(routes.getTrainingRoute()).get(healthController.getTraining);
apiRouter
  .route(routes.getTrainingByIdRoute())
  .get(healthController.getTraining);

apiRouter.route(routes.updateBodyRoute()).post(healthController.updateBody);
apiRouter
  .route(routes.updateTrainingRoute())
  .post(healthController.updateTraining);

apiRouter.route(routes.addBodyRoute()).post(healthController.addBody);
apiRouter.route(routes.addTrainingRoute()).post(healthController.addTraining);

apiRouter.route(routes.deleteBodyRoute()).post(healthController.deleteBody);
apiRouter
  .route(routes.deleteTrainingRoute())
  .post(healthController.deleteTraining);

export default apiRouter;
