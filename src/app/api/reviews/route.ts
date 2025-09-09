import { NextRequest, NextResponse } from "next/server";

// In a real application, this would connect to your database
// For now, we'll use in-memory data that matches the Review interface

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

// Mock database - in production, replace with actual database queries
let reviews: Review[] = [
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
},
{
  id: 9,
  customerName: "Thomas Wilson",
  companyName: "Wilson Property Assessments",
  rating: 5,
  reviewText:
  "Outstanding service from start to finish. The team is knowledgeable, efficient, and always delivers on time. I've recommended ieIMPACT to several colleagues and they've all had the same positive experience.",
  submissionDate: "2023-12-20",
  isApproved: true,
  isFeatured: false,
  location: "Chicago, IL",
  title: "Outstanding from Start to Finish"
},
{
  id: 10,
  customerName: "Rachel Green",
  companyName: "Green Appraisal Consultants",
  rating: 5,
  reviewText:
  "The best data entry service I've ever used. Professional, accurate, and incredibly fast. Their customer service team is always helpful and responsive. I can't imagine running my business without them.",
  submissionDate: "2023-12-15",
  isApproved: true,
  isFeatured: false,
  location: "Portland, OR",
  title: "The Best Service I've Ever Used"
},
{
  id: 11,
  customerName: "Kevin Brown",
  companyName: "Brown Real Estate Valuations",
  rating: 4,
  reviewText:
  "Solid service with good turnaround times. The quality is consistent and the pricing is fair. I appreciate their transparency and communication throughout the process. Would recommend to other appraisers.",
  submissionDate: "2023-12-10",
  isApproved: true,
  isFeatured: false,
  location: "Nashville, TN",
  title: "Solid Service with Good Results"
},
{
  id: 12,
  customerName: "Michelle Davis",
  companyName: "Davis Property Solutions",
  rating: 5,
  reviewText:
  "ieIMPACT has transformed my business operations. Their team is professional, efficient, and always delivers high-quality work. The 24/7 availability is a huge advantage for my busy schedule. Highly recommended!",
  submissionDate: "2023-12-05",
  isApproved: true,
  isFeatured: true,
  location: "Las Vegas, NV",
  title: "Transformed My Business Operations"
}];


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const rating = searchParams.get("rating");
    const sortBy = searchParams.get("sortBy");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const approvedOnly = searchParams.get("approved") !== "false";

    let filteredReviews = [...reviews];

    // Filter by approval status
    if (approvedOnly) {
      filteredReviews = filteredReviews.filter((review) => review.isApproved);
    }

    // Filter by rating
    if (rating && rating !== "all") {
      const ratingValue = parseInt(rating);
      filteredReviews = filteredReviews.filter(
        (review) => review.rating === ratingValue
      );
    }

    // Sort reviews
    filteredReviews.sort((a, b) => {
      // Featured reviews always come first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;

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
          return (
            new Date(b.submissionDate).getTime() -
            new Date(a.submissionDate).getTime());

      }
    });

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedReviews = filteredReviews.slice(startIndex, endIndex);

    return NextResponse.json({
      reviews: paginatedReviews,
      totalCount: filteredReviews.length,
      totalPages: Math.ceil(filteredReviews.length / limit),
      currentPage: page,
      hasNextPage: endIndex < filteredReviews.length,
      hasPreviousPage: page > 1
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, companyName, rating, reviewText, location, title } =
    body;

    if (!customerName || !rating || !reviewText) {
      return NextResponse.json(
        { error: "Customer name, rating, and review text are required" },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const newReview: Review = {
      id: Math.max(...reviews.map((r) => r.id)) + 1,
      customerName,
      companyName: companyName || undefined,
      rating,
      reviewText,
      submissionDate: new Date().toISOString().split("T")[0],
      isApproved: false, // New reviews need approval
      isFeatured: false,
      location: location || undefined,
      title: title || undefined
    };

    reviews.push(newReview);

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, isApproved, isFeatured } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Review ID is required" },
        { status: 400 }
      );
    }

    const reviewIndex = reviews.findIndex((r) => r.id === id);
    if (reviewIndex === -1) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    // Update the review
    if (typeof isApproved === "boolean") {
      reviews[reviewIndex].isApproved = isApproved;
    }
    if (typeof isFeatured === "boolean") {
      reviews[reviewIndex].isFeatured = isFeatured;
    }

    return NextResponse.json(reviews[reviewIndex]);
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json(
      { error: "Failed to update review" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "");

    if (!id) {
      return NextResponse.json(
        { error: "Review ID is required" },
        { status: 400 }
      );
    }

    const reviewIndex = reviews.findIndex((r) => r.id === id);
    if (reviewIndex === -1) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    reviews.splice(reviewIndex, 1);

    return NextResponse.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}