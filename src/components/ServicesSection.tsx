import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Scissors, Zap, Sparkles } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "CUT",
    description: "Precise storytelling through expert editing with focus on ad reels and branded content. Every frame matters, every cut has purpose.",
    features: ["Ad Reels", "Branded Content", "Seamless Transitions", "Story Structure"]
  },
  {
    icon: Zap,
    title: "MOTION GRAPHICS",
    description: "Dynamic motion graphics and visual storytelling that captivate and engage your audience.",
    features: ["2D/3D Animation", "Logo Reveals", "Text Animation", "Brand Motion"]
  },
  {
    icon: Sparkles,
    title: "VFX & CGI",
    description: "High-end visual effects, cleanup work, and product animations that create polished, professional results.",
    features: ["Cleanup & Restoration", "Product Animations", "Compositing", "Digital Enhancement"]
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
            Comprehensive post production services designed to elevate your content
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-4 italic">
            Editors are abundant when you work with pixels. Brand consistency is followed, and no hassles with creative blocks.
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection