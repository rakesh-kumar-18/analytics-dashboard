export default function Table({ data }) {
    return (
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Value</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
