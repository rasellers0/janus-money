import { getTransactionsByUserId } from "../repositories/transactionRepository";

export async function getDashboardData(userId: string) {
    debugger;
    const transactions = await getTransactionsByUserId(userId);
    return { transactions, };
}