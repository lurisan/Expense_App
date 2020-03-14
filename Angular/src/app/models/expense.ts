export class DailyExpense {
    day: number = 1;
    dayExpenses: Array<number> = [];
    dayTotal: number = 0;
}

export class MonthlyExpense {
    month: number = 1;
    monthlyExpense: Array<DailyExpense> = [];
    monthTotal: number = 0;
}

export class YearlyExpense {
    year: number = 2020;
    yearlyExpense: Array<MonthlyExpense> = [];
    yearTotal: number = 0;
}

export interface ExpenseSheet {
    username: string;
    expenses: Array<YearlyExpense>;
    total: number;
}
