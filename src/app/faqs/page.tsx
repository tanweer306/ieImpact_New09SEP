"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  Star,
  CheckCircle,
  Tag,
  Eye,
  EyeOff } from
"lucide-react";
import Link from "next/link";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  displayOrder: number;
  tags?: string[];
  views?: number;
  helpful?: number;
}

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Categories for filtering
  const categories = [
  "All",
  "Software Support",
  "Pricing",
  "Process",
  "Security",
  "Turnaround Time",
  "Getting Started"];


  // Fetch FAQs from API
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/api/faqs");
        if (response.ok) {
          const data = await response.json();
          setFaqs(data);
          setFilteredFaqs(data.filter((faq: FAQ) => faq.isActive));
        } else {
          // Fallback to placeholder data if API fails
          setFaqs(placeholderFaqs);
          setFilteredFaqs(placeholderFaqs.filter((faq) => faq.isActive));
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        // Use placeholder data
        setFaqs(placeholderFaqs);
        setFilteredFaqs(placeholderFaqs.filter((faq) => faq.isActive));
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // Placeholder FAQ data
  const placeholderFaqs: FAQ[] = [
  {
    id: 1,
    question: "What appraisal software do you support?",
    answer:
    "We support all major appraisal software platforms including a la mode, WinTOTAL, Aurora, TOTAL 2013, ACI Reports, SFREP, AppraiseIT, and ClickFORMS. Our team is trained on the latest versions and can adapt to any custom requirements you may have.",
    category: "Software Support",
    isActive: true,
    displayOrder: 1,
    tags: ["software", "compatibility", "platforms"],
    views: 245,
    helpful: 89
  },
  {
    id: 2,
    question: "How long does data entry take?",
    answer:
    "Our standard turnaround time is 6-24 hours for most reports. For urgent projects, we offer same-day and rush services with 2-4 hour turnaround. The exact time depends on the complexity of the report and current workload.",
    category: "Turnaround Time",
    isActive: true,
    displayOrder: 2,
    tags: ["turnaround", "speed", "delivery"],
    views: 198,
    helpful: 76
  },
  {
    id: 3,
    question: "What information do I need to provide?",
    answer:
    "You'll need to provide the inspection sheets, property details, comparable sales data, and any specific instructions. We accept files in various formats including PDF, Word, Excel, and image files. Our team will contact you if any additional information is needed.",
    category: "Process",
    isActive: true,
    displayOrder: 3,
    tags: ["requirements", "documents", "process"],
    views: 167,
    helpful: 62
  },
  {
    id: 4,
    question: "How do I get started?",
    answer:
    "Getting started is easy! Simply contact us through our website form, email, or phone. We'll discuss your specific needs, provide a quote, and set up your account. You can then submit your first project through our secure portal.",
    category: "Getting Started",
    isActive: true,
    displayOrder: 4,
    tags: ["onboarding", "setup", "account"],
    views: 234,
    helpful: 91
  },
  {
    id: 5,
    question: "What are your pricing options?",
    answer:
    "We offer competitive pricing based on report complexity and volume. Our rates start at $25 per report for standard residential appraisals. We also offer volume discounts for regular clients and custom pricing for large projects. Contact us for a personalized quote.",
    category: "Pricing",
    isActive: true,
    displayOrder: 5,
    tags: ["pricing", "cost", "rates"],
    views: 312,
    helpful: 98
  },
  {
    id: 6,
    question: "Is my data secure?",
    answer:
    "Absolutely. We are TRUSTe certified and use bank-level security protocols. All data is encrypted during transmission and storage. Our team members sign strict confidentiality agreements, and we maintain comprehensive data protection policies.",
    category: "Security",
    isActive: true,
    displayOrder: 6,
    tags: ["security", "privacy", "confidential"],
    views: 189,
    helpful: 84
  },
  {
    id: 7,
    question: "Do you offer rush services?",
    answer:
    "Yes, we offer rush services for urgent projects. Same-day delivery is available for an additional fee, and we can often accommodate 2-4 hour turnaround times. Contact us directly to discuss your urgent needs and availability.",
    category: "Turnaround Time",
    isActive: true,
    displayOrder: 7,
    tags: ["rush", "urgent", "fast"],
    views: 156,
    helpful: 67
  },
  {
    id: 8,
    question: "What formats do you accept?",
    answer:
    "We accept all common file formats including PDF, Word documents, Excel spreadsheets, JPEG/PNG images, and most appraisal software native formats. If you have files in a different format, contact us and we'll work with you to find a solution.",
    category: "Process",
    isActive: true,
    displayOrder: 8,
    tags: ["formats", "files", "compatibility"],
    views: 143,
    helpful: 58
  }];


  // Filter FAQs based on search and category
  useEffect(() => {
    let filtered = faqs.filter((faq) => faq.isActive);

    if (selectedCategory !== "All") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort by display order
    filtered.sort((a, b) => a.displayOrder - b.displayOrder);

    setFilteredFaqs(filtered);
  }, [faqs, searchTerm, selectedCategory]);

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleHelpful = async (faqId: number) => {
    try {
      await fetch(`/api/faqs/${faqId}/helpful`, {
        method: "POST"
      });
      // Update local state
      setFaqs((prev) =>
      prev.map((faq) =>
      faq.id === faqId ? { ...faq, helpful: (faq.helpful || 0) + 1 } : faq
      )
      );
    } catch (error) {
      console.error("Error updating helpful count:", error);
    }
  };

  if (loading) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center"
        data-oid="v.jgxw3">

        <div className="text-center" data-oid="ax2dvn0">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"
            data-oid="v3o9pe_">
          </div>
          <p className="text-gray-600" data-oid="yhukw5w">
            Loading FAQs...
          </p>
        </div>
      </div>);

  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-white"
      data-oid="z9db-7-">

      {/* Navigation Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        data-oid="pzle1wo">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="0qwus92">

          <div
            className="flex justify-between items-center h-16"
            data-oid="qxat:sg">

            {/* Logo */}
            <Link href="/" className="flex items-center" data-oid="9-.l0xr">
              <img
                src="/ieimpact.gif"
                alt="ieIMPACT Logo"
                className="h-10 w-auto"
                data-oid="6n2vqzo" />

            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              data-oid="c:ggnvz">

              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="imb35v:">

                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="__xn79s">

                About
              </Link>
              <Link
                href="/faqs"
                className="text-primary-600 font-semibold"
                data-oid="q:j7c0q">

                FAQs
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="xe5q4z4">

                Contact
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                data-oid="gmda4u6">

                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16" data-oid="1:9qwof">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-20 lg:py-32"
          data-oid="4vlubk_">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="yhdv.nd">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
              data-oid="v50n3f1">

              <div className="flex justify-center mb-6" data-oid="byctce1">
                <div
                  className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center"
                  data-oid="1rt7of7">

                  <HelpCircle
                    className="w-8 h-8 text-primary-600"
                    data-oid="isocrs0" />

                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6"
                data-oid="_5wol1w">

                Frequently Asked{" "}
                <span className="text-primary-600" data-oid="u0fxm-5">
                  Questions
                </span>
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                data-oid="s99ewwi">

                Find answers to common questions about our appraisal data entry
                services
              </p>
            </motion.div>

            {/* Search and Filter Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-12"
              data-oid="dt3nve1">

              <div
                className="flex flex-col lg:flex-row gap-4"
                data-oid="25dyni2">

                {/* Search Bar */}
                <div className="flex-1 relative" data-oid="m3k0e:t">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                    data-oid="c87tkrh" />

                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    data-oid="zobg_ef" />

                </div>

                {/* Category Filter */}
                <div className="relative" data-oid="qh39eo8">
                  <Filter
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                    data-oid="8mr_8.0" />

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white min-w-[200px]"
                    data-oid="3su9iuk">

                    {categories.map((category) =>
                    <option
                      key={category}
                      value={category}
                      data-oid="kcl6-zj">

                        {category}
                      </option>
                    )}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600" data-oid="p3siafw">
                Showing {filteredFaqs.length} of{" "}
                {faqs.filter((faq) => faq.isActive).length} FAQs
                {selectedCategory !== "All" && ` in "${selectedCategory}"`}
                {searchTerm && ` matching "${searchTerm}"`}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="pb-20 lg:pb-32" data-oid="zztszo0">
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="qgscapz">

            {filteredFaqs.length === 0 ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
              data-oid="8ui41ll">

                <HelpCircle
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                data-oid="nszb4d_" />

                <h3
                className="text-xl font-semibold text-gray-600 mb-2"
                data-oid="ok94ca9">

                  No FAQs found
                </h3>
                <p className="text-gray-500" data-oid="q3g5mdj">
                  Try adjusting your search terms or category filter
                </p>
              </motion.div> :

            <div className="space-y-4" data-oid="qdhk0m0">
                {filteredFaqs.map((faq, index) =>
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                data-oid="-2vnox:">

                    <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  data-oid="ahwiizc">

                      <div className="flex-1" data-oid="ddu.j3_">
                        <div
                      className="flex items-center gap-3 mb-2"
                      data-oid="9vyv9hb">

                          <span
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                        data-oid="pb.owl2">

                            {faq.category}
                          </span>
                          {faq.views &&
                      <span
                        className="flex items-center gap-1 text-xs text-gray-500"
                        data-oid="numr4n2">

                              <Eye className="w-3 h-3" data-oid="otr3h9w" />
                              {faq.views}
                            </span>
                      }
                        </div>
                        <h3
                      className="text-lg font-semibold text-primary-900 pr-4"
                      data-oid="63u20fk">

                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0" data-oid="e1y-5f3">
                        {expandedFaq === faq.id ?
                    <ChevronUp
                      className="w-5 h-5 text-primary-600"
                      data-oid="d_.jb.." /> :


                    <ChevronDown
                      className="w-5 h-5 text-gray-400"
                      data-oid="-4vz-w:" />

                    }
                      </div>
                    </button>

                    <AnimatePresence data-oid="8ii-pd3">
                      {expandedFaq === faq.id &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    data-oid="ocrn1cg">

                          <div className="px-6 pb-6" data-oid="0enudqe">
                            <div
                        className="border-t border-gray-100 pt-4"
                        data-oid="sknuo3n">

                              <p
                          className="text-gray-600 leading-relaxed mb-4"
                          data-oid="5.tpmrf">

                                {faq.answer}
                              </p>

                              {/* Tags */}
                              {faq.tags && faq.tags.length > 0 &&
                        <div
                          className="flex flex-wrap gap-2 mb-4"
                          data-oid="okw4qug">

                                  {faq.tags.map((tag, tagIndex) =>
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
                            data-oid="5j7-3.5">

                                      <Tag
                              className="w-3 h-3"
                              data-oid="bt:jy6d" />

                                      {tag}
                                    </span>
                          )}
                                </div>
                        }

                              {/* Helpful Button */}
                              <div
                          className="flex items-center justify-between pt-4 border-t border-gray-100"
                          data-oid="wu0jzb4">

                                <button
                            onClick={() => handleHelpful(faq.id)}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-300"
                            data-oid="jazcn4k">

                                  <Star
                              className="w-4 h-4"
                              data-oid="jx9wexj" />

                                  Was this helpful? ({faq.helpful || 0})
                                </button>
                                <div
                            className="text-xs text-gray-500"
                            data-oid=".5je7ao">

                                  FAQ #{faq.id}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                  }
                    </AnimatePresence>
                  </motion.div>
              )}
              </div>
            }
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-primary-700"
          data-oid="lh26fvv">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="kgc5777">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
              data-oid="u1tz2x-">

              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                data-oid=".ob.dj1">

                Still Have Questions?
              </h2>
              <p
                className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
                data-oid="ok-yv7-">

                Our team is here to help! Contact us directly for personalized
                assistance.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                data-oid="ijg3z8t">

                <Link href="/#contact" data-oid="z3:e0rp">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-700 hover:text-primary-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
                    data-oid="izoqn.w">

                    Get In Touch
                    <ArrowRight className="w-5 h-5" data-oid="d89.vt:" />
                  </motion.button>
                </Link>

                <div
                  className="flex items-center gap-6 text-primary-100"
                  data-oid="72.w7z5">

                  <div className="flex items-center gap-2" data-oid=".jr9plv">
                    <Phone className="w-5 h-5" data-oid="wxkmv6_" />
                    <span data-oid="klf19qu">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="t00y.ws">
                    <Mail className="w-5 h-5" data-oid="yu.5xz7" />
                    <span data-oid="4lcad4b">info@ieimpact.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>);

}