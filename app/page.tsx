import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { Features } from "@/components/features"
import { TargetSegments } from "@/components/target-segments"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { WhyUs } from "@/components/why-us"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <TargetSegments />
      <Process />
      <Pricing />
      <WhyUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
