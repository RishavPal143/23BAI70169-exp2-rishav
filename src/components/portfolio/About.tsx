import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Briefcase, Award, Coffee } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Award, value: "10+", label: "Awards Won" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-10" />
              
              <img src="/3.png" alt="" 
              />

              {/* Floating decoration */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 -bottom-4 w-24 h-24 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I build scalable, real-world software using C++, Python, and JavaScript, applying strong fundamentals in data structures and machine learning to solve practical problems and design efficient systems.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge through 
              technical writing and mentorship.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 md:p-6 rounded-xl bg-card border border-border hover-lift"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
