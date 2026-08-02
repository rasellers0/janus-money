import { styles } from "../../styles/styles";
import type { TransactionProps } from "../../types/TransactionData";
import AddAccountCard, { AddAccountModal } from "../dashboard/addAccount";
import TransactionTable from "../dashboard/TransactionTable";
import { useState } from "react";

export default function DashboardCard({ transactions }: TransactionProps) {
    const [showAddAccountModal, setShowAddAccountModal] = useState(false);

    return (
        <>
            <div className={styles.card.default}>
                <div className="flex flex-wrap w-full">
                    <div className="w-1/5 p-6">
                        <AddAccountCard onClick={() => setShowAddAccountModal(true)}/>
                    </div>

                    <div className="w-full">
                        <TransactionTable transactions={transactions} />
                    </div>
                </div>
            </div>

            <AddAccountModal open={showAddAccountModal} onClose={() => setShowAddAccountModal(false)}/>
        </>
    );
}