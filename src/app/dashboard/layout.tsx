import { ReactNode } from "react"

import ThemeProvider from "./themeProvider"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main>
        <ThemeProvider value="dark">{children}</ThemeProvider>
      </main>
    </div>
  )
}
