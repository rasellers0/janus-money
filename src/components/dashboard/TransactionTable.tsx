import { styles } from "../../styles/styles";
import type { TransactionProps } from "../../types/TransactionData";
import { NullTransactions, TransactionHead, TransactionRow, } from "./TransactionRow";

export default function TransactionTable({transactions,}: TransactionProps) {
    return (
        <div className={styles.card.mat}>
            <div className="p-4">
                <h2 className={styles.typography.h2}>
                    Recent Transactions
                </h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <TransactionHead />
                        <TransactionsBody transactions={transactions} />
                    </table>
                </div>
            </div>
        </div>
    );
}

function TransactionsBody({transactions,}: TransactionProps){
    return (
        <tbody>
            {transactions.length === 0 ? (<NullTransactions />) : (<TransactionsMap transactions={transactions} />)}
        </tbody>
    );
}

function TransactionsMap({transactions,}: TransactionProps){
    return (
        transactions.map((transaction, index) => (
            <TransactionRow key={transaction.trans_id} rowNumber={index + 1} transaction={transaction}/>
        ))
    );
}