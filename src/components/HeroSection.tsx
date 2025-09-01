import { Button } from "@/components/ui/enhanced-button"
import { Play, Film } from "lucide-react"
import heroImage from "@/assets/hero-bg.jpg"
import prachnadLogo from "/lovable-uploads/92328d8a-a82a-4b43-95f3-de8acad42ca7.png"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-accent/20"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={prachnadLogo} 
              alt="Prachand Logo" 
              className="h-16 md:h-20 mx-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-glow">
              Your Search For Editors Stops Here!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
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