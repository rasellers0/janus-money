
export function TransactionRow({ rowIndex, rowProps }: any) {
    debugger;
    return (
        <tr>
            <td>{rowIndex}</td>
            <td>{rowProps.transaction_date}</td>
            <td>{rowProps.transaction_amount}</td>
            <td>{rowProps.recipient}</td>
            <td>{rowProps.status}</td>
            <td>{rowProps.notes}</td>
        </tr>
    );
}

export function TransactionHead() {
    debugger;
    return (
        <thead>
            <tr>
                <th></th>
                <th>Date</th>
                <th>Amount</th>
                <th>Recipient</th>
                <th>Status</th>
                <th>Notes</th>
            </tr>
        </thead>
    );
}