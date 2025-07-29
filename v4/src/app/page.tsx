import Hero from "@/components/Hero"
import FeatureHighlights from "@/components/FeatureHighlights"
import UseCaseScenarios from "@/components/UseCaseScenarios"
import TrustSection from "@/components/TrustSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureHighlights />
      <UseCaseScenarios />
      <TrustSection />
      <Footer />
    </main>
  )
}