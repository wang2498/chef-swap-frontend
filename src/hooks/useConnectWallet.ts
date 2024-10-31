import { useEffect, useRef } from "react"

import { ethers } from "ethers"

const INFURA_SEPOLIA_URL = "https://sepolia.infura.io/v3/3630a2e3f2a84bf997ab2d931011233b"
// const SEPOLIA_URL = "https://rpc.sepolia.org"
const USER_ADDRESS = "0x7EaEE36eDacb92974d3E14A84F132835b6dC3012"

const abiERC20 = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
]
const addressDAI = "0x5BA5Bb2ddA6770898855E40C2f2b5cD5D8E91D57" // DAI Contract
const useConnectWallet = () => {
  const providerSepolia = useRef<unknown>(null)
  const walletProvider = useRef<unknown>(null)
  const init = async () => {
    providerSepolia.current = new ethers.JsonRpcProvider(INFURA_SEPOLIA_URL)
    const balance = await providerSepolia.current.getBalance(USER_ADDRESS)
    console.log(`my balance: ${ethers.formatEther(balance)} ETH`, "------balance")

    walletProvider.current = new ethers.BrowserProvider(window.ethereum)
    const signer = await walletProvider.current.getSigner()

    const wallet = new ethers.Wallet(
      "9e8dd536c43390d86994d0c13eb1bcff9a507bdd0b2e3586aa6894b03875ded1",
      providerSepolia.current
    )
    console.log(wallet, "wallet")
    const address = await wallet.getAddress()
    console.log(`address: ${address}`)
    // console.log(`助记词：${wallet.mnemonic.phrase}`)
    console.log(`私钥： privateKey: ${wallet.privateKey}`)
    const oneGwei = ethers.getBigInt("1000000000")
    console.log(oneGwei)
    console.log(ethers.getBigInt("0x3b9aca00"))
    console.log(ethers.getBigInt(1000000000))
    console.log("js中最大安全整数：", Number.MAX_SAFE_INTEGER)
    console.log("加法:", oneGwei + 1n)
    console.log("加法:", oneGwei - 1n)
    console.log("乘法:", oneGwei * 2n)
    console.log("除法:", oneGwei / 2n)
    go()
  }

  const go = async () => {
    //地址，account是钱包里所有的账户地址
    const account = await walletProvider.current.send("eth_requestAccounts", [])
    console.log(account)
    //signer
    const signer = await walletProvider.current.getSigner(account[0])
    console.log(signer)
  }

  useEffect(() => {
    init()
  }, [])
  return {
    providerSepolia,
  }
}

export default useConnectWallet
