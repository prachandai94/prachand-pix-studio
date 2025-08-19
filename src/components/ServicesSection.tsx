import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Video, Scissors, Palette, Camera, Music, Zap } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "CUT",
    description: "Precise storytelling through expert editing. Every frame matters, every cut has purpose.",
    features: ["Narrative Flow", "Pacing Control", "Seamless Transitions", "Story Structure"]
  },
  {
    icon: Palette,
    title: "COLOR",
    description: "Cinematic color grading that sets the mood and enhances your visual narrative.",
    features: ["LUT Creation", "Skin Tone Matching", "Creative Looks", "HDR Workflow"]
  },
  {
    icon: Zap,
    title: "MOTION",
    description: "Dynamic motion graphics and visual effects that bring your content to life.",
    features: ["2D/3D Animation", "Logo Reveals", "Text Animation", "VFX Integration"]
  },
  {
    icon: Music,
    title: "SOUND",
    description: "Immersive audio design that completes the emotional journey of your content.",
    features: ["Audio Mixing", "Sound Design", "Music Selection", "Voice Processing"]
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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