"use client";

import Navbar from "@/components/Navbar"
import Accounts from "@/components/Accounts"

export const metadata = {
    title: 'accounts page'
}
  
export default function AccountsPage() {
    return (
        <div>
            <Navbar />
            <Accounts />
        </div>
    )
}