import { Search, ClipboardList, Hammer, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Process() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Free Survey",
      description: "Our experts conduct a comprehensive property survey using advanced thermal imaging and moisture detection technology."
    },
    {
      icon: ClipboardList,
      number: "02",
      title: "Detailed Report",
      description: "Receive a thorough report with findings, recommendations, and a transparent quote with no hidden costs."
    },
    {
      icon: Hammer,
      number: "03",
      title: "Expert Installation",
      description: "Our certified team executes the work with precision, minimal disruption, and adherence to the highest standards."
    },
    {
      icon: CheckCircle2,
      number: "04",
      title: "Lifetime Warranty",
      description: "Enjoy complete peace of mind with our comprehensive lifetime warranty and ongoing support."
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Simple, Professional
            <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Four-Step Process
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From initial survey to lifetime protection - we make damp proofing effortless
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-slate-950">{step.number}</span>
                  </div>

                  <div className="inline-flex p-4 rounded-xl bg-slate-900 border border-slate-700 mb-6 group-hover:border-green-500/50 transition-all">
                    <step.icon className="w-8 h-8 text-green-500" />
                  </div>

                  <h3 className="text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
