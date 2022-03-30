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

const apiRouter = express.Router();

apiRouter.route('/v1/money/user').post(addMoneyUser);
apiRouter.route('/v1/money/users').get(getMoneyUsers);
apiRouter.route('/v1/money/users/all').get(getMoneyUsersAll);
apiRouter.route('/v1/money/users/:login').get(getMoneyUsers);
apiRouter.route('/v1/money/user/delete').post(deleteMoneyUser);

apiRouter.route('/v1/money/get/:id').get(getMoney);
apiRouter.route('/v1/money/get').get(getMoney);
apiRouter.route('/v1/money/expense/get').get(getExpenses);
apiRouter.route('/v1/money/income/get').get(getIncomes);
apiRouter.route('/v1/money/balance/get').get(getBalances);
apiRouter.route('/v1/money/balance/get/:id').get(getBalances);

apiRouter.route('/v1/money/update/:id').post(updateMoney);
apiRouter.route('/v1/money/balance/update/:id').post(updateBalance);

apiRouter.route('/v1/money/expense/add').post(addExpense);
apiRouter.route('/v1/money/income/add').post(addIncome);
apiRouter.route('/v1/money/balance/add').post(addBalance);

apiRouter.route('/v1/money/expense/delete').post(deleteExpenses);
apiRouter.route('/v1/money/income/delete').post(deleteIncomes);
apiRouter.route('/v1/money/balance/delete').post(deleteBalance);

apiRouter.route('/v1/health/body/get').get(getBody);
apiRouter.route('/v1/health/body/get/:id').get(getBody);
apiRouter.route('/v1/health/training/get').get(getTraining);
apiRouter.route('/v1/health/training/get/:id').get(getTraining);

apiRouter.route('/v1/health/body/update/').post(updateBody);
apiRouter.route('/v1/health/training/update/').post(updateTraining);

apiRouter.route('/v1/health/body/add').post(addBody);
apiRouter.route('/v1/health/training/add').post(addTraining);

apiRouter.route('/v1/health/body/delete').post(deleteBody);
apiRouter.route('/v1/health/training/delete').post(deleteTraining);

// apiRouter.route('/:user/').get(api2);
// apiRouter.route('/:user/:test').get(api3);

export default apiRouter;
