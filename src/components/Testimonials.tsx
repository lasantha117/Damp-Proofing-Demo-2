import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner, London",
      content: "DampGuard Pro transformed our Victorian house. The rising damp was causing serious issues, but their team identified and fixed everything professionally. Five years later, still perfect!",
      rating: 5
    },
    {
      name: "James Robertson",
      role: "Property Developer",
      content: "We've used DampGuard Pro on multiple commercial projects. Their expertise, attention to detail, and warranty give us complete confidence. They're our go-to damp specialists.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Homeowner, Manchester",
      content: "Exceptional service from start to finish. The team was professional, clean, and completed the basement waterproofing on time. The lifetime warranty is incredibly reassuring.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
  
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            What Our Clients
            <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
               <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all h-full">
                <Quote className="w-10 h-10 text-amber-500/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="pt-6 border-t border-slate-700">
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
