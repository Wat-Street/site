import Header from "@/components/clubsite/Header";
import Landing from "@/components/clubsite/Landing";
import About from "@/components/clubsite/About";
import Projects from "@/components/clubsite/Projects";
import Team from "@/components/clubsite/Team";
import Footer from "@/components/clubsite/Footer";
import MousePos from "@/components/clubsite/MousePos";

export default function HomePage() {
    return (
        <main>
            <Header />
            <div className="max-w-4xl mx-auto mt-24">
                <div>
                    <Landing />
                </div>
                <section
                    id="about"
                    className="mt-[325px] flex flex-col h-screen"
                >
                    <About />
                </section>
            </div>
            <div className="max-w-5xl mx-auto">
                <section
                    id="projects"
                    className="-mt-[150px] flex flex-col h-screen"
                >
                    <Projects />
                </section>
            </div>
            <div className="max-w-5xl mx-auto">
                <section id="team" className="scroll-m-[120px]">
                    <Team />
                </section>
            </div>
            <MousePos />

            <Footer />
        </main>
    );
}
