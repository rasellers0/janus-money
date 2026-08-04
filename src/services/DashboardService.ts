import { getAccountsByUserId } from "../repositories/dashboardRepository";
import { getTransactionsByUserId } from "../repositories/transactionRepository";

export async function getDashboardData(userId: string) {
    debugger;
    const transactions = await getTransactionsByUserId(userId);
    const accounts = await getAccountsByUserId(userId);
    return { transactions, accounts};
}

