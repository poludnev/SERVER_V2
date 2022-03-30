import express from 'express';

import moneyController from '../controllers/moneyController.js';
import usersController from '../controllers/usersController.js';
import healthController from '../controllers/healthController.js';

const apiRouter = express.Router();

apiRouter.route('/v1/money/user').post(usersController.addMoneyUser);
apiRouter.route('/v1/money/users').get(usersController.getMoneyUsers);
apiRouter.route('/v1/money/users/all').get(usersController.getMoneyUsersAll);
apiRouter.route('/v1/money/users/:login').get(usersController.getMoneyUsers);
apiRouter.route('/v1/money/user/delete').post(usersController.deleteMoneyUser);

apiRouter.route('/v1/money/get/:id').get(moneyController.getMoney);
apiRouter.route('/v1/money/get').get(moneyController.getMoney);
apiRouter.route('/v1/money/expense/get').get(moneyController.getExpenses);
apiRouter.route('/v1/money/income/get').get(moneyController.getIncomes);
apiRouter.route('/v1/money/balance/get').get(moneyController.getBalances);
apiRouter.route('/v1/money/balance/get/:id').get(moneyController.getBalances);

apiRouter.route('/v1/money/update/:id').post(moneyController.updateMoney);
apiRouter
  .route('/v1/money/balance/update/:id')
  .post(moneyController.updateBalance);

apiRouter.route('/v1/money/expense/add').post(moneyController.addExpense);
apiRouter.route('/v1/money/income/add').post(moneyController.addIncome);
apiRouter.route('/v1/money/balance/add').post(moneyController.addBalance);

apiRouter
  .route('/v1/money/expense/delete')
  .post(moneyController.deleteExpenses);
apiRouter.route('/v1/money/income/delete').post(moneyController.deleteIncomes);
apiRouter.route('/v1/money/balance/delete').post(moneyController.deleteBalance);

apiRouter.route('/v1/health/body/get').get(healthController.getBody);
apiRouter.route('/v1/health/body/get/:id').get(healthController.getBody);
apiRouter.route('/v1/health/training/get').get(healthController.getTraining);
apiRouter
  .route('/v1/health/training/get/:id')
  .get(healthController.getTraining);

apiRouter.route('/v1/health/body/update/').post(healthController.updateBody);
apiRouter
  .route('/v1/health/training/update/')
  .post(healthController.updateTraining);

apiRouter.route('/v1/health/body/add').post(healthController.addBody);
apiRouter.route('/v1/health/training/add').post(healthController.addTraining);

apiRouter.route('/v1/health/body/delete').post(healthController.deleteBody);
apiRouter
  .route('/v1/health/training/delete')
  .post(healthController.deleteTraining);

export default apiRouter;
