"use client";

import SignupForm from "@/components/SignupForm"
import Navbar from "../../components/Navbar"

export const metadata = {
    title: 'sign up page'
}

export default function SignupPage() {
    return (
        <div>
            <Navbar />
            <SignupForm />
        </div>
    )
}
  