export interface Transaction {
    trans_id: number;
    transaction_date: string;
    transaction_amount: number;
    recipient: string;
    status: string;
    notes: string;
}

export interface TransactionProps {
    transactions: Transaction[];
}