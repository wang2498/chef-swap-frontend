import { ReactNode } from "react"

export default function DashboardTemplate({
  children,
}: {
  children: ReactNode
}) {
  return (
    <section>
      <div className="text-lime-100">template123123123123</div>
      {children}
    </section>
  )
}
