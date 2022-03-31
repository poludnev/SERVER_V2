export class Money {
  date: Date;
  userId: string;
  amount: number;
  currency: string;
  userName: string;
  description: string;
  payer: string;
  payee: string;
  balance: number;

  constructor(
    date: Date,
    userId: string,
    amount: number,
    curency: string,
    balance: number,
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
    this.balance = balance;
  }
}

export class Balance extends Money {
  type = 'balance';

  constructor(
    date: Date,
    userId: string,
    amount: number,
    currency: string,
    balance: number,
    userName: string,
    description?: string,
    payer?: string,
    payee?: string
  ) {
    super(
      date,
      userId,
      amount,
      currency,
      balance,
      userName,
      description,
      payer,
      payee
    );
  }

  get data(): {
    date: Date;
    userId: string;
    amount: number;
    currency: string;
    userName: string;
    type: string;
    balance: number;
    description: string;
    payer: string;
    payee: string;
  } {
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

export class Expense extends Money {
  category: string;
  type = 'expense';

  constructor(
    date: Date,
    userId: string,
    amount: number,
    currency: string,
    category: string,
    balance: number,
    userName?: string,
    description?: string,
    payer?: string,
    payee?: string
  ) {
    super(
      date,
      userId,
      amount,
      currency,
      balance,
      userName,
      description,
      payer,
      payee
    );
    this.category = category || 'NA';
  }

  get data(): {
    date: Date;
    userId: string;
    amount: number;
    currency: string;
    userName: string;
    category: string;
    type: string;
    balance: number;
    description: string;
    payee: string;
    payer: string;
  } {
    return {
      date: this.date,
      userId: this.userId,
      amount: this.amount,
      currency: this.currency,
      userName: this.userName,
      category: this.category,
      type: this.type,
      balance: this.balance,
      description: this.description,
      payee: this.payee,
      payer: this.payer
    };
  }
}

export class Income extends Money {
  category: string;
  type = 'income';

  constructor(
    date: Date,
    userId: string,
    amount: number,
    currency: string,
    category: string,
    balance: number,
    description: string,
    userName?: string,
    payer?: string,
    payee?: string
  ) {
    super(
      date,
      userId,
      amount,
      currency,
      balance,
      userName,
      description,
      payer,
      payee
    );
    this.category = category || 'NA';
    this.balance = balance || 0;
  }

  get data(): {
    date: Date;
    userId: string;
    amount: number;
    currency: string;
    userName: string;
    category: string;
    type: string;
    balance: number;
  } {
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
