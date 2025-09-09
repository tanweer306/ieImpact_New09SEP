"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Star,
  Filter,
  Calendar,
  User,
  Building,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  Mail,
  Award,
  TrendingUp,
  Users,
  CheckCircle } from
"lucide-react";
import Link from "next/link";

interface Review {
  id: number;
  customerName: string;
  companyName?: string;
  rating: number;
  reviewText: string;
  submissionDate: string;
  isApproved: boolean;
  isFeatured: boolean;
  location?: string;
  title?: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const reviewsPerPage = 6;

  // Fetch reviews from JSON file
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json");
        if (response.ok) {
          const jsonData = await response.json();

          // Transform JSON data to Review format with random additional fields
          const transformedReviews: Review[] = jsonData.map(
            (item: any, index: number) => {
              const names = [
              "Michael Johnson",
              "Sarah Martinez",
              "Robert Chen",
              "Jennifer Williams",
              "David Thompson",
              "Lisa Anderson",
              "Mark Rodriguez",
              "Amanda Foster",
              "John Smith",
              "Emily Davis",
              "Christopher Wilson",
              "Jessica Brown",
              "Matthew Taylor",
              "Ashley Miller",
              "Daniel Anderson",
              "Stephanie Thomas"];


              const companies = [
              "Johnson Appraisal Services",
              "Martinez Real Estate Appraisals",
              "Chen Property Valuations",
              "Williams Appraisal Group",
              "Thompson Real Estate Appraisals",
              "Anderson Property Services",
              "Rodriguez Appraisal Solutions",
              "Foster Valuation Services",
              "Smith & Associates",
              "Davis Property Group",
              "Wilson Valuations",
              "Brown Appraisal Co.",
              "Taylor Real Estate Services",
              "Miller Properties",
              "Anderson Realty Appraisals",
              "Thomas Valuation Group"];


              const locations = [
              "Dallas, TX",
              "Phoenix, AZ",
              "San Francisco, CA",
              "Atlanta, GA",
              "Miami, FL",
              "Denver, CO",
              "Houston, TX",
              "Seattle, WA",
              "Chicago, IL",
              "New York, NY",
              "Los Angeles, CA",
              "Boston, MA",
              "Austin, TX",
              "Portland, OR",
              "Nashville, TN",
              "Charlotte, NC"];


              const titles = [
              "Outstanding Service Quality",
              "Game-Changer for My Business",
              "Attention to Detail is Exceptional",
              "Reliable and Professional",
              "Outstanding Quality and Support",
              "Never Let Me Down",
              "Good Service Overall",
              "Exceptional Service",
              "Highly Recommended",
              "Great Value for Money",
              "Professional and Efficient",
              "Exceeded Expectations"];


              // Convert rating text to number
              let ratingNumber = 5;
              if (item.rating === "Very Good") ratingNumber = 4;else
              if (item.rating === "Good") ratingNumber = 3;else
              if (item.rating === "Fair") ratingNumber = 2;else
              if (item.rating === "Poor") ratingNumber = 1;

              return {
                id: index + 1,
                customerName: names[index % names.length],
                companyName: companies[index % companies.length],
                rating: ratingNumber,
                reviewText: item.text,
                submissionDate: item.date ?
                new Date(item.date).toISOString().split("T")[0] :
                new Date().toISOString().split("T")[0],
                isApproved: true,
                isFeatured: index < 5, // First 5 reviews are featured
                location: locations[index % locations.length],
                title: titles[index % titles.length]
              };
            }
          );

          setReviews(transformedReviews);
          setFilteredReviews(transformedReviews);
        } else {
          // Fallback to placeholder data if JSON fails
          setReviews(placeholderReviews);
          setFilteredReviews(placeholderReviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        // Use placeholder data
        setReviews(placeholderReviews);
        setFilteredReviews(placeholderReviews);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Placeholder review data
  const placeholderReviews: Review[] = [
  {
    id: 1,
    customerName: "Michael Johnson",
    companyName: "Johnson Appraisal Services",
    rating: 5,
    reviewText:
    "Great Service and Excellent Customer Support! My productivity has increased dramatically! While my stress has gone way down :) The team at ieIMPACT is professional, fast, and incredibly accurate. I've been using their services for over 2 years now and couldn't be happier.",
    submissionDate: "2024-01-15",
    isApproved: true,
    isFeatured: true,
    location: "Dallas, TX",
    title: "Outstanding Service Quality"
  },
  {
    id: 2,
    customerName: "Sarah Martinez",
    companyName: "Martinez Real Estate Appraisals",
    rating: 5,
    reviewText:
    "ieIMPACT has been a game-changer for my appraisal business. Their 24/7 availability and quick turnaround times have allowed me to take on more clients without sacrificing quality. The data entry is always accurate and professional.",
    submissionDate: "2024-01-10",
    isApproved: true,
    isFeatured: true,
    location: "Phoenix, AZ",
    title: "Game-Changer for My Business"
  },
  {
    id: 3,
    customerName: "Robert Chen",
    companyName: "Chen Property Valuations",
    rating: 5,
    reviewText:
    "I've tried several data entry services over the years, but ieIMPACT stands out for their attention to detail and customer service. They understand the appraisal industry and deliver exactly what I need, when I need it.",
    submissionDate: "2024-01-08",
    isApproved: true,
    isFeatured: false,
    location: "San Francisco, CA",
    title: "Attention to Detail is Exceptional"
  },
  {
    id: 4,
    customerName: "Jennifer Williams",
    companyName: "Williams Appraisal Group",
    rating: 4,
    reviewText:
    "Very reliable service with consistent quality. The team is responsive and professional. I appreciate their secure handling of sensitive data and their commitment to meeting deadlines. Would definitely recommend to other appraisers.",
    submissionDate: "2024-01-05",
    isApproved: true,
    isFeatured: false,
    location: "Atlanta, GA",
    title: "Reliable and Professional"
  },
  {
    id: 5,
    customerName: "David Thompson",
    companyName: "Thompson Real Estate Appraisals",
    rating: 5,
    reviewText:
    "The quality of work is outstanding. ieIMPACT's team understands the complexities of appraisal forms and delivers accurate, complete reports every time. Their customer support is also top-notch - always available when I have questions.",
    submissionDate: "2024-01-03",
    isApproved: true,
    isFeatured: true,
    location: "Miami, FL",
    title: "Outstanding Quality and Support"
  },
  {
    id: 6,
    customerName: "Lisa Anderson",
    companyName: "Anderson Property Services",
    rating: 5,
    reviewText:
    "I've been using ieIMPACT for 3 years now and they've never let me down. Fast, accurate, and professional. The free sketch service is a huge bonus, and their pricing is very competitive. Highly recommended!",
    submissionDate: "2024-01-01",
    isApproved: true,
    isFeatured: false,
    location: "Denver, CO",
    title: "Never Let Me Down"
  },
  {
    id: 7,
    customerName: "Mark Rodriguez",
    companyName: "Rodriguez Appraisal Solutions",
    rating: 4,
    reviewText:
    "Good service overall. The turnaround time is as promised and the quality is consistent. I appreciate their flexibility with rush orders and their transparent pricing structure. Customer service is responsive and helpful.",
    submissionDate: "2023-12-28",
    isApproved: true,
    isFeatured: false,
    location: "Houston, TX",
    title: "Good Service Overall"
  },
  {
    id: 8,
    customerName: "Amanda Foster",
    companyName: "Foster Valuation Services",
    rating: 5,
    reviewText:
    "Exceptional service! The team at ieIMPACT has helped me streamline my workflow significantly. Their attention to detail and quick turnaround times have allowed me to focus more on analysis and less on data entry. Couldn't ask for better service.",
    submissionDate: "2023-12-25",
    isApproved: true,
    isFeatured: true,
    location: "Seattle, WA",
    title: "Exceptional Service"
  }];


  // Filter and sort reviews
  useEffect(() => {
    let filtered = reviews.filter((review) => review.isApproved);

    // Filter by rating
    if (selectedRating !== "all") {
      const rating = parseInt(selectedRating);
      filtered = filtered.filter((review) => review.rating === rating);
    }

    // Sort reviews
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.submissionDate).getTime() -
            new Date(a.submissionDate).getTime());


        case "oldest":
          return (
            new Date(a.submissionDate).getTime() -
            new Date(b.submissionDate).getTime());


        case "highest":
          return b.rating - a.rating;
        case "lowest":
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

    // Move featured reviews to top
    filtered.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });

