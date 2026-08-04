
interface JanusTableHeaerProps {
    columns: string[]
}

const rowStyle = "px-4 py-3";
const headerStyle = "font-semibold text-gray-700";

export function JanusTableHeader(props: JanusTableHeaerProps) {
    const { columns } = props;
    return (
        <thead>
            <tr className="border-b border-lime-100 hover:bg-lime-50 transition-colors">
                {
                    columns.map((column, index) => (
                        <td key={index} className={rowStyle + " text-left " + headerStyle}>{column}</td>
                    ))
                }
            </tr>
        </thead>
    );
}