import { useEffect, useState } from "react";
import { query } from "../../db/database";
import { TransactionRow,  TransactionHead } from "./TransactionRow";
import { userTransactionsById } from "../../db/queries/query";
import "../styles/global.css";
import { styles } from "../styles/styles.tsx"



async function loadTransactionsFromDatabase(userId:any){
    const result = await query(userTransactionsById, [userId]);
    const transactions = result.rows;
    return transactions;
}

export async function TransactionTable() {
    const [userData, setUserData] = useState(null);
    debugger;
    useEffect(() => {
        setUserData(window.history.state?.user);
    }, []);

    let transactions:any = await loadTransactionsFromDatabase(userData);
    return (
        <table className="table table-auto">
            <TransactionHead />
            <tbody>
                {transactions.map((row:any, rowIndex:any) => (
                    <TransactionRow rowIndex={rowIndex} rowProps={row}/>
                ))}
            </tbody>
        </table>
    );
}