import { Button } from "@/components/ui/enhanced-button"
import { Play, Film } from "lucide-react"
import heroImage from "@/assets/hero-bg.jpg"
import prachnadLogo from "/lovable-uploads/92328d8a-a82a-4b43-95f3-de8acad42ca7.png"
import ParticleAnimation from "./ParticleAnimation"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particle Animation Background */}
      <ParticleAnimation />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={prachnadLogo} 
              alt="Prachand Logo" 
              className="h-16 md:h-20 mx-auto opacity-90 hover:opacity-100 transition-opacity filter brightness-150"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-glow drop-shadow-lg">
              Your Search For Editors Stops Here!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            We craft cinematic experiences that captivate audiences. 
            From concept to final cut, we bring your stories to life with precision and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="xl" className="group">
              <Film className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Your Project
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Our Reel
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection