import { fetchRevenue } from "../lib/data";

export default async function DashboardPage() {
  const revenue = await fetchRevenue();

  console.log("revenue: ", revenue)

  return (
    <h1>Dashboard Page</h1>
  );
}