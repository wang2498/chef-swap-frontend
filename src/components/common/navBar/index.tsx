"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import Button from "@mui/material/Button"

function NavBar() {
  const pathname = usePathname()
  return (
    <div className="flex h-40">
      <Link className={""} href="/home">
        Logo
      </Link>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        <Button variant="contained" color="primary">
          Dashboard
        </Button>
      </Link>
      <Link
        className={`link ${pathname === "/swap" ? "active" : ""}`}
        href="/swap"
      >
        <Button variant="contained" color="primary">
          Swap
        </Button>
      </Link>
    </div>
  )
}
export default NavBar
