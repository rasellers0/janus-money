interface Transaction {
    trans_id: number;
    transaction_date: string;
    transaction_amount: number;
    recipient: string;
    status: string;
    notes: string;
}

interface TransactionRowProps {
    rowNumber: number;
    transaction: Transaction;
}

const rowStyle = "px-4 py-3";
const headerStyle = "font-semibold text-gray-700";

export function TransactionRow({rowNumber, transaction,}: TransactionRowProps) {
    return (
        <tr className="border-b border-lime-100 hover:bg-lime-50 transition-colors">
            <td className={rowStyle + " text-gray-500"}>{rowNumber}</td>
            <td className={rowStyle}>{transaction.transaction_date}</td>
            <td className={rowStyle + " text-right font-medium"}>${transaction.transaction_amount.toFixed(2)}</td>
            <td className={rowStyle}>{transaction.recipient}</td>
            <td className={rowStyle}>{transaction.status}</td>
            <td className={rowStyle}>{transaction.notes}</td>
        </tr>
    );
}

export function NullTransactions(){
    return (
        <tr>
            <td colSpan={6} className="py-8 text-center text-gray-500">
                No transactions found.
            </td>
        </tr>
    );
}

export function TransactionHead() {
    return (
        <thead className="bg-lime-100 border-b border-lime-200">
            <tr>
                <th className={rowStyle + " w-12 text-left " + headerStyle}>#</th>
                <th className={rowStyle + " text-left " + headerStyle}>Date</th>
                <th className={rowStyle + " text-right " + headerStyle}>Amount</th>
                <th className={rowStyle + " text-left " + headerStyle}>Recipient</th>
                <th className={rowStyle + " text-left " + headerStyle}>Status</th>
                <th className={rowStyle + " text-left " + headerStyle}>Notes</th>
            </tr>
        </thead>
    );
}
