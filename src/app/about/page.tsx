"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Award,
  Target,
  Shield,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Handshake,
  Phone,
  Mail } from
"lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-white"
      data-oid="ilhty9-">

      {/* Navigation Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        data-oid="tqcp4x7">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="7i5_vso">

          <div
            className="flex justify-between items-center h-16"
            data-oid="zb0rr:_">

            {/* Logo */}
            <Link href="/" className="flex items-center" data-oid="gdpgwd2">
              <img
                src="/ieimpact.gif"
                alt="ieIMPACT Logo"
                className="h-10 w-auto"
                data-oid="7u46.:." />

            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              data-oid="jca943v">

              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="nyefex_">

                Home
              </Link>
              <Link
                href="/about"
                className="text-primary-600 font-semibold"
                data-oid="wj-ioce">

                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="_f.4.9_">

                How It Works
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="iwyukeu">

                FAQs
              </Link>
              <Link
                href="/reviews"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="nxat_.8">

                Reviews
              </Link>
              <Link
                href="https://secure.ieimpact.com/members/index.php"
                target="_blank"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                data-oid="n.v66g6">

                Login
                <ArrowRight className="w-4 h-4" data-oid="fb2i7a7" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16" data-oid="kce8q:4">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-20 lg:py-32"
          data-oid="b-s36su">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="z5b4y7o">

            <div
              className="grid lg:grid-cols-2 gap-12 items-center"
              data-oid="4yqegs4">

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
                data-oid="367hw-y">

                <div className="space-y-6" data-oid="63q3dk5">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight"
                    data-oid="3ndde3b">

                    Transforming{" "}
                    <span className="text-primary-600" data-oid="jauz.sr">
                      Appraisal Data Entry
                    </span>{" "}
                    Since 2009
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
                    data-oid="5dnu.58">

                    We're the trusted partner for real estate appraisers
                    nationwide, delivering precision, speed, and reliability in
                    every data entry project.
                  </motion.p>
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
                  data-oid="k27ety2">

                  <div className="text-center" data-oid="la7qoea">
                    <div
                      className="text-3xl font-bold text-primary-600 mb-2"
                      data-oid="wyj185.">

                      15+
                    </div>
                    <div className="text-sm text-gray-600" data-oid="l_33rip">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center" data-oid="s08luvm">
                    <div
                      className="text-3xl font-bold text-primary-600 mb-2"
                      data-oid="ildxrk8">

                      100K+
                    </div>
                    <div className="text-sm text-gray-600" data-oid="dany0:s">
                      Reports Completed
                    </div>
                  </div>
                  <div className="text-center" data-oid="ys-jpg7">
                    <div
                      className="text-3xl font-bold text-primary-600 mb-2"
                      data-oid="q8.npqy">

                      500+
                    </div>
                    <div className="text-sm text-gray-600" data-oid="3lgcjsi">
                      Happy Clients
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  data-oid="jf60vn:">

                  <Link href="/#contact" data-oid="up14r04">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
                      data-oid="kjsgumm">

                      Get Started Today
                      <ArrowRight className="w-5 h-5" data-oid="..92ljr" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
                data-oid="7.j5.bv">

                <div className="relative z-10" data-oid="eu-0_s-">
                  <div
                    className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
                    data-oid=":dwnt:b">

                    <div className="space-y-6" data-oid="l9dpq_n">
                      <div
                        className="flex items-center justify-between"
                        data-oid="5::by_h">

                        <h3
                          className="text-lg font-semibold text-primary-900"
                          data-oid="d24w958">

                          ieIMPACT Team
                        </h3>
                        <div
                          className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium"
                          data-oid="5jdax3x">

                          Available 24/7
                        </div>
                      </div>

                      <div
                        className="grid grid-cols-2 gap-4"
                        data-oid="34tiejo">

                        <div
                          className="bg-primary-50 rounded-lg p-4 text-center"
                          data-oid="0itkyjs">

                          <Users
                            className="w-8 h-8 text-primary-600 mx-auto mb-2"
                            data-oid="wlno89i" />

                          <div
                            className="text-sm font-medium text-primary-900"
                            data-oid="v-jxf.a">

                            Expert Team
                          </div>
                        </div>
                        <div
                          className="bg-success-50 rounded-lg p-4 text-center"
                          data-oid="3qmdh09">

                          <Shield
                            className="w-8 h-8 text-success-600 mx-auto mb-2"
                            data-oid="dwsedkn" />

                          <div
                            className="text-sm font-medium text-success-900"
                            data-oid="r10t7s0">

                            Secure Process
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center gap-2 pt-4"
                        data-oid="2v3.op8">

                        <div
                          className="w-2 h-2 bg-success-500 rounded-full animate-pulse"
                          data-oid=".anuo:r">
                        </div>
                        <span
                          className="text-sm text-success-700 font-medium"
                          data-oid="dov:l05">

                          Ready to serve you
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Elements */}
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"
                  data-oid="vai_2dz">
                </div>
                <div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-success-200 rounded-full opacity-20"
                  data-oid="pvnv.qc">
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 lg:py-32 bg-white" data-oid="4lcgmbf">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="4oh5b_p">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid=":wv4uoa">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="p_hra1b">

                About ieIMPACT
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="kiwkto.">

                Your trusted partner in professional appraisal data entry
                services
              </p>
            </motion.div>

            <div
              className="grid lg:grid-cols-2 gap-12 items-center"
              data-oid="hh-9e:_">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
                data-oid="15wr:dc">

                <h3
                  className="text-2xl font-bold text-primary-900"
                  data-oid="xbfku1g">

                  Leading the Industry Since 2009
                </h3>
                <p className="text-gray-600 leading-relaxed" data-oid="xi6dr2.">
                  ieIMPACT was founded with a simple yet powerful vision: to
                  revolutionize the way real estate appraisers handle data
                  entry. What started as a small team of dedicated professionals
                  has grown into the industry's most trusted data entry service
                  provider.
                </p>
                <p className="text-gray-600 leading-relaxed" data-oid=":bgpva.">
                  Over the years, we've processed more than 100,000 appraisal
                  reports, helping appraisers across the nation save time,
                  reduce costs, and focus on what they do best – property
                  valuation and analysis.
                </p>
                <p className="text-gray-600 leading-relaxed" data-oid="20yjsmh">
                  Our commitment to excellence, combined with cutting-edge
                  technology and rigorous quality control processes, has made us
                  the go-to choice for appraisers who demand accuracy and
                  reliability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
                data-oid="52kqam7">

                <div
                  className="bg-primary-50 rounded-xl p-6 text-center"
                  data-oid="htg3uvc">

                  <Award
                    className="w-12 h-12 text-primary-600 mx-auto mb-4"
                    data-oid="2aba_lj" />

                  <h4
                    className="text-lg font-semibold text-primary-900 mb-2"
                    data-oid="d:jznkt">

                    Industry Leader
                  </h4>
                  <p className="text-sm text-gray-600" data-oid="jzpubfk">
                    Recognized as the premier data entry service in the
                    appraisal industry
                  </p>
                </div>
                <div
                  className="bg-success-50 rounded-xl p-6 text-center"
                  data-oid="w5g378d">

                  <Shield
                    className="w-12 h-12 text-success-600 mx-auto mb-4"
                    data-oid="4h8y1om" />

                  <h4
                    className="text-lg font-semibold text-success-900 mb-2"
                    data-oid="324ltla">

                    Secure & Compliant
                  </h4>
                  <p className="text-sm text-gray-600" data-oid="skgelxi">
                    TRUSTe certified with bank-level security protocols
                  </p>
                </div>
                <div
                  className="bg-warning-50 rounded-xl p-6 text-center"
                  data-oid="xj_i_-s">

                  <Clock
                    className="w-12 h-12 text-warning-600 mx-auto mb-4"
                    data-oid="om-07pe" />

                  <h4
                    className="text-lg font-semibold text-warning-900 mb-2"
                    data-oid="lu53zh4">

                    24/7 Availability
                  </h4>
                  <p className="text-sm text-gray-600" data-oid="d2z_9pz">
                    Round-the-clock service to meet your deadlines
                  </p>
                </div>
                <div
                  className="bg-purple-50 rounded-xl p-6 text-center"
                  data-oid="q3fjt2i">

                  <TrendingUp
                    className="w-12 h-12 text-purple-600 mx-auto mb-4"
                    data-oid="2h80m:0" />

                  <h4
                    className="text-lg font-semibold text-purple-900 mb-2"
                    data-oid="094--2a">

                    Proven Results
                  </h4>
                  <p className="text-sm text-gray-600" data-oid="3j4rwrq">
                    99.9% accuracy rate with 75% faster turnaround times
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 lg:py-32 bg-gray-50" data-oid="f8za3cu">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="qhol0ck">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="x9tef9-">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="y-n3.ex">

                Our Mission & Values
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="92pq2js">

                Guided by principles that drive excellence in everything we do
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white mb-16"
              data-oid="9iek:uh">

              <div className="text-center" data-oid="_9do5tw">
                <Target
                  className="w-16 h-16 mx-auto mb-6 text-primary-100"
                  data-oid="z-79n92" />

                <h3
                  className="text-2xl lg:text-3xl font-bold mb-6"
                  data-oid="44t_f.e">

                  Our Mission
                </h3>
                <p
                  className="text-xl text-primary-100 leading-relaxed max-w-4xl mx-auto"
                  data-oid="1v82gl3">

                  To empower real estate appraisers with professional, accurate,
                  and efficient data entry services that allow them to focus on
                  their core expertise while growing their business and serving
                  their clients better.
                </p>
              </div>
            </motion.div>

            {/* Core Values */}
            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="cp0pc7:">

              {[
              {
                icon: Heart,
                title: "Integrity",
                description:
                "We operate with complete honesty and transparency in all our interactions.",
                color: "text-red-600",
                bgColor: "bg-red-50"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                "We continuously improve our processes and embrace new technologies.",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50"
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                "We strive for perfection in every report and exceed client expectations.",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: Handshake,
                title: "Partnership",
                description:
                "We build lasting relationships based on trust, reliability, and mutual success.",
                color: "text-green-600",
                bgColor: "bg-green-50"
              }].
              map((value, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${value.bgColor} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300`}
                data-oid="a28ffso">

                  <value.icon
                  className={`w-12 h-12 ${value.color} mx-auto mb-4`}
                  data-oid="5.p7twx" />

                  <h4
                  className="text-lg font-semibold text-gray-900 mb-3"
                  data-oid="73bkgpq">

                    {value.title}
                  </h4>
                  <p
                  className="text-gray-600 text-sm leading-relaxed"
                  data-oid="g7avwg3">

                    {value.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Team Information Section */}
        <section className="py-20 lg:py-32 bg-white" data-oid="7.c4v.0">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="1qi4_yi">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="l5__dep">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="-u_sx7c">

                Meet Our Expert Team
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="nsdi5p6">

                Dedicated professionals with deep expertise in real estate
                appraisal data entry
              </p>
            </motion.div>

            <div
              className="grid lg:grid-cols-2 gap-12 items-center mb-16"
              data-oid="riz0cgy">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
                data-oid="0339p_y">

                <h3
                  className="text-2xl font-bold text-primary-900"
                  data-oid="z1ype.q">

                  Experienced Professionals You Can Trust
                </h3>
                <p className="text-gray-600 leading-relaxed" data-oid="kuvamov">
                  Our team consists of highly trained data entry specialists
                  with extensive experience in the real estate appraisal
                  industry. Each team member undergoes rigorous training and
                  certification to ensure they understand the nuances of
                  appraisal forms, terminology, and requirements.
                </p>
                <p className="text-gray-600 leading-relaxed" data-oid="m_xvrf.">
                  We maintain a selective hiring process, recruiting only the
                  most qualified professionals who demonstrate exceptional
                  attention to detail, accuracy, and commitment to quality. Our
                  team's expertise spans all major appraisal software platforms
                  and form types.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
                data-oid="xdvpt9o">

                <div
                  className="bg-primary-50 rounded-xl p-6 text-center"
                  data-oid="t_heh-p">

                  <div
                    className="text-3xl font-bold text-primary-600 mb-2"
                    data-oid="1kkj9p:">

                    50+
                  </div>
                  <div className="text-sm text-gray-600" data-oid="oprzrnk">
                    Expert Team Members
                  </div>
                </div>
                <div
                  className="bg-success-50 rounded-xl p-6 text-center"
                  data-oid="dhn6oj5">

                  <div
                    className="text-3xl font-bold text-success-600 mb-2"
                    data-oid="zh-.0:e">

                    5+
                  </div>
                  <div className="text-sm text-gray-600" data-oid="h1s1w:w">
                    Avg Years Experience
                  </div>
                </div>
                <div
                  className="bg-warning-50 rounded-xl p-6 text-center"
                  data-oid="-buj83d">

                  <div
                    className="text-3xl font-bold text-warning-600 mb-2"
                    data-oid="gf7balx">

                    24/7
                  </div>
                  <div className="text-sm text-gray-600" data-oid="xif1bzf">
                    Coverage Hours
                  </div>
                </div>
                <div
                  className="bg-purple-50 rounded-xl p-6 text-center"
                  data-oid="dafw:gh">

                  <div
                    className="text-3xl font-bold text-purple-600 mb-2"
                    data-oid="1.xsq7_">

                    100%
                  </div>
                  <div className="text-sm text-gray-600" data-oid="7j8bm4t">
                    US-Based Support
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Team Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-8 lg:p-12"
              data-oid="0yfd:vn">

              <h3
                className="text-2xl font-bold text-primary-900 text-center mb-8"
                data-oid="y6.:jo2">

                Our Team's Expertise
              </h3>
              <div className="grid md:grid-cols-3 gap-8" data-oid="_69xl5_">
                <div className="text-center" data-oid=".udt2_0">
                  <CheckCircle
                    className="w-12 h-12 text-success-600 mx-auto mb-4"
                    data-oid="wmliasx" />

                  <h4
                    className="text-lg font-semibold text-primary-900 mb-2"
                    data-oid="ou78bbw">

                    Appraisal Software Mastery
                  </h4>
                  <p className="text-gray-600 text-sm" data-oid="_tg849p">
                    Proficient in all major platforms including a la mode,
                    WinTOTAL, Aurora, and more
                  </p>
                </div>
                <div className="text-center" data-oid="mntsvk1">
                  <CheckCircle
                    className="w-12 h-12 text-success-600 mx-auto mb-4"
                    data-oid="_tb1mcj" />

                  <h4
                    className="text-lg font-semibold text-primary-900 mb-2"
                    data-oid="4w68jz.">

                    Quality Assurance
                  </h4>
                  <p className="text-gray-600 text-sm" data-oid="f71.2r1">
                    Multi-level review process ensures 99.9% accuracy on every
                    report
                  </p>
                </div>
                <div className="text-center" data-oid="shi4_yz">
                  <CheckCircle
                    className="w-12 h-12 text-success-600 mx-auto mb-4"
                    data-oid="xp9j9ul" />

                  <h4
                    className="text-lg font-semibold text-primary-900 mb-2"
                    data-oid="c5c9npq">

                    Industry Knowledge
                  </h4>
                  <p className="text-gray-600 text-sm" data-oid="o4p28eq">
                    Deep understanding of appraisal standards, regulations, and
                    best practices
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Years of Experience Section */}
        <section className="py-20 lg:py-32 bg-gray-50" data-oid="l_f:x0t">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="8vj.s_1">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="ckxz7jt">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="z92zigw">

                15+ Years of Excellence
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="xza4di9">

                A proven track record of success and continuous growth
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-12" data-oid="k_s7b.7">
              {[
              {
                year: "2009",
                title: "Company Founded",
                description:
                "ieIMPACT was established with a vision to revolutionize appraisal data entry services.",
                milestone: "First 100 reports completed"
              },
              {
                year: "2012",
                title: "Rapid Growth",
                description:
                "Expanded our team and capabilities to serve appraisers nationwide.",
                milestone: "10,000+ reports processed"
              },
              {
                year: "2015",
                title: "Technology Innovation",
                description:
                "Implemented advanced quality control systems and streamlined processes.",
                milestone: "99.9% accuracy rate achieved"
              },
              {
                year: "2018",
                title: "Industry Recognition",
                description:
                "Became the trusted partner for major appraisal firms across the country.",
                milestone: "50,000+ reports milestone"
              },
              {
                year: "2021",
                title: "Digital Transformation",
                description:
                "Enhanced our platform with cutting-edge technology and 24/7 availability.",
                milestone: "500+ active clients"
              },
              {
                year: "2024",
                title: "Continued Excellence",
                description:
                "Leading the industry with unmatched service quality and customer satisfaction.",
                milestone: "100,000+ reports completed"
              }].
              map((item, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                data-oid="lwe.40f">

                  <div className="flex-1" data-oid="0k:s3dv">
                    <div
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                    data-oid="g0.t46a">

                      <div
                      className="flex items-center gap-4 mb-4"
                      data-oid="4evi7w5">

                        <div
                        className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center"
                        data-oid="75ggpfu">

                          <span
                          className="text-xl font-bold text-primary-600"
                          data-oid="huzco_n">

                            {item.year}
                          </span>
                        </div>
                        <div data-oid="nc4x6fp">
                          <h3
                          className="text-xl font-bold text-primary-900"
                          data-oid="d-p8_ry">

                            {item.title}
                          </h3>
                          <p
                          className="text-primary-600 font-medium"
                          data-oid="om-r6r6">

                            {item.milestone}
                          </p>
                        </div>
                      </div>
                      <p
                      className="text-gray-600 leading-relaxed"
                      data-oid=":yj-o-i">

                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                  className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0"
                  data-oid="bv11qn:">
                </div>
                  <div className="flex-1" data-oid="a_7_2lq"></div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-32 bg-white" data-oid="06itbev">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid=".xu6p0b">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="fxeunyv">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="kmf7km4">

                Why Choose ieIMPACT?
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid=".h6zw55">

                Discover what sets us apart from the competition
              </p>
            </motion.div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-oid=":qkafom">

              {[
              {
                icon: Award,
                title: "Unmatched Accuracy",
                description:
                "99.9% accuracy rate with rigorous quality control processes and multiple review stages.",
                benefit: "Reduce errors and revisions"
              },
              {
                icon: Clock,
                title: "Lightning Fast Turnaround",
                description:
                "6-24 hour standard turnaround with rush service available for urgent projects.",
                benefit: "Meet tight deadlines"
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description:
                "TRUSTe certified with advanced encryption and secure data handling protocols.",
                benefit: "Protect sensitive information"
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                "Highly trained professionals with deep appraisal industry knowledge and experience.",
                benefit: "Get professional results"
              },
              {
                icon: Star,
                title: "24/7 Availability",
                description:
                "Round-the-clock service ensures your projects are completed when you need them.",
                benefit: "Work on your schedule"
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                description:
                "Handle any volume from single reports to large batch processing without delays.",
                benefit: "Grow your business"
              }].
              map((item, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:border-primary-200 transition-all duration-300 group"
                data-oid="8-jee8w">

                  <div
                  className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                  data-oid="1t9yufp">

                    <item.icon
                    className="w-6 h-6 text-primary-600"
                    data-oid="r:q6l56" />

                  </div>
                  <h3
                  className="text-lg font-semibold text-primary-900 mb-2"
                  data-oid="g68inyq">

                    {item.title}
                  </h3>
                  <p
                  className="text-gray-600 text-sm leading-relaxed mb-3"
                  data-oid="0tj-8o.">

                    {item.description}
                  </p>
                  <div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-success-100 rounded-full"
                  data-oid="l6jk6mg">

                    <CheckCircle
                    className="w-4 h-4 text-success-600"
                    data-oid="fu1vzy2" />

                    <span
                    className="text-xs font-medium text-success-700"
                    data-oid="y:d6xw3">

                      {item.benefit}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-primary-700"
          data-oid="s-yt5q3">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="3u3qzan">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
              data-oid="kikk-s4">

              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                data-oid="vhp62gd">

                Ready to Transform Your Appraisal Business?
              </h2>
              <p
                className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
                data-oid="846cam:">

                Join hundreds of satisfied appraisers who trust ieIMPACT with
                their data entry needs. Experience the difference professional
                service makes.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                data-oid="n_ekm68">

                <Link href="/#contact" data-oid="_4kwsyi">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-700 hover:text-primary-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
                    data-oid="016elx.">

                    Get Your Free Quote
                    <ArrowRight className="w-5 h-5" data-oid="n1pfz.g" />
                  </motion.button>
                </Link>

                <div
                  className="flex items-center gap-4 text-primary-100"
                  data-oid="mwyx:_2">

                  <div className="flex items-center gap-2" data-oid="w_.19pe">
                    <Phone className="w-5 h-5" data-oid="2xli:rr" />
                    <span data-oid="c0xsgup">408-256-0154</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="gm8i7mx">
                    <Mail className="w-5 h-5" data-oid="vub491y" />
                    <span data-oid="xx69979">info@ieimpact.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>);

}