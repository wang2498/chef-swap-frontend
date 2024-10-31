"use client"

import Link from "next/link"

import { Box, Button } from "@mui/material"

import useConnectWallet from "@/hooks/useConnectWallet"

// import Menu from
function Header() {
  const { providerSepolia } = useConnectWallet()

  const onClick = () => {
    console.log("clicked")
  }

  return (
    <Box className="flex h-40 items-center justify-between bg-slate-300">
      <div>
        <Link className="" href="/">
          Logo
        </Link>
      </div>
      {/* <Menu /> */}
      <div className="">
        <Button onClick={onClick}>connect</Button>
      </div>
    </Box>
  )
}
export default Header
