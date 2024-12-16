import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function Chart({ data }) {
    return (
        <LineChart width={400} height={250} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
    );
}
