"use client";

import LoginForm from "@/components/LoginForm"
import Navbar from "../../components/Navbar"

export const metadata = {
  title: 'login page'
}

export default function LoginPage() {
  return (
    <div>
        <Navbar />
        <LoginForm />
    </div>
  )
}
