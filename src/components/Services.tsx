"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Home,
  Search,
  PenTool,
  Database,
  Settings } from
"lucide-react";

export default function Services() {
  const dataTypes = [
  {
    icon: FileText,
    title: "Inspection Sheets",
    description:
    "Complete property inspection data entry with detailed accuracy"
  },
  {
    icon: Home,
    title: "Subject Information",
    description: "Comprehensive property details and characteristics"
  },
  {
    icon: Search,
    title: "Comparable Sales",
    description: "Market analysis and comparable property data"
  },
  {
    icon: Database,
    title: "MLS Listings",
    description: "Multiple listing service data extraction and formatting"
  },
  {
    icon: PenTool,
    title: "Property Sketches",
    description: "Digital conversion of hand-drawn property sketches"
  },
  {
    icon: Settings,
    title: "Custom Reports",
    description: "Tailored data entry for specialized appraisal needs"
  }];


  const software = [
  "a la mode",
  "WinTOTAL",
  "Aurora",
  "TOTAL 2013",
  "ACI Reports",
  "SFREP",
  "AppraiseIT",
  "ClickFORMS"];


  return (
    <section
      id="services"
      className="section-padding bg-white"
      data-oid="xzn:j:w">

      <div className="container-custom" data-oid="1swwzaa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-oid="1zlmnns">

          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-oid="2vxnrgi">

            Comprehensive Data Entry Services
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="uw3._sj">

            We handle all types of appraisal data entry with precision and
            speed, compatible with all major appraisal software platforms.
          </p>
        </motion.div>

        {/* Data Types */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          data-oid="16kvtse">

          {dataTypes.map((service, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            data-oid="zgm9m-d">

              <div
              className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4"
              data-oid="c4p72i3">

                <service.icon
                className="w-6 h-6 text-primary-600"
                data-oid="df5hqz7" />

              </div>
              <h3
              className="text-xl font-semibold text-gray-900 mb-3"
              data-oid="e2sovdu">

                {service.title}
              </h3>
              <p className="text-gray-600" data-oid="zbr2y5-">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Software Compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8"
          data-oid="ao8s88c">

          <div className="text-center mb-8" data-oid="lhbtyah">
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              data-oid="fc9-veo">

              Compatible with All Major Software
            </h3>
            <p className="text-gray-600" data-oid="uw5od8c">
              Our team is experienced with all leading appraisal software
              platforms
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-oid="r_n25um">

            {software.map((soft, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center font-medium text-gray-700 hover:shadow-md transition-all duration-200"
              data-oid="8ueu7y6">

                {soft}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}