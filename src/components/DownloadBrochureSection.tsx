import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Star } from "lucide-react"

const DownloadBrochureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Download Our 
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Portfolio Brochure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get our complete portfolio and service details in a comprehensive brochure
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-card/50 to-muted/20 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-red-glow">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
                <FileText className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Complete Portfolio & Services Guide
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our full range of post-production services, previous work samples, 
                pricing details, and everything you need to know about working with Prachand Pixels.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Portfolio Showcase</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Service Details</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Instant Download</span>
                </div>
              </div>

              <Button variant="hero" size="xl" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Brochure
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                PDF format • 5.2 MB • Updated December 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default DownloadBrochureSection