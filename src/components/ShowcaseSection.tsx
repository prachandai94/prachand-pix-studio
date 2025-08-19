import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Made for <span className="bg-gradient-primary bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            For the ones who rotate their phones, and the ones who don't
          </p>
          <div className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 max-w-2xl mx-auto">
            "Editors are abundant when you work with Pixels. Brand consistency is followed, and no hassles with creative blocks."
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vertical Player */}
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Vertical Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-[9/16] bg-gradient-to-b from-muted/20 to-muted/40 rounded-lg flex items-center justify-center border border-border/30">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    9:16 Showcase Reel
                  </p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">
                  Reels, Vertical Ads, Social Media Campaigns, UGC, Micro Dramas
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Horizontal Player */}
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold bg-gradient-silver bg-clip-text text-transparent">
                Horizontal Content
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video bg-gradient-to-r from-muted/20 to-muted/40 rounded-lg flex items-center justify-center border border-border/30">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-silver rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    16:9 Showcase Reel
                  </p>
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">
                  Features, Short films, High Throttle ads, Promos, Webseries
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection