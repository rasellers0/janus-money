import { styles } from "../../../styles/styles";
import { JanusTableBody } from "./JanusTableBody";
import { JanusTableHeader } from "./JanusTableHeader";

interface JanusTableProps {
    title: string;
    headers: string [];
    data: any [];
}

export function JanusTable(props: JanusTableProps){
    const {title, headers, data} = props;
    return (
            <div className={styles.card.mat}>
                <div className="p-4">
                    <h2 className={styles.typography.h2}>
                        {title}
                    </h2>
    
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <JanusTableHeader columns={headers}/>
                            <JanusTableBody rows={data} />
                        </table>
                    </div>
                </div>
            </div>
        );
}