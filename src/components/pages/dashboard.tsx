import { styles } from "../../styles/styles";
import type { TransactionProps } from "../../types/TransactionData";
import AddAccountCard from "../dashboard/addAccount";
import TransactionTable from "../dashboard/TransactionTable";

export default function DashboardCard({transactions,}: TransactionProps){
    return (
        <div className={styles.card.default}>
            <div className="flex flex-wrap w-full">
                <div className="w-1/5 float-left p-6">
                    <AddAccountCard/>
                </div>
                <div className="w-full">
                    <TransactionTable transactions={transactions}/>
                </div>
            </div>
        </div>

    );
}