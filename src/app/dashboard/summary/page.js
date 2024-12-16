import Card from "../../../components/Card";
import Chart from "../../../components/Chart";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@shadcn/ui";

const mockData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
];

export default function SummaryPage() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card title="User Growth" value="5,000" />
                <Card title="Revenue" value="$12,000" />
                <Card title="Engagement" value="1,200" />
            </div>
            <Tabs defaultValue="daily">
                <TabsList>
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
                <TabsContent value="daily">
                    <Chart data={mockData} />
                </TabsContent>
                <TabsContent value="weekly">
                    <Chart data={mockData} />
                </TabsContent>
                <TabsContent value="monthly">
                    <Chart data={mockData} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
