"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  DollarSign,
  Zap,
  Users,
  TrendingUp } from
"lucide-react";

export default function Benefits() {
  const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service ensures your projects never wait",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Accuracy & Quality",
    description:
    "99.9% accuracy rate with rigorous quality control processes",
    color: "success"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Save up to 50% compared to in-house data entry staff",
    color: "warning"
  },
  {
    icon: Zap,
    title: "Faster Turnaround",
    description: "Quick processing times to meet tight appraisal deadlines",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Handle volume fluctuations without hiring or training",
    color: "success"
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
    "Dedicated professionals with real estate industry expertise",
    color: "warning"
  }];


  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary-100",
          icon: "text-primary-600",
          border: "border-primary-200"
        };
      case "success":
        return {
          bg: "bg-success-100",
          icon: "text-success-600",
          border: "border-success-200"
        };
      case "warning":
        return {
          bg: "bg-warning-100",
          icon: "text-warning-600",
          border: "border-warning-200"
        };
      default:
        return {
          bg: "bg-gray-100",
          icon: "text-gray-600",
          border: "border-gray-200"
        };
    }
  };

  return (
    <section
      id="benefits"
      className="section-padding bg-white"
      data-oid="j-j7v9w">

      <div className="container-custom" data-oid="-y036uu">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-oid="72hyjbl">

          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="qdksxr6">

            Why Choose ieIMPACT?
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="pkzm:ry">

            Transform your appraisal business with our professional data entry
            services. Experience the benefits that leading appraisers trust.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-oid="5agcu..">

          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-white p-8 rounded-xl shadow-lg border ${colors.border} hover:shadow-2xl transition-all duration-300 group`}
                data-oid="d5ja954">

                <div
                  className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  data-oid="nft8oe9">

                  <benefit.icon
                    className={`w-8 h-8 ${colors.icon}`}
                    data-oid="nf5gfkl" />

                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  data-oid="6lrwbiz">

                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" data-oid="shc:0r2">
                  {benefit.description}
                </p>
              </motion.div>);

          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
          data-oid="h.dsbk-">

          <div
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
            data-oid="iu0u-9n">

            <h3 className="text-2xl font-bold mb-4" data-oid="n99wdqr">
              Ready to Transform Your Business?
            </h3>
            <p
              className="text-blue-100 mb-6 max-w-2xl mx-auto"
              data-oid="yor6v2e">

              Join hundreds of appraisers who have already streamlined their
              workflow with ieIMPACT.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              data-oid="96iq:ki">

              Start Saving Time Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}