import { styles } from "../../styles/styles";
import type { AccountProps, TransactionProps } from "../../types/TransactionData";
import { AddAccountModal } from "../dashboard/addAccount";
import { useEffect, useState } from "react";
import { JanusButton } from "../forms/JanusButton";
import { JanusTable } from "../forms/Table/JanusTable";

export default function DashboardCard({ transactions }: TransactionProps) {
    const [showAddAccountModal, setShowAddAccountModal] = useState(false);
    const columnNames = ['#', 'Date', 'Amount', 'Recipient', 'Status', 'Notes']

    const handleAddAccount = () => {
        console.log("dashboard.tsx, in handleAddAccount");
        setShowAddAccountModal(true);
    };

    useEffect(() => {console.log("showAddAccountModal =", showAddAccountModal);}, [showAddAccountModal]);

    return (
        <>
            <div className={styles.card.default}>
                <div className="flex flex-wrap w-full">
                    <div className="w-3/5 p-6 flex">
                        <div className="w-1/4">
                            <JanusButton variant="default" onClick={handleAddAccount} >
                                    <h1 className="text-center">Add Account</h1>
                            </JanusButton>
                        </div>
                        <div className="w-1/3">
                            <JanusButton variant="default" href="/accountsList" >
                                    <h1 className="text-center">See All Accounts</h1>
                            </JanusButton>
                        </div>
                    </div>

                    <div className="w-full">
                        <JanusTable title="Recent Transactions" headers={columnNames} data={transactions} />
                    </div>
                </div>
            </div>

            <AddAccountModal open={showAddAccountModal} onClose={() => setShowAddAccountModal(false)}/>
        </>
    );
}