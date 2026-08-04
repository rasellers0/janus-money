const rowStyle = "px-4 py-3";

interface JanusTableBodyProps{
    rows: any [];

}

export function JanusTableBody(props: JanusTableBodyProps){
    const { rows } = props
    return (
        <tbody>
            {rows.length === 0 ? (<NullTransactions />) : (<JanusTableMap rows={rows} />)}
        </tbody>
    );
}

interface rowValueProps{
    id: number;
    col: string;
    value: string;
}

interface JanusTableMapProps {
    rows: rowValueProps[]
}


function JanusTableMap(props: JanusTableMapProps){
    const {rows} = props
    return (
        rows.map((row, index) => (
            <JanusTableRow key={row.id} rowNumber={index + 1} row={row}/>
        ))
    );
}

interface JanusTableRowProps {
    rowNumber: number,
    row: {}
}

export function JanusTableRow({rowNumber, row,}: JanusTableRowProps) {
    return (
        <tr className="border-b border-lime-100 hover:bg-lime-50 transition-colors">
            <td className={rowStyle + " text-gray-500"}>{rowNumber}</td>
            {
                (Object.entries(row) as [keyof typeof row, string][])
                    .map(([key, value]) => (<td className={rowStyle}>{value}</td>))
            }
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