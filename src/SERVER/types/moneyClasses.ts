export class Money {
  date: Date;
  userId: string;
  amount: number;
  currency: string;
  userName: string;
  description: string;
  payer: string;
  payee: string;

  constructor(
    date: Date,
    userId: string,
    amount: number,
    curency: string,
    userName?: string,
    description?: string,
    payer?: string,
    payee?: string
  ) {
    this.date = date;
    this.userId = userId;
    this.amount = amount;
    this.currency = curency;
    this.userName = userName || 'NA';
    this.description = description || 'NA';
    this.payer = payer || 'NA';
    this.payee = payee || 'NA';
  }
}

export class Balance extends Money {
  type = 'balance';
  balance = 0;

  constructor(
    date: Date,
    userId: string,
    amount: number,
    currency: string,
    userName: string,
    balance?: number,
    description?: string,
    payer?: string,
    payee?: string
  ) {
    super(date, userId, amount, currency, userName, description, payer, payee);
    this.balance = balance || 0;
  }

  get data(): {} {
    return {
      date: this.date,
      userId: this.userId,
      amount: this.amount,
      currency: this.currency,
      userName: this.userName,
      type: this.type,
      balance: this.balance,
      description: this.description,
      payer: this.payer,
      payee: this.payee
    };
  }
}

export class Expense {
  date: Date;
  userId: string;
  amount: number;
  currency: string;
  category: string;
  type = 'expense';
  userName?: string;
  balance?: number;
  description?: string;

  constructor(
    date: Date,
    userId: string,
    amount: number,
    curency: string,
    category: string,
    userName?: string,
    balance?: number,
    description?: string
  ) {
    this.date = date;
    this.userId = userId;
    this.amount = amount;
    this.currency = curency;
    this.userName = userName || 'NA';
    this.category = category || 'NA';
    this.balance = balance || 0;
    this.description = description || 'NA';
  }

  get data(): {} {
    return {
      date: this.date,
      userId: this.userId,
      amount: this.amount,
      currency: this.currency,
      userName: this.userName,
      category: this.category,
      type: this.type,
      balance: this.balance,
      description: this.description
    };
  }
}

export class Income {
  date: Date;
  userId: string;
  amount: number;
  currency: string;
  userName: string;
  category: string;
  type = 'income';
  balance?: number;

  constructor(
    date: Date,
    userId: string,
    amount: number,
    curency: string,
    category: string,
    userName?: string,
    balance?: number
  ) {
    this.date = date || new Date();
    this.userId = userId;
    this.amount = amount;
    this.currency = curency;
    this.userName = userName || 'NA';
    this.category = category || 'NA';
    this.balance = balance || 0;
  }

  get data(): {} {
    return {
      date: this.date,
      userId: this.userId,
      amount: this.amount,
      currency: this.currency,
      userName: this.userName,
      category: this.category,
      type: this.type,
      balance: this.balance
    };
  }
}
