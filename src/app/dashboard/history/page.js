import Table from "@/app/components/Table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@shadcn/ui";

const mockData = [
    { name: "Region A", value: 300 },
    { name: "Region B", value: 400 },
];

export default function HistoryPage() {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg">
                        Filter Options
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                    <DropdownMenuItem>Last Month</DropdownMenuItem>
                    <DropdownMenuItem>Custom Range</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Table data={mockData} />
        </div>
    );
}
