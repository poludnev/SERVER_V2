export class BodyCondition {
  date: Date;
  weight: number;
  userId: string;
  bmi: number;
  height: number;

  constructor(
    date: Date,
    weight: number,
    userId: string,
    bmi?: number,
    height?: number
  ) {
    this.date = date;
    this.weight = weight;
    this.userId = userId;
    this.height = height || 0;
    this.bmi = bmi ? bmi : this.calculateBMI();
  }

  calculateBMI(): number {
    if (!this.height) return 0;
    return Number(((this.weight / this.height ** 2) * 10000).toFixed(2));
  }

  get data(): {
    date: Date;
    userId: string;
    weight: number;
    bmi: number;
    height: number;
  } {
    return {
      date: this.date,
      userId: this.userId,
      weight: this.weight,
      bmi: this.bmi,
      height: this.height
    };
  }
}

export class Excercise {
  date: Date;
  userId: string;
  title: string;
  duration: number;
  load: number;
  calories: number;

  constructor(
    date: Date,
    userId: string,
    title: string,
    duration: number,
    load: number,
    calories: number
  ) {
    this.date = date;
    this.userId = userId;
    this.title = title;
    this.duration = duration;
    this.load = load;
    this.calories = calories;
  }

  get data(): {
    date: Date;
    userId: string;
    title: string;
    duration: number;
    load: number;
    calories: number;
  } {
    return {
      date: this.date,
      userId: this.userId,
      title: this.title,
      duration: this.duration,
      load: this.load,
      calories: this.calories
    };
  }
}
