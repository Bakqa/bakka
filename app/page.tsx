import { HeroSection } from "@/components/hero-section"
import { FeaturedSections } from "@/components/featured-sections"
import { AuthProvider } from "@/lib/auth-context"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AuthProvider>
        <main>
          <HeroSection />
          <FeaturedSections />
        </main>
      </AuthProvider>
    </div>
  )
}
