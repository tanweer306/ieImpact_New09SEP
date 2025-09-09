"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
  { href: "#services", label: "Services" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" }];


  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      data-oid=":a5nn5e">

      <div className="container-custom" data-oid="z2r4:x8">
        <div
          className="flex items-center justify-between h-16"
          data-oid="xva5tyk">

          {/* Logo */}
          <div className="flex items-center" data-oid="1g3iz47">
            <h1
              className="text-2xl font-bold text-primary-900"
              data-oid="6cq7lzr">

              ieIMPACT
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            data-oid="k4ao2ju">

            {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              data-oid="fcu8s_p">

                {item.label}
              </a>
            )}
          </nav>

          {/* Contact Info & CTA */}
          <div
            className="hidden lg:flex items-center space-x-4"
            data-oid="5km2kwa">

            <div
              className="flex items-center space-x-2 text-sm text-gray-600"
              data-oid="w5se.fs">

              <Phone className="w-4 h-4" data-oid="bi4bt0:" />
              <span data-oid=".94kuz0">(555) 123-4567</span>
            </div>
            <a href="#contact" className="btn-primary" data-oid="stfqhhr">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            data-oid="1p_ugr9">

            {isMenuOpen ?
            <X className="w-6 h-6" data-oid="jxbai0p" /> :

            <Menu className="w-6 h-6" data-oid="2ntea3f" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence data-oid="0obyqrd">
        {isMenuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
          data-oid="-mdn8_b">

            <div className="container-custom py-4" data-oid="9-a8a4p">
              <nav className="flex flex-col space-y-4" data-oid="kp:hfbi">
                {navItems.map((item) =>
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                data-oid="ca30jrg">

                    {item.label}
                  </a>
              )}
                <div
                className="pt-4 border-t border-gray-200"
                data-oid="drcxxzk">

                  <div
                  className="flex items-center space-x-2 text-sm text-gray-600 mb-3"
                  data-oid="db-hf2a">

                    <Phone className="w-4 h-4" data-oid="mctnr51" />
                    <span data-oid="tnbyn39">(555) 123-4567</span>
                  </div>
                  <a
                  href="#contact"
                  className="btn-primary w-full text-center block"
                  data-oid="fvjymuw">

                    Get Quote
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}