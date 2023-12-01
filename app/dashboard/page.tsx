import { Suspense } from "react";
import { fetchLatestInvoices, fetchRevenue } from "../lib/data";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";
import { RevenueChartSkeleton } from "../ui/skeletons";

export default async function DashboardPage() {
  const latestInnvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-s2 lg:grid-cols-s4">
      </div>

      <div className="mt-6 grid grid-cols-s1 gap-6 md:grid-cols-s4 lg:grid-cols-s8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={latestInnvoices} />
      </div>
    </main>
  );
}