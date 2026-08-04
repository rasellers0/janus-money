import { query } from "../db/database";
import { addAccount, userAccountsById } from "../db/queries/accounts";

export async function getAccountsByUserId(userId: string) {
    const result = await query(userAccountsById, [userId]);

    return result.rows;
}

export async function addUserAccount(userId: string, accountName: string, accountType: string, institution: string) {
    await query(addAccount, [userId, accountName, accountType, institution]);
}