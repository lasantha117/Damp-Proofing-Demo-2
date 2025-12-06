import { Award, Users, Clock, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function Stats() {
  const stats = [
    {
      icon: Award,
      value: "Award Winning",
      label: "Industry Recognition",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Users,
      value: "5000+",
      label: "Happy Clients",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      value: "25+ Years",
      label: "Expert Service",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Success Rate",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl text-white mb-1">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
