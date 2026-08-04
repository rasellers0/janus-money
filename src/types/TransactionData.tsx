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

export interface Account {
    account_id: number;
    user_id: number;
    account_name: string;
    account_type: string;
    institution: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface AccountProps {
    accounts: Account[];
}

export interface DashboardData {
    transactions: TransactionProps;
    accounts: AccountProps;
}