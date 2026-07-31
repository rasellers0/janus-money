import { query } from "../db/database";
import { userTransactionsById } from "../db/queries/transactions";

export async function getTransactionsByUserId(userId: string) {
    debugger;
    const result = await query(userTransactionsById, [userId]);

    return result.rows;
}