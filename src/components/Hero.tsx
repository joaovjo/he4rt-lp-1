import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Desenvolva seu <br />
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                potencial
              </span> na <br />
              comunidade
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Uma comunidade de desenvolvedores dedicada a ajudar iniciantes a se tornarem profissionais através de projetos, mentorias e networking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8">
                Começar agora
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5">
                Explorar projetos
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px]">
              {/* Heart Shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <motion.svg 
                    viewBox="0 0 304 263"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full origin-center opacity-10" 
                  >
                    <path d="M225.575 0.000223844C215.285 -0.0244414 205.093 1.98952 195.586 5.9258C186.08 9.86208 177.447 15.6427 170.187 22.9338L77.7161 115.273L59.3061 96.8631C56.5675 94.5235 54.3424 91.6426 52.7708 88.4016C51.1992 85.1605 50.3151 81.6295 50.1739 78.0303C50.0327 74.4311 50.6376 70.8416 51.9505 67.4874C53.2635 64.1333 55.256 61.087 57.803 58.54C60.35 55.993 63.3963 54.0005 66.7504 52.6875C70.1046 51.3746 73.6941 50.7697 77.2933 50.9109C80.8925 51.0521 84.4235 51.9362 87.6645 53.5078C90.9056 55.0794 93.7864 57.3045 96.1261 60.0431L132.946 23.2231C118.184 8.87974 98.3714 0.921279 77.7894 1.06794C57.2074 1.2146 37.5098 9.45459 22.9541 24.0069C8.39834 38.5592 0.153672 58.2549 0.00212651 78.8368C-0.149419 99.4187 7.80433 119.234 22.1442 133.999L77.532 189.413L259.002 7.94282C248.587 2.84634 237.169 0.133133 225.575 0.000223844Z" fill="#782BF1"/>
                    <path d="M296.163 44.71L225.574 115.273L207.164 96.8629L170.344 133.683L188.754 152.093L114.667 226.18L151.487 263L280.804 133.735C292.241 122.297 299.857 107.599 302.607 91.6594C305.357 75.7196 303.106 59.3194 296.163 44.71Z" fill="#782BF1"/>
                  </motion.svg>
                  <motion.svg 
                    viewBox="0 0 304 263"
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] origin-center opacity-20" 
                  >
                    <path d="M225.575 0.000223844C215.285 -0.0244414 205.093 1.98952 195.586 5.9258C186.08 9.86208 177.447 15.6427 170.187 22.9338L77.7161 115.273L59.3061 96.8631C56.5675 94.5235 54.3424 91.6426 52.7708 88.4016C51.1992 85.1605 50.3151 81.6295 50.1739 78.0303C50.0327 74.4311 50.6376 70.8416 51.9505 67.4874C53.2635 64.1333 55.256 61.087 57.803 58.54C60.35 55.993 63.3963 54.0005 66.7504 52.6875C70.1046 51.3746 73.6941 50.7697 77.2933 50.9109C80.8925 51.0521 84.4235 51.9362 87.6645 53.5078C90.9056 55.0794 93.7864 57.3045 96.1261 60.0431L132.946 23.2231C118.184 8.87974 98.3714 0.921279 77.7894 1.06794C57.2074 1.2146 37.5098 9.45459 22.9541 24.0069C8.39834 38.5592 0.153672 58.2549 0.00212651 78.8368C-0.149419 99.4187 7.80433 119.234 22.1442 133.999L77.532 189.413L259.002 7.94282C248.587 2.84634 237.169 0.133133 225.575 0.000223844Z" fill="#782BF1"/>
                    <path d="M296.163 44.71L225.574 115.273L207.164 96.8629L170.344 133.683L188.754 152.093L114.667 226.18L151.487 263L280.804 133.735C292.241 122.297 299.857 107.599 302.607 91.6594C305.357 75.7196 303.106 59.3194 296.163 44.71Z" fill="#782BF1"/>
                  </motion.svg>
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], rotate: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-16 flex items-center justify-center drop-shadow-[0_0_80px_rgba(124,58,237,0.4)] origin-center"
                  >
                    <svg viewBox="0 0 304 263" className="absolute inset-0 w-full h-full opacity-30">
                      <path d="M225.575 0.000223844C215.285 -0.0244414 205.093 1.98952 195.586 5.9258C186.08 9.86208 177.447 15.6427 170.187 22.9338L77.7161 115.273L59.3061 96.8631C56.5675 94.5235 54.3424 91.6426 52.7708 88.4016C51.1992 85.1605 50.3151 81.6295 50.1739 78.0303C50.0327 74.4311 50.6376 70.8416 51.9505 67.4874C53.2635 64.1333 55.256 61.087 57.803 58.54C60.35 55.993 63.3963 54.0005 66.7504 52.6875C70.1046 51.3746 73.6941 50.7697 77.2933 50.9109C80.8925 51.0521 84.4235 51.9362 87.6645 53.5078C90.9056 55.0794 93.7864 57.3045 96.1261 60.0431L132.946 23.2231C118.184 8.87974 98.3714 0.921279 77.7894 1.06794C57.2074 1.2146 37.5098 9.45459 22.9541 24.0069C8.39834 38.5592 0.153672 58.2549 0.00212651 78.8368C-0.149419 99.4187 7.80433 119.234 22.1442 133.999L77.532 189.413L259.002 7.94282C248.587 2.84634 237.169 0.133133 225.575 0.000223844Z" fill="#782BF1"/>
                      <path d="M296.163 44.71L225.574 115.273L207.164 96.8629L170.344 133.683L188.754 152.093L114.667 226.18L151.487 263L280.804 133.735C292.241 122.297 299.857 107.599 302.607 91.6594C305.357 75.7196 303.106 59.3194 296.163 44.71Z" fill="#782BF1"/>
                    </svg>
                    <div className="relative z-10 text-5xl sm:text-6xl font-black text-primary/30 select-none tracking-tighter -mt-8">
                      HE4RT
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* Floating Icons or Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 h-12 w-12 rounded-xl bg-card p-3 shadow-xl border border-white/10 flex items-center justify-center"
              >
                <svg className="h-full w-full" viewBox="0 0 304 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M225.575 0.000223844C215.285 -0.0244414 205.093 1.98952 195.586 5.9258C186.08 9.86208 177.447 15.6427 170.187 22.9338L77.7161 115.273L59.3061 96.8631C56.5675 94.5235 54.3424 91.6426 52.7708 88.4016C51.1992 85.1605 50.3151 81.6295 50.1739 78.0303C50.0327 74.4311 50.6376 70.8416 51.9505 67.4874C53.2635 64.1333 55.256 61.087 57.803 58.54C60.35 55.993 63.3963 54.0005 66.7504 52.6875C70.1046 51.3746 73.6941 50.7697 77.2933 50.9109C80.8925 51.0521 84.4235 51.9362 87.6645 53.5078C90.9056 55.0794 93.7864 57.3045 96.1261 60.0431L132.946 23.2231C118.184 8.87974 98.3714 0.921279 77.7894 1.06794C57.2074 1.2146 37.5098 9.45459 22.9541 24.0069C8.39834 38.5592 0.153672 58.2549 0.00212651 78.8368C-0.149419 99.4187 7.80433 119.234 22.1442 133.999L77.532 189.413L259.002 7.94282C248.587 2.84634 237.169 0.133133 225.575 0.000223844Z" fill="#782BF1"/>
                  <path d="M296.163 44.71L225.574 115.273L207.164 96.8629L170.344 133.683L188.754 152.093L114.667 226.18L151.487 263L280.804 133.735C292.241 122.297 299.857 107.599 302.607 91.6594C305.357 75.7196 303.106 59.3194 296.163 44.71Z" fill="#782BF1"/>
                </svg>
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 h-16 w-16 rounded-2xl bg-card p-4 shadow-xl border border-white/10 flex items-center justify-center"
              >
                <svg className="h-full w-full" viewBox="0 0 304 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M225.575 0.000223844C215.285 -0.0244414 205.093 1.98952 195.586 5.9258C186.08 9.86208 177.447 15.6427 170.187 22.9338L77.7161 115.273L59.3061 96.8631C56.5675 94.5235 54.3424 91.6426 52.7708 88.4016C51.1992 85.1605 50.3151 81.6295 50.1739 78.0303C50.0327 74.4311 50.6376 70.8416 51.9505 67.4874C53.2635 64.1333 55.256 61.087 57.803 58.54C60.35 55.993 63.3963 54.0005 66.7504 52.6875C70.1046 51.3746 73.6941 50.7697 77.2933 50.9109C80.8925 51.0521 84.4235 51.9362 87.6645 53.5078C90.9056 55.0794 93.7864 57.3045 96.1261 60.0431L132.946 23.2231C118.184 8.87974 98.3714 0.921279 77.7894 1.06794C57.2074 1.2146 37.5098 9.45459 22.9541 24.0069C8.39834 38.5592 0.153672 58.2549 0.00212651 78.8368C-0.149419 99.4187 7.80433 119.234 22.1442 133.999L77.532 189.413L259.002 7.94282C248.587 2.84634 237.169 0.133133 225.575 0.000223844Z" fill="#782BF1"/>
                  <path d="M296.163 44.71L225.574 115.273L207.164 96.8629L170.344 133.683L188.754 152.093L114.667 226.18L151.487 263L280.804 133.735C292.241 122.297 299.857 107.599 302.607 91.6594C305.357 75.7196 303.106 59.3194 296.163 44.71Z" fill="#782BF1"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
