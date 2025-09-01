import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, MessageCircle } from "lucide-react"

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Ready to Create Something
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's bring your vision to life. Get in touch for a free consultation and discover 
            how we can transform your content into cinematic masterpieces.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="silver" size="xl">
              View Our Portfolio
            </Button>
            <Button 
              variant="hero" 
              size="xl" 
              className="group bg-[#25D366] hover:bg-[#128C7E] text-white border-0"
              asChild
            >
              <a 
                href="https://wa.me/your-whatsapp-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Chat Here Faster
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection