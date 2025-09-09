"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Users,
  Clock,
  Shield,
  DollarSign,
  Zap,
  Award,
  Phone,
  Mail,
  Play,
  X,
  Star,
  Building,
  MapPin,
  PenTool,
  Database,
  BarChart3,
  Target,
  MessageSquare,
  CreditCard,
  Smartphone,
  Lock,
  TrendingUp } from
"lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const [showVideo, setShowVideo] = useState(false);

  const workflowSteps = [
  {
    step: "01",
    title: "Appraiser does the field inspection",
    description:
    "You conduct your property inspection as usual, gathering all necessary data and documentation.",
    icon: Building,
    color: "bg-blue-500"
  },
  {
    step: "02",
    title: "Appraiser prepares and sends data",
    description:
    "Compile and send us all the collected data through our secure online system.",
    icon: FileText,
    color: "bg-green-500"
  },
  {
    step: "03",
    title: "We enter all the data provided",
    description:
    "Our expert team processes and enters all your data with 99.9% accuracy within 6-24 hours.",
    icon: Users,
    color: "bg-purple-500"
  },
  {
    step: "04",
    title: "Appraiser analyzes and signs report",
    description:
    "Receive your completed report, review the analysis, and sign off on the final valuation.",
    icon: CheckCircle,
    color: "bg-orange-500"
  }];


  const whatAppraisersProvide = [
  {
    title: "Cloned template file",
    description: "Your appraisal software template ready for data entry",
    icon: FileText
  },
  {
    title: "MLS of subject property and comps",
    description:
    "Multiple Listing Service data for the subject and comparable properties",
    icon: Database
  },
  {
    title: "Public/tax records",
    description: "Records from NDC, RealQuest, or County Assessor's website",
    icon: BarChart3
  },
  {
    title: "Home inspection sheet",
    description: "Detailed property inspection documentation",
    icon: CheckCircle
  },
  {
    title: "Rough draft sketch",
    description:
    "Property layout sketch (we'll create the final version FREE)",
    icon: PenTool
  },
  {
    title: "1004MC data",
    description: "Market conditions addendum information",
    icon: TrendingUp
  },
  {
    title: "Relevant data",
    description: "Contract details, PUD information, or other pertinent data",
    icon: Target
  }];


  const whatAppraisersReceive = [
  {
    title: "Pre-filled subject and comps data",
    description:
    "All property and comparable data accurately entered and formatted",
    icon: Database
  },
  {
    title: "Almost completed report file",
    description:
    "Report ready for your analysis, adjustments, and final valuation",
    icon: FileText
  }];


  const keyFeatures = [
  {
    title: "24/7 availability with 6-hour rush service",
    description:
    "Round-the-clock service with expedited options for urgent projects",
    icon: Clock,
    checked: true
  },
  {
    title: "No extra fees or setup charges",
    description: "Transparent pricing with no hidden costs or setup fees",
    icon: DollarSign,
    checked: true
  },
  {
    title: "FREE sketch service",
    description:
    "Professional property sketches included at no additional cost",
    icon: PenTool,
    checked: true
  },
  {
    title: "Monthly billing options",
    description: "Flexible payment terms with monthly billing available",
    icon: CreditCard,
    checked: true
  },
  {
    title: "SMS alerts and replies",
    description: "Text message notifications and quick communication via SMS",
    icon: Smartphone,
    checked: true
  },
  {
    title: "6-24 hour turnaround",
    description: "Fast, reliable delivery within our guaranteed timeframe",
    icon: Zap,
    checked: true
  },
  {
    title: "Easy online system",
    description: "User-friendly platform for seamless project management",
    icon: Target,
    checked: true
  },
  {
    title: "Privacy guaranteed",
    description: "TRUSTe & BBB certified with bank-level security protocols",
    icon: Shield,
    checked: true
  },
  {
    title: "100% satisfaction guarantee",
    description:
    "Your complete satisfaction is guaranteed or your money back",
    icon: Award,
    checked: true
  },
  {
    title: "US-based customer support",
    description: "Professional support team based in the United States",
    icon: Users,
    checked: true
  },
  {
    title: "$45 account credit",
    description: "New customers receive $45 in account credit to get started",
    icon: Star,
    checked: true
  }];


  const pricingOptions = [
  {
    duration: "24 Hours ETA",
    price: "$12.99",
    description: "Standard turnaround time for most projects"
  },
  {
    duration: "12 Hours ETA",
    price: "$15.49",
    description: "Expedited service for faster delivery"
  },
  {
    duration: "6 Hours RUSH",
    price: "+$1.99 extra",
    description: "Rush service for urgent projects"
  }];


  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-white"
      data-oid="ms1u:4o">

      {/* Navigation Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        data-oid=".7dfqrw">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="9nu-2d-">

          <div
            className="flex justify-between items-center h-16"
            data-oid="3cl-sn6">

            {/* Logo */}
            <Link href="/" className="flex items-center" data-oid="cz1p4.t">
              <img
                src="/ieimpact.gif"
                alt="ieIMPACT Logo"
                className="h-10 w-auto"
                data-oid="u_rtmvx" />

            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              data-oid="1nx-w-g">

              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="x34ctej">

                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="omehn_2">

                About
              </Link>
              <Link
                href="/how-it-works"
                className="text-primary-600 font-semibold"
                data-oid="r9expgf">

                How It Works
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="hz4r0.f">

                FAQs
              </Link>
              <Link
                href="/reviews"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="ud.y10q">

                Reviews
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="9qzjik0">

                Contact
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                data-oid="27bjvc:">

                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16" data-oid="3kf._:f">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-20 lg:py-32"
          data-oid="v4:qtai">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="rk1v8:b">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
              data-oid=".62xvmn">

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6"
                data-oid="fgf3kdh">

                How It{" "}
                <span className="text-primary-600" data-oid="8o6yovo">
                  Works
                </span>
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8"
                data-oid=":n4s:87">

                24/7 Appraisal Data Entry Service for Real Estate Appraisers
              </p>
              <p
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                data-oid="yjn9-:7">

                No long-term contracts, no sign-up fees, no set up fees, no
                termination fees, no hidden fees.
              </p>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
              data-oid="br6o:ai">

              <div className="text-center mb-6" data-oid="bk32vmr">
                <h2
                  className="text-2xl font-bold text-primary-900 mb-4"
                  data-oid="11z6_fm">

                  ieIMPACT Appraisal Data Entry Service - 300K+ Reports
                  Completed
                </h2>
                <p className="text-gray-600" data-oid="uyut5zy">
                  Watch our overview video to see how we've helped thousands of
                  appraisers streamline their workflow
                </p>
              </div>

              <div
                className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto"
                data-oid="ekohk4l">

                {!showVideo ?
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700"
                  data-oid="mhkwr3y">

                    <button
                    onClick={() => setShowVideo(true)}
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full transition-all duration-300 group"
                    data-oid="ngp2m4c">

                      <Play
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      data-oid="g9hp-vp" />

                      <span className="font-semibold" data-oid="2k3p86s">
                        Watch Video
                      </span>
                    </button>
                    <div
                    className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
                    data-oid="2ci_-rc">

                      3:45
                    </div>
                  </div> :

                <div className="relative w-full h-full" data-oid="4q:2l5w">
                    <iframe
                    src="https://www.youtube.com/embed/UysiLR3g8w4?autoplay=1"
                    title="ieIMPACT Appraisal Data Entry Service"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-oid="uig8usq" />


                    <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                    data-oid="xnuy_ng">

                      <X className="w-5 h-5" data-oid="3-9s7kq" />
                    </button>
                  </div>
                }
              </div>
            </motion.div>

            {/* Get Started CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
              data-oid="5eorb3s">

              <div
                className="bg-gradient-to-r from-success-600 to-success-700 rounded-2xl p-8 text-white max-w-2xl mx-auto"
                data-oid="2vbj-3h">

                <h3 className="text-2xl font-bold mb-4" data-oid="zukkl:o">
                  Get $45 Account Credit
                </h3>
                <p className="text-success-100 mb-6" data-oid="-b-6y0r">
                  (Offer Expires Aug 24, 2025)
                </p>
                <Link
                  href="https://secure.ieimpact.com/members/register.php"
                  target="_blank"
                  data-oid="mypcb_w">

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-success-700 hover:text-success-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg"
                    data-oid="obkqhdo">

                    Start Free Trial
                    <ArrowRight className="w-5 h-5" data-oid="pvd72b6" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Simple Process Overview */}
        <section className="py-20 lg:py-32 bg-white" data-oid="d0q91wx">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="8evb3dx">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="4q8yn_v">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="v43hw90">

                Simple Process
              </h2>
              <p
                className="text-xl text-gray-600 max-w-4xl mx-auto"
                data-oid="jagqgak">

                <strong data-oid="nxskdy.">
                  You send the data to be entered and get the reports DONE
                  within a few hours!
                </strong>
              </p>
              <p className="text-lg text-gray-600 mt-4" data-oid="5:9dsc5">
                We support a la mode WinTOTAL, Aurora, TOTAL, ACI, SFREP
                AppraiseIT, and Bradford's ClickFORMS.
              </p>
            </motion.div>
          </div>
        </section>

        {/* New Workflow Section */}
        <section className="py-20 lg:py-32 bg-gray-50" data-oid="uqnl73e">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="fc639wb">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="5sc12yk">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="j2:ojxy">

                New Workflow
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="5mjzfsh">

                Our streamlined 4-step process makes appraisal data entry simple
                and efficient
              </p>
            </motion.div>

            <div className="space-y-12" data-oid="q_d3wjh">
              {workflowSteps.map((step, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                data-oid="b_y0p:8">

                  <div className="flex-1" data-oid="xb.16o:">
                    <div
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    data-oid="r3co.uk">

                      <div
                      className="flex items-center gap-4 mb-4"
                      data-oid="6g7daly">

                        <div
                        className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center`}
                        data-oid="znc-et7">

                          <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="l2.lr26" />

                        </div>
                        <div
                        className="text-4xl font-bold text-primary-600"
                        data-oid="enx64br">

                          STEP {step.step}
                        </div>
                      </div>
                      <h3
                      className="text-xl font-bold text-primary-900 mb-3"
                      data-oid="we2ji_b">

                        {step.title}
                      </h3>
                      <p
                      className="text-gray-600 leading-relaxed"
                      data-oid="i797f-v">

                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div
                  className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0"
                  data-oid="1-8e8qh">
                </div>
                  <div className="flex-1" data-oid="-5es8ab"></div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* What Appraisers Send Section */}
        <section className="py-20 lg:py-32 bg-white" data-oid="ytzpahm">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="d.8nc1k">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="-zkl1j2">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="urocq-n">

                What Appraisers Send Us
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid=".0em.df">

                Here's what you need to provide for us to complete your
                appraisal data entry
              </p>
            </motion.div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-oid="9-cmo8t">

              {whatAppraisersProvide.map((item, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-all duration-300"
                data-oid="u:4w73.">

                  <div
                  className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4"
                  data-oid="mexjyui">

                    <item.icon
                    className="w-6 h-6 text-primary-600"
                    data-oid="m_koo.6" />

                  </div>
                  <h3
                  className="text-lg font-semibold text-primary-900 mb-2"
                  data-oid=".gpa.lg">

                    {index + 1}. {item.title}
                  </h3>
                  <p
                  className="text-gray-600 text-sm leading-relaxed"
                  data-oid="4er-71w">

                    {item.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* What Appraisers Get Back Section */}
        <section className="py-20 lg:py-32 bg-gray-50" data-oid="9-1bvxp">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="pfk55p_">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="u35win:">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="arduic8">

                What Appraisers Get Back From Us
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="31sca_p">

                Receive professionally completed reports ready for your final
                analysis
              </p>
            </motion.div>

            <div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              data-oid="krwue0_">

              {whatAppraisersReceive.map((item, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                data-oid="_:wq3eo">

                  <div
                  className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mb-6"
                  data-oid="bubo3ac">

                    <item.icon
                    className="w-8 h-8 text-success-600"
                    data-oid="iu6i:b_" />

                  </div>
                  <h3
                  className="text-xl font-bold text-primary-900 mb-4"
                  data-oid="rr69i36">

                    {item.title}
                  </h3>
                  <p
                  className="text-gray-600 leading-relaxed"
                  data-oid="z46_97d">

                    {item.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-32 bg-white" data-oid="411-z.r">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="w88xmoa">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="mo3ot.w">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="73zxt-3">

                Price Per Order
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="b05j9x0">

                Transparent pricing for any appraisal report (UAD URAR 1004,
                1025, 1073, 2055, or 2090)
              </p>
            </motion.div>

            <div
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              data-oid="20k2f:p">

              {pricingOptions.map((option, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                index === 1 ?
                "border-primary-200 ring-2 ring-primary-100" :
                "border-gray-100"}`
                }
                data-oid="kx3y7g4">

                  {index === 1 &&
                <div
                  className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-4"
                  data-oid="e95ciqi">

                      Most Popular
                    </div>
                }
                  <div className="text-center" data-oid="f0cliav">
                    <div
                    className="text-4xl font-bold text-primary-600 mb-2"
                    data-oid="xuf0uel">

                      {option.price}
                    </div>
                    <div
                    className="text-lg font-semibold text-primary-900 mb-4"
                    data-oid="qqq:.9r">

                      {option.duration}
                    </div>
                    <p className="text-gray-600 text-sm" data-oid="w50g-e1">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 lg:py-32 bg-gray-50" data-oid="q8swj25">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="u815::-">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="8lti699">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="opqqshm">

                Key Features & Benefits
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="2sv3o4q">

                Everything you need for professional appraisal data entry
                services
              </p>
            </motion.div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-oid="s1ajb5:">

              {keyFeatures.map((feature, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                data-oid="471nx4t">

                  <div className="flex items-start gap-4" data-oid="wnn_gyz">
                    <div className="flex-shrink-0" data-oid="vc9vx4z">
                      <CheckCircle
                      className="w-6 h-6 text-success-600"
                      data-oid="f55hgw7" />

                    </div>
                    <div className="flex-1" data-oid="gnlevdw">
                      <div
                      className="flex items-center gap-2 mb-2"
                      data-oid="cr7f670">

                        <feature.icon
                        className="w-5 h-5 text-primary-600"
                        data-oid="4_el5ve" />

                        <h3
                        className="font-semibold text-primary-900"
                        data-oid="8mpo0d9">

                          {feature.title}
                        </h3>
                      </div>
                      <p
                      className="text-gray-600 text-sm leading-relaxed"
                      data-oid="4unqqpx">

                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-primary-700"
          data-oid="bkjqtt6">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="6xz_8t-">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
              data-oid="c6n9s7d">

              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                data-oid=".-:-ubp">

                Ready to Get Started?
              </h2>
              <p
                className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
                data-oid="y6pktjt">

                Join thousands of satisfied appraisers who trust ieIMPACT with
                their data entry needs. Get your $45 account credit and start
                your free trial today!
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                data-oid="7y_w9zw">

                <Link
                  href="https://secure.ieimpact.com/members/register.php"
                  target="_blank"
                  data-oid="98k-4ip">

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-700 hover:text-primary-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
                    data-oid="on9q0fb">

                    Start Free Trial
                    <ArrowRight className="w-5 h-5" data-oid="y3tmghr" />
                  </motion.button>
                </Link>

                <Link href="/#contact" data-oid="o7h6bnv">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                    data-oid="39z76qz">

                    Contact Us
                  </motion.button>
                </Link>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-100"
                data-oid="lvzl8oe">

                <div className="flex items-center gap-2" data-oid=":h1lj81">
                  <Phone className="w-5 h-5" data-oid=".j0han-" />
                  <span data-oid="pdidfht">408-256-0154</span>
                </div>
                <div className="flex items-center gap-2" data-oid="t.ag145">
                  <Mail className="w-5 h-5" data-oid="16l6nnn" />
                  <span data-oid="h7611mh">info@ieimpact.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>);

}