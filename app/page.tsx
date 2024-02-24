import Image from "next/image"

import Logo from "@/assets/images/watstreet.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex justify-center min-h-screen w-screen px-4">
      <div className="w-full flex flex-col items-center max-w-screen-md">
        <nav className="w-full py-4 mb-24 flex justify-between items-center">
          <Image src={Logo} alt="Wat Street logo" className="w-14 h-14" />
          <Link href="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </nav>
        <h1 className="font-bold text-4xl text-brand">Wat Street</h1>
        <div className="text-muted-foreground mt-2">
          Waterloo's quantitative finance design team
        </div>
      </div>
    </main>
  )
}
