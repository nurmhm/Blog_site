import { AdminLayout } from "@/components/admin-layout"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">ড্যাশবোর্ড</h1>
          <p className="text-muted-foreground">আপনার ব্লগের সামগ্রিক পরিসংখ্যান ও কার্যক্রম</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </AdminLayout>
  )
}
