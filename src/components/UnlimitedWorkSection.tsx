import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Infinity, Clock, Shield } from "lucide-react"

const UnlimitedWorkSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Unlimited 
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Post Production
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hire a dedicated post production team for unlimited work at a fixed monthly rate
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card/50 to-muted/20 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-red-glow">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-primary rounded-full px-6 py-2 mb-6">
                  <Infinity className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">Unlimited Package</span>
                </div>
                
                <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                  ₹60,000
                  <span className="text-xl text-muted-foreground font-normal">/month</span>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Get unlimited post production work with a dedicated team
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Unlimited editing requests",
                      "All post production services",
                      "Dedicated project manager",
                      "Priority support",
                      "Fast turnaround times",
                      "Revisions included"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    Why Choose This
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Predictable monthly costs",
                      "No per-project negotiations",
                      "Consistent quality standards",
                      "Scalable team resources",
                      "Brand consistency guaranteed",
                      "No creative blocks"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button variant="hero" size="xl" className="group mb-4">
                  <Clock className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Start Unlimited Plan
                </Button>
                <p className="text-sm text-muted-foreground">
                  Cancel anytime • 7-day free trial available
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default UnlimitedWorkSection