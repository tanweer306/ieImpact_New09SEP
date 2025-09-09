import { NextRequest, NextResponse } from "next/server";

// In a real application, this would connect to your database
// For now, we'll use in-memory data that matches the FAQ interface

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

// Mock database - in production, replace with actual database queries
let faqs: FAQ[] = [
{
  id: 1,
  question: "What is your turn around time?",
  answer: "Our data entry team works around the clock 24/7 and 365 days a year. When placing a new order, you can choose an ETA of 6, 12, or 24 hours. Rush orders are processed within 6 hours for an extra $1.99. New customers' first three free orders may take up to 24 hours as we learn your style and regional data.",
  category: "Software Support",
  isActive: true,
  displayOrder: 1,
  tags: ["what", "is", "your"],
  views: 128,
  helpful: 61,
},
{
  id: 2,
  question: "Do you perform UAD compliant appraisal data entry?",
  answer: "Yes we perform UAD-compliant data entry, e.g., UAD URAR 1004, Exterior Only SFR 2055, Condo 1073, Exterior Condo 1075, plus non-UAD forms like Multifamily 1025 and Manufactured homes upon request.",
  category: "Security",
  isActive: true,
  displayOrder: 2,
  tags: ["do", "you", "perform"],
  views: 220,
  helpful: 108,
},
{
  id: 3,
  question: "How much of an appraisal report do you fill in?",
  answer: "We fill in almost 95% of the manual data entry you'd do. We fill up to 9 comps per report. However, we don't fill valuation adjustments or pictures unless you provide clear instructions.",
  category: "Security",
  isActive: true,
  displayOrder: 3,
  tags: ["how", "much", "of"],
  views: 262,
  helpful: 67,
},
{
  id: 4,
  question: "Which form filler software do you support?",
  answer: "We support TOTAL (a la mode), ACI Report (ACI), ClickFORMS (Bradford), and Appraise-It (SFREP).",
  category: "Software Support",
  isActive: true,
  displayOrder: 4,
  tags: ["which", "form", "filler"],
  views: 269,
  helpful: 120,
},
{
  id: 5,
  question: "Can I email you new data entry orders?",
  answer: "Yes just email your order instructions and attachments to [email protected], and the order is created automatically. You'll receive a confirmation email. You may also use the new order form.",
  category: "Security",
  isActive: true,
  displayOrder: 5,
  tags: ["can", "i", "email"],
  views: 156,
  helpful: 84,
},
{
  id: 6,
  question: "What do I need to send you?",
  answer: "Send all data you'd need to complete the report yourself: subject data, comps, public records, MLS data, inspection details, rough sketch, contract details, 1004MC data, plus your software template file with your standard comments included.",
  category: "Software Support",
  isActive: true,
  displayOrder: 6,
  tags: ["what", "do", "i"],
  views: 300,
  helpful: 50,
},
{
  id: 7,
  question: "How will I send you data?",
  answer: "Via our online order system you can upload files (PDFs, ZIPs) or provide an MLS link. You may also grant us MLS access or share public assessor website links for data extraction.",
  category: "Security",
  isActive: true,
  displayOrder: 7,
  tags: ["how", "will", "i"],
  views: 304,
  helpful: 117,
},
{
  id: 8,
  question: "Do I need to send a template file for each order?",
  answer: "Yes please clone/rename your existing template file with all required forms and send it with each order.",
  category: "Process",
  isActive: true,
  displayOrder: 8,
  tags: ["do", "i", "need"],
  views: 332,
  helpful: 56,
},
{
  id: 9,
  question: "What appraisal forms you can complete?",
  answer: "We handle SFR URAR 1004, Condominium 1073, Multi-family, Drive-By Exterior Only, and other forms at the same price. We also offer Desktop, BPOs, and Reviews at a lower price.",
  category: "Pricing",
  isActive: true,
  displayOrder: 9,
  tags: ["what", "appraisal", "forms"],
  views: 151,
  helpful: 70,
},
{
  id: 10,
  question: "What sections of the report will you fill in for me?",
  answer: "We typically fill: Subject, Contract, Neighborhood, Site/Project Site, Improvements, Project Info, Comparable Sales Grid (max 9 comps), Prior Sales/Transfers, PUD Info, 1004MC forms, Plat map, Sketch, Location maps, plus any data/instructions you send.",
  category: "Security",
  isActive: true,
  displayOrder: 10,
  tags: ["what", "sections", "of"],
  views: 314,
  helpful: 80,
},
{
  id: 11,
  question: "How do I use your service?",
  answer: "Register (no credit card required) → account verification via call → fill out “Standard Instructions Tab” with style and sample reports → place order with template and data → receive completion notification and download (or email) of the final report.",
  category: "Pricing",
  isActive: true,
  displayOrder: 11,
  tags: ["how", "do", "i"],
  views: 158,
  helpful: 105,
},
{
  id: 12,
  question: "Do you have your own access to the MLS websites, NDC or RealQuest?",
  answer: "No we're not licensed brokers or appraisers. You can provide an extra MLS user assistant access, an MLS link, or PDFs for us to extract data. We'll return PDF files for your reference.",
  category: "Security",
  isActive: true,
  displayOrder: 12,
  tags: ["do", "you", "have"],
  views: 173,
  helpful: 76,
},
{
  id: 13,
  question: "How do I pay you?",
  answer: "After trial credits expire, you are required to use a credit card on file or PayPal at order time. We authorize your card but charge only after order completion. Holds are removed if canceled. No credit card numbers are stored on our servers.",
  category: "Pricing",
  isActive: true,
  displayOrder: 13,
  tags: ["how", "do", "i"],
  views: 339,
  helpful: 82,
},
{
  id: 14,
  question: "How will I receive my completed order?",
  answer: "You will get an email once the order is completed. You can log in to download the report or opt to receive reports by email by enabling the option in your profile.",
  category: "Process",
  isActive: true,
  displayOrder: 14,
  tags: ["how", "will", "i"],
  views: 339,
  helpful: 98,
},
{
  id: 15,
  question: "Does this comply with USPAP?",
  answer: "Yes we follow USPAP guidelines. We don't calculate valuation numbers. We keep your data confidential, secure, and never share it. We hold TRUSTe, Norton/Symantec SSL protection, BBB membership, and E&O insurance. You're welcome to credit ieIMPACT as your assistant.",
  category: "Security",
  isActive: true,
  displayOrder: 15,
  tags: ["does", "this", "comply"],
  views: 315,
  helpful: 56,
},
{
  id: 16,
  question: "Do you take Holidays?",
  answer: "No we operate 24/7, 365 days a year, with no sick time, aiming to deliver on time without errors.",
  category: "Turnaround Time",
  isActive: true,
  displayOrder: 16,
  tags: ["do", "you", "take"],
  views: 281,
  helpful: 85,
},
{
  id: 17,
  question: "Do you have any other website?",
  answer: "No ieIMPACT is our sole brand and website. Beware of imitation sites.",
  category: "Process",
  isActive: true,
  displayOrder: 17,
  tags: ["do", "you", "have"],
  views: 265,
  helpful: 65,
},
{
  id: 18,
  question: "Can I send you data by Fax?",
  answer: "No it's slow and error-prone. Please scan using a multi-page feeder or upload PDF, JPG, XLS, or TXT files instead. Avoid using a mobile camera.",
  category: "Security",
  isActive: true,
  displayOrder: 18,
  tags: ["can", "i", "send"],
  views: 276,
  helpful: 112,
},
{
  id: 19,
  question: "How can I become one of your off site data entry persons?",
  answer: "Send your resume to [email protected]. We'll contact you when positions open.",
  category: "Security",
  isActive: true,
  displayOrder: 19,
  tags: ["how", "can", "i"],
  views: 195,
  helpful: 83,
},
{
  id: 20,
  question: "I signed up, but I didn't get my password. How do I get my password?",
  answer: "Your password is emailed upon activation (within 24 hours). Check spam. If not received after 1 hour, call us. For existing users, use the “Forgot Password” link.",
  category: "Process",
  isActive: true,
  displayOrder: 20,
  tags: ["i", "signed", "up,"],
  views: 217,
  helpful: 116,
},
{
  id: 21,
  question: "How do I contact the data entry person working on my reports?",
  answer: "Log into your account, open the order, and send a message there. Customer service emails and calls are answered during US business hours.",
  category: "Security",
  isActive: true,
  displayOrder: 21,
  tags: ["how", "do", "i"],
  views: 327,
  helpful: 113,
},
{
  id: 22,
  question: "Which sketching software do you use?",
  answer: "We use ACI Sketch, Area Sketch, TOTAL Sketch, and Apex V5.0. Please specify your software and version in the Standard Instructions Tab.",
  category: "Software Support",
  isActive: true,
  displayOrder: 22,
  tags: ["which", "sketching", "software"],
  views: 343,
  helpful: 95,
},
{
  id: 23,
  question: "I use both ACI and Alamode software. Can I use both?",
  answer: "Yes just send the corrected cloned template including all forms and specify desired file format under Order Instructions.",
  category: "Software Support",
  isActive: true,
  displayOrder: 23,
  tags: ["i", "use", "both"],
  views: 194,
  helpful: 105,
},
{
  id: 24,
  question: "Is there any catch?",
  answer: "No not at all. No credit card or setup fee, no contracts. We rely on delivering a service you'll love and refer to others.",
  category: "Pricing",
  isActive: true,
  displayOrder: 24,
  tags: ["is", "there", "any"],
  views: 298,
  helpful: 107,
},
{
  id: 25,
  question: "Your website is not working properly, what should I do?",
  answer: "Try a different browser or ensure you have the latest Adobe Flash Player. If issues persist, email files and instructions to [email protected] and we'll complete your orders.",
  category: "Process",
  isActive: true,
  displayOrder: 25,
  tags: ["your", "website", "is"],
  views: 270,
  helpful: 66,
},
{
  id: 26,
  question: "Do you share my data or use my data for anything else?",
  answer: "Absolutely not. Your data is never shared or used for any purpose other than completing your report.",
  category: "Security",
  isActive: true,
  displayOrder: 26,
  tags: ["do", "you", "share"],
  views: 164,
  helpful: 56,
},
{
  id: 27,
  question: "Do you have a sample of Field Inspection Sheet that I can use?",
  answer: "Yes downloadable in MS Word format so you can customize it. We recommend including an abbreviation key in the comments section.",
  category: "Process",
  isActive: true,
  displayOrder: 27,
  tags: ["do", "you", "have"],
  views: 341,
  helpful: 71,
},
{
  id: 28,
  question: "What instructions should I provide you?",
  answer: "Refer to sample instructions: Style Report Information; Standard Instructions Information And Example; Example Instructions And Reports; Data Entry Report Information And Example.",
  category: "Security",
  isActive: true,
  displayOrder: 28,
  tags: ["what", "instructions", "should"],
  views: 317,
  helpful: 88,
},
{
  id: 29,
  question: "How can I protect myself from internet fraud?",
  answer: "Follow these tips: don't open suspicious emails; use unique passwords; verify TRUSTe/BBB; ensure SSL (https) and Norton/McAfee protection; avoid public hosting, wire transfers, and suspicious PayPal addresses; never send license codes via email.",
  category: "Pricing",
  isActive: true,
  displayOrder: 29,
  tags: ["how", "can", "i"],
  views: 321,
  helpful: 85,
},
{
  id: 30,
  question: "I use DataMaster or another automated form program to fill the comps. Can you give me some discount?",
  answer: "We do much more we consolidate MLS and public records, create complex sketches at no extra cost, interpret contracts, add concessions, boundaries, maps, distances, etc. Send a few reports first and contact customer service for estimates.",
  category: "Pricing",
  isActive: true,
  displayOrder: 30,
  tags: ["i", "use", "datamaster"],
  views: 187,
  helpful: 77,
},
{
  id: 31,
  question: "How can I check my internet speed?",
  answer: "Visit our speed test at http://ieimpact.com/speedtest.php.",
  category: "Process",
  isActive: true,
  displayOrder: 31,
  tags: ["how", "can", "i"],
  views: 213,
  helpful: 103,
},
{
  id: 32,
  question: "I believe I need to add a comment in my reports that it is typed by ieIMPACT, and that I still reviewed, adjusted, etc, as is required per regulations",
  answer: "Here are two sample comments for your addendum or additional comments sections, clarifying the division of work between the appraiser and ieIMPACT.",
  category: "Process",
  isActive: true,
  displayOrder: 32,
  tags: ["i", "believe", "i"],
  views: 242,
  helpful: 91,
}
];


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const activeOnly = searchParams.get("active") !== "false";

    let filteredFaqs = [...faqs];

    // Filter by active status
    if (activeOnly) {
      filteredFaqs = filteredFaqs.filter((faq) => faq.isActive);
    }

    // Filter by category
    if (category && category !== "All") {
      filteredFaqs = filteredFaqs.filter((faq) => faq.category === category);
    }

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredFaqs = filteredFaqs.filter(
        (faq) =>
        faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower) ||
        faq.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort by display order
    filteredFaqs.sort((a, b) => a.displayOrder - b.displayOrder);

    return NextResponse.json(filteredFaqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return NextResponse.json(
      { error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question, answer, category, tags } = body;

    if (!question || !answer || !category) {
      return NextResponse.json(
        { error: "Question, answer, and category are required" },
        { status: 400 }
      );
    }

    const newFaq: FAQ = {
      id: Math.max(...faqs.map((f) => f.id)) + 1,
      question,
      answer,
      category,
      isActive: true,
      displayOrder: faqs.length + 1,
      tags: tags || [],
      views: 0,
      helpful: 0
    };

    faqs.push(newFaq);

    return NextResponse.json(newFaq, { status: 201 });
  } catch (error) {
    console.error("Error creating FAQ:", error);
    return NextResponse.json(
      { error: "Failed to create FAQ" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, question, answer, category, isActive, displayOrder, tags } =
    body;

    if (!id) {
      return NextResponse.json(
        { error: "FAQ ID is required" },
        { status: 400 }
      );
    }

    const faqIndex = faqs.findIndex((f) => f.id === id);
    if (faqIndex === -1) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    // Update the FAQ
    faqs[faqIndex] = {
      ...faqs[faqIndex],
      ...(question && { question }),
      ...(answer && { answer }),
      ...(category && { category }),
      ...(typeof isActive === "boolean" && { isActive }),
      ...(typeof displayOrder === "number" && { displayOrder }),
      ...(tags && { tags })
    };

    return NextResponse.json(faqs[faqIndex]);
  } catch (error) {
    console.error("Error updating FAQ:", error);
    return NextResponse.json(
      { error: "Failed to update FAQ" },
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
        { error: "FAQ ID is required" },
        { status: 400 }
      );
    }

    const faqIndex = faqs.findIndex((f) => f.id === id);
    if (faqIndex === -1) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    faqs.splice(faqIndex, 1);

    return NextResponse.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    return NextResponse.json(
      { error: "Failed to delete FAQ" },
      { status: 500 }
    );
  }
}