"use client";

import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Target,
  Zap } from
"lucide-react";

export default function ProblemSolution() {
  const problems = [
  {
    icon: Clock,
    title: "Time-Consuming Data Entry",
    description:
    "Hours spent on manual data input instead of actual appraisal work"
  },
  {
    icon: DollarSign,
    title: "High Operational Costs",
    description: "Expensive in-house staff for routine data entry tasks"
  },
  {
    icon: AlertTriangle,
    title: "Human Error Risk",
    description: "Mistakes in data entry can compromise appraisal accuracy"
  }];


  const solutions = [
  {
    icon: Target,
    title: "99.9% Accuracy Guarantee",
    description:
    "Professional data entry specialists ensure error-free reports"
  },
  {
    icon: Zap,
    title: "75% Time Savings",
    description:
    "Focus on high-value appraisal work while we handle the data"
  },
  {
    icon: CheckCircle,
    title: "50% Cost Reduction",
    description: "Eliminate overhead costs with our efficient service model"
  }];


  return (
    <section className="section-padding bg-gray-50" data-oid="staj7li">
      <div className="container-custom" data-oid="o:tyibc">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-oid="kws8sjj">

          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="n33roi2">

            The Challenge Appraisers Face
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="xzumghm">

            Data entry shouldn't be the bottleneck in your appraisal business.
            Let us handle the tedious work so you can focus on what matters
            most.
          </p>
        </motion.div>

        <div
          className="grid lg:grid-cols-2 gap-16 items-center"
          data-oid="oov3w03">

          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-oid="ut3y0xq">

            <h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left"
              data-oid="j8pwue1">

              Common Pain Points
            </h3>
            <div className="space-y-6" data-oid="4tcu:te">
              {problems.map((problem, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-red-100"
                data-oid="0d9apwc">

                  <div
                  className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center"
                  data-oid=":ya:6om">

                    <problem.icon
                    className="w-6 h-6 text-red-600"
                    data-oid="wv2ii4i" />

                  </div>
                  <div data-oid="6nf-9xd">
                    <h4
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="54im.hu">

                      {problem.title}
                    </h4>
                    <p className="text-gray-600" data-oid="01c9:3_">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-oid="j_no_uw">

            <h3
              className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left"
              data-oid="unstkz9">

              Our Solutions
            </h3>
            <div className="space-y-6" data-oid="y0i_9q5">
              {solutions.map((solution, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-success-100"
                data-oid="edl1pla">

                  <div
                  className="flex-shrink-0 w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center"
                  data-oid="5fj09z5">

                    <solution.icon
                    className="w-6 h-6 text-success-600"
                    data-oid="il0plbs" />

                  </div>
                  <div data-oid="_mcezdh">
                    <h4
                    className="font-semibold text-gray-900 mb-2"
                    data-oid="wpao1gp">

                      {solution.title}
                    </h4>
                    <p className="text-gray-600" data-oid="78kud:q">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-xl"
          data-oid="1jdhm6a">

          <div
            className="grid md:grid-cols-3 gap-8 text-center"
            data-oid="8mbs2td">

            <div data-oid="0u.jx-9">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-primary-600 mb-2"
                data-oid="g4z9bzj">

                10,000+
              </motion.div>
              <p className="text-gray-600 font-medium" data-oid="xb1m3_-">
                Appraisals Processed
              </p>
            </div>
            <div data-oid="cu78god">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-success-600 mb-2"
                data-oid="m48zw0j">

                99.9%
              </motion.div>
              <p className="text-gray-600 font-medium" data-oid="jb-7s8w">
                Accuracy Rate
              </p>
            </div>
            <div data-oid="7oaz7qt">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-warning-600 mb-2"
                data-oid="r_6z1ar">

                5+
              </motion.div>
              <p className="text-gray-600 font-medium" data-oid="njgv.8w">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}