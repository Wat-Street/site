import Image from "next/image"

import Logo from "@/assets/images/watstreet.png"
import { SiLinkedin, SiInstagram } from "@icons-pack/react-simple-icons"
import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex justify-center min-h-screen w-screen px-4">
      <div className="w-full flex flex-col items-center max-w-screen-lg">
        <nav className="w-full py-4 mb-32 flex justify-between items-center">
          <Image src={Logo} alt="Wat Street logo" className="w-16 h-16" />
          <div className="flex space-x-6 items-center">
            <a
              href=""
              target="_blank"
              className="duration-200 hover:text-muted-foreground"
            >
              <Mail className="w-7 h-7" />
            </a>
            <a
              href=""
              target="_blank"
              className="duration-200 hover:text-muted-foreground"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a
              href=""
              target="_blank"
              className="duration-200 hover:text-muted-foreground"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
          </div>
        </nav>
        <h1 className="font-semibold text-6xl text-brand">Wat Street</h1>
        <div className="text-lg mt-4">
          Waterloo's quantitative finance design team
        </div>
      </div>
    </main>
  )
}
