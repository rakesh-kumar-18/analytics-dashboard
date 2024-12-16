import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <Link href="/dashboard/summary">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Go to Summary
                </button>
            </Link>
            <Link href="/dashboard/history">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                    Go to History
                </button>
            </Link>
        </div>
    );
}