    setFilteredReviews(filtered);
    setCurrentPage(1);
  }, [reviews, selectedRating, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, endIndex);

  // Calculate average rating
  const averageRating =
  reviews.length > 0 ?
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length :
  0;

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
    percentage:
    reviews.length > 0 ?
    reviews.filter((review) => review.rating === rating).length /
    reviews.length *
    100 :
    0
  }));

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    };

    return (
      <div className="flex items-center gap-1" data-oid="iinnbjo">
        {[1, 2, 3, 4, 5].map((star) =>
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
          star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`
          }
          data-oid="8tnakt:" />

        )}
      </div>);

  };

  if (loading) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center"
        data-oid="-2--v0.">

        <div className="text-center" data-oid="0ngg8wl">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"
            data-oid="gieyh67">
          </div>
          <p className="text-gray-600" data-oid="pn6:2gw">
            Loading reviews...
          </p>
        </div>
      </div>);

  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-white"
      data-oid="8yf1tgr">

      {/* Navigation Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        data-oid="jpn-hma">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="gg69rsa">

          <div
            className="flex justify-between items-center h-16"
            data-oid="hqgph68">

            {/* Logo */}
            <Link href="/" className="flex items-center" data-oid="fbkzp1x">
              <img
                src="/ieimpact.gif"
                alt="ieIMPACT Logo"
                className="h-10 w-auto"
                data-oid="_ln5z7s" />

            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              data-oid="4.9yv5.">

              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="igex0kr">

                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid=".cwxz68">

                About
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="k72d9l3">

                FAQs
              </Link>
              <Link
                href="/reviews"
                className="text-primary-600 font-semibold"
                data-oid="ob.1n0y">

                Reviews
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="osjmm01">

                Contact
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                data-oid="o9wb5sa">

                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16" data-oid="k28s:4p">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-20 lg:py-32"
          data-oid="2fcmepm">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="oxy-.z.">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
              data-oid="tz4whvh">

              <div className="flex justify-center mb-6" data-oid="pr55yv2">
                <div
                  className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center"
                  data-oid="kj.st66">

                  <Star
                    className="w-8 h-8 text-primary-600 fill-current"
                    data-oid="f901f5c" />

                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6"
                data-oid="vof3zzg">

                Customer{" "}
                <span className="text-primary-600" data-oid="qskiyle">
                  Reviews
                </span>
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                data-oid="98r2kp5">

                See what our satisfied clients have to say about our appraisal
                data entry services
              </p>
            </motion.div>

            {/* Rating Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12"
              data-oid=":j8bya:">

              <div
                className="grid md:grid-cols-3 gap-8 items-center"
                data-oid="ak71ygs">

                {/* Average Rating */}
                <div className="text-center" data-oid="lws_wj0">
                  <div
                    className="text-5xl font-bold text-primary-600 mb-2"
                    data-oid="of728fh">

                    {averageRating.toFixed(1)}
                  </div>
                  <div className="mb-2" data-oid="x6n_xfa">
                    {renderStars(Math.round(averageRating), "lg")}
                  </div>
                  <p className="text-gray-600" data-oid="byhp:5y">
                    Based on {reviews.length} reviews
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2" data-oid="v-k-i0y">
                  {ratingDistribution.map(({ rating, count, percentage }) =>
                  <div
                    key={rating}
                    className="flex items-center gap-3"
                    data-oid="3sqzg0y">

                      <span
                      className="text-sm font-medium w-8"
                      data-oid="q8svn_5">

                        {rating}★
                      </span>
                      <div
                      className="flex-1 bg-gray-200 rounded-full h-2"
                      data-oid="kpj7imr">

                        <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                        data-oid="_ibllc_" />

                      </div>
                      <span
                      className="text-sm text-gray-600 w-8"
                      data-oid="d-cbvea">

                        {count}
                      </span>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4" data-oid="8q8z-6h">
                  <div
                    className="text-center p-4 bg-primary-50 rounded-lg"
                    data-oid="..43chw">

                    <div
                      className="text-2xl font-bold text-primary-600"
                      data-oid="d3w_fwd">

                      98%
                    </div>
                    <div className="text-sm text-gray-600" data-oid="tc4.6sy">
                      5-Star Reviews
                    </div>
                  </div>
                  <div
                    className="text-center p-4 bg-success-50 rounded-lg"
                    data-oid="wh7q5b.">

                    <div
                      className="text-2xl font-bold text-success-600"
                      data-oid="gdarp-3">

                      500+
                    </div>
                    <div className="text-sm text-gray-600" data-oid="szgt2:9">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8"
              data-oid="1--ktlx">

              <div
                className="flex flex-col lg:flex-row gap-4 items-center justify-between"
                data-oid="9_:8ri3">

                <div
                  className="flex flex-col sm:flex-row gap-4 items-center"
                  data-oid="vuoat7l">

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 lg:hidden"
                    data-oid="3hlixxr">

                    <Filter className="w-4 h-4" data-oid="b739g0c" />
                    Filters
                    {showFilters ?
                    <ChevronUp className="w-4 h-4" data-oid="4glovpf" /> :

                    <ChevronDown className="w-4 h-4" data-oid="la-c3sl" />
                    }
                  </button>

                  <div
                    className={`flex flex-col sm:flex-row gap-4 ${showFilters ? "block" : "hidden lg:flex"}`}
                    data-oid="t6g3daf">

                    {/* Rating Filter */}
                    <select
                      value={selectedRating}
                      onChange={(e) => setSelectedRating(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      data-oid="e8kq.dj">

                      <option value="all" data-oid="hzrqhx1">
                        All Ratings
                      </option>
                      <option value="5" data-oid="-hmd0hd">
                        5 Stars
                      </option>
                      <option value="4" data-oid="9nv6flw">
                        4 Stars
                      </option>
                      <option value="3" data-oid="stpnrjf">
                        3 Stars
                      </option>
                      <option value="2" data-oid="p3q5ifo">
                        2 Stars
                      </option>
                      <option value="1" data-oid="1v7l6qn">
                        1 Star
                      </option>
                    </select>

                    {/* Sort Filter */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      data-oid="l_zsxda">

                      <option value="newest" data-oid="4be8ze_">
                        Newest First
                      </option>
                      <option value="oldest" data-oid="3z4f2mv">
                        Oldest First
                      </option>
                      <option value="highest" data-oid="rmy_k3x">
                        Highest Rating
                      </option>
                      <option value="lowest" data-oid="qudbb6p">
                        Lowest Rating
                      </option>
                    </select>
                  </div>
                </div>

                <div className="text-sm text-gray-600" data-oid="5p78m:4">
                  Showing {currentReviews.length} of {filteredReviews.length}{" "}
                  reviews
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pb-20 lg:pb-32" data-oid="k4i92gg">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="49eldgm">

            {filteredReviews.length === 0 ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
              data-oid="otk25lk">

                <Star
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                data-oid="-h_54sd" />


                <h3
                className="text-xl font-semibold text-gray-600 mb-2"
                data-oid="9kw4ov5">

                  No reviews found
                </h3>
                <p className="text-gray-500" data-oid="rrgq2s7">
                  Try adjusting your filters to see more reviews
                </p>
              </motion.div> :

            <>
                <div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                data-oid="lc-yvxj">

                  {currentReviews.map((review, index) =>
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  review.isFeatured ?
                  "border-primary-200 ring-2 ring-primary-100" :
                  "border-gray-100"}`
                  }
                  data-oid="0f4_r-3">

                      {review.isFeatured &&
                  <div
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2"
                    data-oid="o1pxi4_">

                          <div
                      className="flex items-center gap-2"
                      data-oid="gk68ff3">

                            <Award className="w-4 h-4" data-oid="qhz1u5a" />
                            <span
                        className="text-sm font-medium"
                        data-oid="ztq7cu3">

                              Featured Review
                            </span>
                          </div>
                        </div>
                  }

                      <div className="p-6" data-oid="4zbgu38">
                        {/* Header */}
                        <div
                      className="flex items-start justify-between mb-4"
                      data-oid="8t2pum9">

                          <div
                        className="flex items-center gap-3"
                        data-oid="0lu1.jy">

                            <div
                          className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"
                          data-oid="qsg6v.9">

                              <User
                            className="w-6 h-6 text-primary-600"
                            data-oid="qsiuok2" />

                            </div>
                            <div data-oid="vnzbb:c">
                              <h3
                            className="font-semibold text-primary-900"
                            data-oid="_ax39g5">

                                {review.customerName}
                              </h3>
                              {review.companyName &&
                          <div
                            className="flex items-center gap-1 text-sm text-gray-600"
                            data-oid="6i-u7-2">

                                  <Building
                              className="w-3 h-3"
                              data-oid="_pvtlst" />


                                  {review.companyName}
                                </div>
                          }
                              {review.location &&
                          <div
                            className="text-xs text-gray-500"
                            data-oid="cf-2hru">

                                  {review.location}
                                </div>
                          }
                            </div>
                          </div>
                          {renderStars(review.rating)}
                        </div>

                        {/* Title */}
                        {review.title &&
                    <h4
                      className="font-semibold text-gray-900 mb-3"
                      data-oid="799.-w0">

                            {review.title}
                          </h4>
                    }

                        {/* Review Text */}
                        <p
                      className="text-gray-600 leading-relaxed mb-4"
                      data-oid="7rle6_:">

                          {review.reviewText}
                        </p>

                        {/* Footer */}
                        <div
                      className="flex items-center justify-between pt-4 border-t border-gray-100"
                      data-oid="dtxv5ng">

                          <div
                        className="flex items-center gap-1 text-sm text-gray-500"
                        data-oid="zwufqsi">

                            <Calendar className="w-4 h-4" data-oid="-8cji40" />
                            {new Date(
                          review.submissionDate
                        ).toLocaleDateString()}
                          </div>
                          <div
                        className="text-xs text-gray-400"
                        data-oid="jm4b616">

                            Review #{review.id}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                )}
                </div>

                {/* Pagination */}
                {totalPages > 1 &&
              <div
                className="flex justify-center items-center gap-2"
                data-oid="v4kop9s">

                    <button
                  onClick={() =>
                  setCurrentPage(Math.max(1, currentPage - 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  data-oid="1v6i1pi">

                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) =>
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    currentPage === page ?
                    "bg-primary-600 text-white" :
                    "border border-gray-300 hover:bg-gray-50"}`
                    }
                    data-oid=":akbmsh">

                          {page}
                        </button>

                )}

                    <button
                  onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  data-oid="273wion">

                      Next
                    </button>
                  </div>
              }
              </>
            }
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-primary-700"
          data-oid=":jovlx0">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="ea104bd">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
              data-oid="zqmrglo">

              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                data-oid="a2o8hdc">

                Join Our Satisfied Customers
              </h2>
              <p
                className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
                data-oid="rasycls">

                Experience the same exceptional service that our clients rave
                about. Get started today and see why we have a 98% satisfaction
                rate.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                data-oid="iaxd7:i">

                <Link href="/#contact" data-oid=":axxup4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-700 hover:text-primary-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
                    data-oid="vpsnk2a">

                    Get Started Today
                    <ArrowRight className="w-5 h-5" data-oid="r801-f6" />
                  </motion.button>
                </Link>

                <div
                  className="flex items-center gap-6 text-primary-100"
                  data-oid="4oq66z4">

                  <div className="flex items-center gap-2" data-oid="r-dr3eg">
                    <Phone className="w-5 h-5" data-oid="f4_15yo" />
                    <span data-oid="vaoq8sy">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="d.orfum">
                    <Mail className="w-5 h-5" data-oid="u.bub0k" />
                    <span data-oid="sru5ruu">info@ieimpact.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>);

}