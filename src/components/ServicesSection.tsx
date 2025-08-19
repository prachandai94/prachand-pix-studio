import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Video, Scissors, Palette, Camera, Music, Zap } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional editing for commercials, documentaries, and social media content with cinematic precision.",
    features: ["Color Grading", "Audio Mixing", "Motion Graphics", "4K/8K Support"]
  },
  {
    icon: Scissors,
    title: "Post-Production",
    description: "Complete post-production workflow from rough cuts to final delivery across all platforms.",
    features: ["Visual Effects", "Sound Design", "Subtitle Creation", "Format Optimization"]
  },
  {
    icon: Palette,
    title: "Motion Graphics",
    description: "Eye-catching animations and graphics that enhance your storytelling and brand identity.",
    features: ["2D/3D Animation", "Logo Animation", "Infographics", "Title Sequences"]
  },
  {
    icon: Camera,
    title: "Color Grading",
    description: "Professional color correction and grading to establish mood and enhance visual storytelling.",
    features: ["Cinematic Looks", "Brand Consistency", "HDR Grading", "Film Emulation"]
  },
  {
    icon: Music,
    title: "Audio Production",
    description: "Crystal-clear audio mixing, mastering, and sound design for immersive experiences.",
    features: ["Audio Cleanup", "Music Mixing", "Foley Effects", "Dolby Atmos"]
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Rush services for time-sensitive projects without compromising on quality.",
    features: ["24-hour delivery", "Real-time previews", "Priority support", "Revision cycles"]
  }
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video production services designed to elevate your content and engage your audience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-cinematic hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="glass" className="w-full group-hover:variant-hero">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection