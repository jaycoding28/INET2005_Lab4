import SideNav from "@/app/ui/dashboard/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64">
        <SideNav />
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
