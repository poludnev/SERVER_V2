import { getBody } from '../../controllers/healthController';
import { addExpense, getExpenses } from '../../controllers/moneyController';

export default {
  getUsersRoute(): string {
    return '/v1/money/users';
  },
  getUsersAllRoute(): string {
    return '/v1/money/users/all';
  },
  getUserByLoginRoute(): string {
    return '/v1/money/users/:login';
  },
  deleteUserRoute(): string {
    return '/v1/money/user/delete';
  },
  addUserRoute(): string {
    return '/v1/money/user';
  },
  getMoneyAllRoute(): string {
    return '/v1/money/get';
  },
  getMoneyByIdRoute(): string {
    return '/v1/money/get/:id';
  },
  getExpensesRoute(): string {
    return '/v1/money/expense/get';
  },
  getIncomeRoute(): string {
    return '/v1/money/income/get';
  },
  getBalancesRoute(): string {
    return '/v1/money/balance/get';
  },
  getBalancesByIdRoute(): string {
    return '/v1/money/balance/get/:id';
  },
  updateMoneyByIdRoute(): string {
    return '/v1/money/update/:id';
  },
  updateBalanceByIdRoute(): string {
    return '/v1/money/balance/update/:id';
  },
  addExpenseRoute(): string {
    return '/v1/money/expense/add';
  },
  addIncomeRoute(): string {
    return '/v1/money/income/add';
  },
  addBalanceRoute(): string {
    return '/v1/money/balance/add';
  },
  deleteExpenseRoute(): string {
    return '/v1/money/expense/delete';
  },
  deleteIncomeRoute(): string {
    return '/v1/money/income/delete';
  },
  deleteBalanceRoute(): string {
    return '/v1/money/balance/delete';
  },
  getBodyRoute(): string {
    return '/v1/health/body/get';
  },
  getBodyByIdRoute(): string {
    return '/v1/health/body/get/:id';
  },
  getTrainingRoute(): string {
    return '/v1/health/training/get';
  },
  getTrainingByIdRoute(): string {
    return '/v1/health/training/get/:id';
  },
  updateBodyRoute(): string {
    return '/v1/health/body/update';
  },
  updateTrainingRoute(): string {
    return '/v1/health/training/update';
  },
  addBodyRoute(): string {
    return '/v1/health/body/add';
  },
  addTrainingRoute(): string {
    return '/v1/health/training/add';
  },
  deleteBodyRoute(): string {
    return '/v1/health/body/delete';
  },
  deleteTrainingRoute(): string {
    return '/v1/health/training/delete';
  }
};
