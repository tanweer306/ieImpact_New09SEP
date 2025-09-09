"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  Send,
  Loader2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  User,
  Building } from
"lucide-react";
import Link from "next/link";

// Form validation schema
const contactFormSchema = z.object({
  name: z.
  string().
  min(2, "Name must be at least 2 characters").
  max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.
  string().
  min(2, "Company name must be at least 2 characters").
  max(100, "Company name must be less than 100 characters"),
  message: z.
  string().
  min(10, "Message must be at least 10 characters").
  max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      console.log("Form submitted successfully:", result);
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit form. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-white"
      data-oid="0l6n5gj">

      {/* Navigation Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        data-oid="d8d3u.g">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="we6tmlw">

          <div
            className="flex justify-between items-center h-16"
            data-oid="sytwcsb">

            {/* Logo */}
            <Link href="/" className="flex items-center" data-oid="fenpknt">
              <img
                src="/ieimpact.gif"
                alt="ieIMPACT Logo"
                className="h-10 w-auto"
                data-oid="vylm2tk" />

            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              data-oid="f0e0c1g">

              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="ht23ae7">

                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="gib5j0w">

                About
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="7hu6w:z">

                How It Works
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="7.zyl1n">

                FAQs
              </Link>
              <Link
                href="/reviews"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="1igvicb">

                Reviews
              </Link>
              <Link
                href="/contact"
                className="text-primary-600 font-semibold"
                data-oid="qedzj80">

                Contact
              </Link>
              <motion.a
                href="https://secure.ieimpact.com/members/index.php"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 inline-block"
                data-oid="kd1e5ub">

                Login
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16" data-oid=".l402b-">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-20 lg:py-32"
          data-oid=":s9dvd_">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="7quvfcn">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
              data-oid="y4s-km0">

              <div className="flex justify-center mb-6" data-oid="9x0a3vb">
                <div
                  className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center"
                  data-oid="m1m4bcd">

                  <MessageCircle
                    className="w-8 h-8 text-primary-600"
                    data-oid="g9e:sku" />

                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6"
                data-oid="mvd7ape">

                Contact{" "}
                <span className="text-primary-600" data-oid="8ki_7ud">
                  Us
                </span>
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                data-oid="sxol:72">

                Ready to transform your appraisal business? Get in touch with
                our team today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-20 lg:pb-32" data-oid="cg48x90">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="vkdr57b">

            <div
              className="grid lg:grid-cols-2 gap-12 items-start"
              data-oid="cbxzguo">

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                data-oid="5umg5:y">

                <h2
                  className="text-2xl font-bold text-primary-900 mb-6"
                  data-oid="v7q5z:.">

                  Get Your Free Quote
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-oid="j0c_:se">

                  <div className="grid md:grid-cols-2 gap-4" data-oid="bsbhcri">
                    {/* Name Field */}
                    <div data-oid="v:4_5rn">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="61u7oa0">

                        Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
                        errors.name ?
                        "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent" :
                        "border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"}`
                        }
                        placeholder="Your full name"
                        data-oid="5gq.mlh" />


                      {errors.name &&
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        data-oid="i7zqpde">

                          <AlertTriangle
                          className="w-4 h-4"
                          data-oid="rqljp80" />

                          {errors.name.message}
                        </motion.p>
                      }
                    </div>

                    {/* Email Field */}
                    <div data-oid="s876bw_">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="k0i670z">

                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
                        errors.email ?
                        "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent" :
                        "border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"}`
                        }
                        placeholder="your@email.com"
                        data-oid="xu-9q9b" />


                      {errors.email &&
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        data-oid="4f9l6k8">

                          <AlertTriangle
                          className="w-4 h-4"
                          data-oid="w:uo4ea" />

                          {errors.email.message}
                        </motion.p>
                      }
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4" data-oid="fzmxj0:">
                    {/* Phone Field */}
                    <div data-oid="6i.b4db">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="w3ivg:i">

                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="(555) 123-4567"
                        data-oid="yfs-kb3" />

                    </div>

                    {/* Company Field */}
                    <div data-oid="o4614ij">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="fs:7gbh">

                        Company *
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
                        errors.company ?
                        "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent" :
                        "border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"}`
                        }
                        placeholder="Your company name"
                        data-oid="xasrxh7" />


                      {errors.company &&
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        data-oid="hiquulb">

                          <AlertTriangle
                          className="w-4 h-4"
                          data-oid="isuo2w6" />

                          {errors.company.message}
                        </motion.p>
                      }
                    </div>
                  </div>

                  {/* Message Field */}
                  <div data-oid="84y-cs-">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      data-oid="nue5l27">

                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 resize-none ${
                      errors.message ?
                      "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent" :
                      "border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"}`
                      }
                      placeholder="Tell us about your data entry needs..."
                      data-oid="kr0j4a7" />


                    <div
                      className="flex justify-between items-center mt-1"
                      data-oid="xtyvv_.">

                      {errors.message &&
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm flex items-center gap-1"
                        data-oid="ep7.n8c">

                          <AlertTriangle
                          className="w-4 h-4"
                          data-oid="1jby9bd" />

                          {errors.message.message}
                        </motion.p>
                      }
                      <span
                        className="text-sm text-gray-500 ml-auto"
                        data-oid="xu3.:ww">

                        {watch("message")?.length || 0}/1000
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    isSubmitting ?
                    "bg-gray-400 cursor-not-allowed" :
                    "bg-primary-600 hover:bg-primary-700 hover:shadow-xl text-white"}`
                    }
                    data-oid="uneqz2z">

                    {isSubmitting ?
                    <>
                        <Loader2
                        className="w-5 h-5 animate-spin"
                        data-oid="_:77xts" />

                        Sending Message...
                      </> :

                    <>
                        Send Message
                        <Send className="w-5 h-5" data-oid="1hj:nhe" />
                      </>
                    }
                  </motion.button>

                  {/* Form Status Indicator */}
                  <div className="text-center" data-oid="e9j2j9s">
                    <p className="text-sm text-gray-500" data-oid="o6xrht3">
                      We'll respond within 24 hours • 100% confidential
                    </p>
                  </div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
                data-oid="05xyfl7">

                <div data-oid="0eh5fn-">
                  <h2
                    className="text-2xl font-bold text-primary-900 mb-6"
                    data-oid="cd8ck1_">

                    Get In Touch
                  </h2>
                  <p
                    className="text-gray-600 text-lg leading-relaxed mb-8"
                    data-oid="3if280r">

                    Ready to streamline your appraisal workflow? Contact us
                    today for a free consultation and discover how ieIMPACT can
                    transform your business.
                  </p>
                </div>

                <div className="space-y-6" data-oid="xu0631d">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                    data-oid="a5-p525">

                    <div
                      className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
                      data-oid="yf2c4-n">

                      <Phone
                        className="w-6 h-6 text-primary-600"
                        data-oid="z3ywhti" />

                    </div>
                    <div data-oid=".yfl7wj">
                      <div
                        className="font-semibold text-primary-900"
                        data-oid="p68i50u">

                        Phone
                      </div>
                      <div className="text-gray-600" data-oid="0pw3o3s">
                        (555) 123-4567
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                    data-oid="03_n59r">

                    <div
                      className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center"
                      data-oid="l70kz43">

                      <Mail
                        className="w-6 h-6 text-success-600"
                        data-oid="oyh_7kt" />

                    </div>
                    <div data-oid="kr8ettc">
                      <div
                        className="font-semibold text-primary-900"
                        data-oid="t3_wecf">

                        Email
                      </div>
                      <div className="text-gray-600" data-oid="el7t0hb">
                        info@ieimpact.com
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                    data-oid="1g36ey3">

                    <div
                      className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center"
                      data-oid="m08rcyo">

                      <Clock
                        className="w-6 h-6 text-warning-600"
                        data-oid="5.t:.mj" />

                    </div>
                    <div data-oid="5auqrpe">
                      <div
                        className="font-semibold text-primary-900"
                        data-oid="om2aj_r">

                        Hours
                      </div>
                      <div className="text-gray-600" data-oid="k.bz-d-">
                        24/7 Available
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Emergency CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-r from-success-600 to-success-700 rounded-xl p-6 text-white"
                  data-oid="oaum3rs">

                  <h4 className="text-xl font-bold mb-2" data-oid="y--.h6i">
                    Need Urgent Data Entry?
                  </h4>
                  <p className="text-success-100 mb-4" data-oid="7:r9t7t">
                    Rush orders available with same-day turnaround
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-success-700 hover:text-success-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                    data-oid="hib1yta">

                    Call Now: (555) 123-4567
                    <Phone className="w-4 h-4" data-oid="baqepig" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Success Modal */}
      {showSuccessModal &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowSuccessModal(false)}
        data-oid="mskfit0">

          <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          data-oid="mpmjn9d">

            <div className="text-center" data-oid="z6-q4pa">
              {/* Success Animation */}
              <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                damping: 15,
                stiffness: 300
              }}
              className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6"
              data-oid="52-y3ah">

                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  damping: 15,
                  stiffness: 300
                }}
                data-oid="0t7dd-7">

                  <CheckCircle2
                  className="w-10 h-10 text-success-600"
                  data-oid="0ttj7ra" />

                </motion.div>
              </motion.div>

              <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-primary-900 mb-4"
              data-oid="zam7lhk">

                Message Sent Successfully!
              </motion.h3>

              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-6 leading-relaxed"
              data-oid="e0sn1in">

                Thank you for your interest in ieIMPACT! We've received your
                message and will respond within 24 hours with a customized quote
                for your data entry needs.
              </motion.p>

              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSuccessModal(false)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              data-oid="zeck7t:">

                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      }
    </div>);

}