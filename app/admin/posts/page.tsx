import { AdminLayout } from "@/components/admin-layout"
import { PostsManagement } from "@/components/posts-management"

export default function AdminPostsPage() {
  return (
    <AdminLayout>
      <PostsManagement />
    </AdminLayout>
  )
}
