import { Shield, Droplets, Home, Building2, Hammer, Microscope } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Damp Proof Course",
      description: "Advanced chemical and physical damp proof courses to prevent rising damp and protect your property's structural integrity.",
      features: ["Chemical injection", "Physical membrane", "Lifetime warranty"]
    },
    {
      icon: Droplets,
      title: "Basement Waterproofing",
      description: "Complete basement tanking and waterproofing solutions using cutting-edge materials and proven techniques.",
      features: ["Type A, B & C systems", "Sump pump installation", "Ventilation solutions"]
    },
    {
      icon: Home,
      title: "Condensation Control",
      description: "Eliminate condensation issues with our advanced ventilation and insulation systems tailored to your property.",
      features: ["Positive ventilation", "Heat recovery", "Thermal imaging"]
    },
    {
      icon: Building2,
      title: "Timber Treatment",
      description: "Professional treatment for wet and dry rot, woodworm, and timber preservation with guaranteed protection.",
      features: ["Rot removal", "Woodworm treatment", "Timber preservation"]
    },
    {
      icon: Hammer,
      title: "Wall Replastering",
      description: "Expert replastering services following damp treatment, using salt-resistant and breathable materials.",
      features: ["Salt-resistant render", "Breathable plasters", "Perfect finish"]
    },
    {
      icon: Microscope,
      title: "Property Surveys",
      description: "Comprehensive damp surveys using thermal imaging and moisture meters to identify all issues accurately.",
      features: ["Thermal imaging", "Moisture analysis", "Detailed reports"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
    
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Premium Damp Proofing
            <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive protection services delivered by certified professionals using industry-leading technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-green-500/50 transition-all">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 mb-6">
                  <service.icon className="w-8 h-8 text-slate-950" />
                </div>
                
                <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
