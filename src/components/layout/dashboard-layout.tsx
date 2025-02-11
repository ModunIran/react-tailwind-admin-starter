export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-auto h-full text-black flex-grow overflow-hidden">
      <main className="h-full overflow-y-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
