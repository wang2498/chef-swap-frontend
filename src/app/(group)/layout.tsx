import Link from "next/link"

export const dynamic = "force-dynamic"
export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <nav className="mb-6 flex items-center justify-center gap-10 text-orange-600">
        <Link href="/page1">page1</Link>
        <Link href="/page2">page2</Link>
        <a href="/page1">About</a>
        <a href="/page2">Settings</a>
      </nav>
      {children}
    </section>
  )
}
