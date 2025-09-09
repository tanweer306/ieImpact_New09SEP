"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  TrendingDown,
  Zap,
  Shield,
  TrendingUp,
  Lock,
  Users,
  CheckCircle,
  Puzzle,
  DollarSign,
  BarChart3,
  Workflow,
  FileText,
  Database,
  PenTool,
  MapPin,
  Star,
  Award,
  Target,
  Menu,
  X,
  Send,
  Loader2,
  CheckCircle2,
  MessageCircle,
  Minimize2,
  Bot,
  User,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
  Mic,
  Paperclip } from
"lucide-react";

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

// FAQ Component
function FAQSection() {
  const [faqs, setFaqs] = useState<Array<{question: string;answer: string;}>>(
    []
  );
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Fallback FAQ data
  const fallbackFAQs = [
  {
    question: "What is your turn around time?",
    answer:
    "Our data entry team works around the clock 24/7 and 365 days a year. When placing a new order, you can choose an ETA of 6, 12, or 24 hours. Rush orders are processed within 6 hours for an extra $1.99. New customers' first three free orders may take up to 24 hours as we learn your style and regional data."
  },
  {
    question: "Do you perform UAD compliant appraisal data entry?",
    answer:
    "Yes we perform UAD-compliant data entry, e.g., UAD URAR 1004, Exterior Only SFR 2055, Condo 1073, Exterior Condo 1075, plus non-UAD forms like Multifamily 1025 and Manufactured homes upon request."
  },
  {
    question: "How much of an appraisal report do you fill in?",
    answer:
    "We fill in almost 95% of the manual data entry you'd do. We fill up to 9 comps per report. However, we don't fill valuation adjustments or pictures unless you provide clear instructions."
  },
  {
    question: "Which form filler software do you support?",
    answer:
    "We support TOTAL (a la mode), ACI Report (ACI), ClickFORMS (Bradford), and Appraise-It (SFREP)."
  },
  {
    question: "How do I use your service?",
    answer:
    "Register (no credit card required) → account verification via call → fill out 'Standard Instructions Tab' with style and sample reports → place order with template and data → receive completion notification and download (or email) of the final report."
  },
  {
    question: "Does this comply with USPAP?",
    answer:
    "Yes we follow USPAP guidelines. We don't calculate valuation numbers. We keep your data confidential, secure, and never share it. We hold TRUSTe, Norton/Symantec SSL protection, BBB membership, and E&O insurance. You're welcome to credit ieIMPACT as your assistant."
  }];


  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("/FAQs.json");
        if (response.ok) {
          const data = await response.json();
          // Show only first 6 FAQs on homepage
          setFaqs(data.slice(0, 6));
        } else {
          // Use fallback data if fetch fails
          setFaqs(fallbackFAQs);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        // Use fallback data if fetch fails
        setFaqs(fallbackFAQs);
      }
    };

    fetchFAQs();
  }, []);

  // Cleanup resize event listeners on component unmount
  useEffect(() => {
    return () => {
      if (isResizing) {
        setIsResizing(false);
      }
    };
  }, [isResizing]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto" data-oid="pepotpk">
      <div className="space-y-4" data-oid="3t-eja7">
        {faqs.map((faq, index) =>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          data-oid="jipfu1n">

            <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
            data-oid="52-8h1_">

              <h3
              className="text-lg font-semibold text-primary-900 pr-4"
              data-oid="r43rfzy">

                {faq.question}
              </h3>
              <motion.div
              animate={{ rotate: openFAQ === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              data-oid="6_i9hhr">

                <ChevronDown
                className="w-5 h-5 text-primary-600 flex-shrink-0"
                data-oid="3cx86xf" />

              </motion.div>
            </button>

            <AnimatePresence data-oid="oz4wuvz">
              {openFAQ === index &&
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              data-oid="26u8syw">

                  <div
                className="px-6 pb-4 text-gray-600 leading-relaxed"
                data-oid="acxtz:n">

                    {faq.answer}
                  </div>
                </motion.div>
            }
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* View All FAQs Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-8"
        data-oid="4zrdq5d">

        <motion.a
          href="/faqs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          data-oid="9_wd_tz">

          View All FAQs
          <ArrowRight className="w-4 h-4" data-oid="yk71lqe" />
        </motion.a>
      </motion.div>
    </div>);

}

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
  {
    id: 1,
    type: "bot",
    message:
    "Hi! I'm here to help you learn more about ieIMPACT's data entry services. How can I assist you today?",
    timestamp: new Date()
  }]
  );
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [showAudioRecordModal, setShowAudioRecordModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileMessage, setFileMessage] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioMessage, setAudioMessage] = useState("");
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);
  const [chatInput, setChatInput] = useState("");
  const [chatSize, setChatSize] = useState({ width: 320, height: 500 });
  const [isResizing, setIsResizing] = useState(false);
  const resizeRef = useRef({
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0
  });
  const sessionId = useRef(
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );

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
      // You could add error state handling here
      alert("Failed to submit form. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendChatMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user" as const,
      message: messageText,
      timestamp: new Date()
    };

    setChatMessages((prev) => [...prev, userMessage]);

    try {
      // Get webhook URL from environment variable
      const webhookUrl = process.env.NEXT_PUBLIC_CHATBOT_WEBHOOK_URL;

      if (
      webhookUrl &&
      webhookUrl !== "https://your-webhook-url-here.com/api/chat")
      {
        // Send message to webhook
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(process.env.NEXT_PUBLIC_CHATBOT_API_KEY && {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHATBOT_API_KEY}`
            })
          },
          body: JSON.stringify({
            type: "text_message",
            message: messageText,
            context: "ieIMPACT data entry services",
            timestamp: new Date().toISOString(),
            sessionId: sessionId.current
          })
        });

        if (response.ok) {
          const data = await response.json();
          const botMessage = {
            id: Date.now() + 1,
            type: "bot" as const,
            message:
            data.response ||
            data.message ||
            "I'm here to help with your data entry questions!",
            timestamp: new Date()
          };
          setChatMessages((prev) => [...prev, botMessage]);
        } else {
          throw new Error("Webhook response failed");
        }
      } else {
        // Fallback to simulated responses with specific answers for button clicks
        setTimeout(() => {
          let botResponse = "";

          if (messageText.toLowerCase().includes("pricing")) {
            botResponse =
            "Our pricing is very competitive! We offer transparent rates starting at $2.99 per report with volume discounts available. We also provide 3 free trial reports for new customers. Would you like me to send you our detailed pricing sheet?";
          } else if (messageText.toLowerCase().includes("turnaround")) {
            botResponse =
            "We offer flexible turnaround times: Standard (24 hours), Express (12 hours), and Rush (6 hours) for an additional $1.99. Our team works 24/7 to meet your deadlines. What's your typical timeline requirement?";
          } else if (messageText.toLowerCase().includes("software")) {
            botResponse =
            "We support all major appraisal software including TOTAL (a la mode), ACI Reports, ClickFORMS (Bradford), Appraise-It (SFREP), WinTOTAL, and Aurora. Which software are you currently using? We can seamlessly integrate with your workflow.";
          } else {
            const botResponses = [
            "Thanks for your question! Our data entry services can help streamline your appraisal workflow. Would you like to know more about our pricing?",
            "We process all types of appraisal data including inspection sheets, comps, and property details. What specific data entry needs do you have?",
            "Our team is available 24/7 with 99.9% accuracy guarantee. Would you like to schedule a free consultation?",
            "We're compatible with all major appraisal software. Which platform are you currently using?",
            "Great question! Our typical turnaround time is 2-4 hours. For urgent requests, we offer same-day service. Would you like to get started?"];


            botResponse =
            botResponses[Math.floor(Math.random() * botResponses.length)];
          }

          const botMessage = {
            id: Date.now() + 1,
            type: "bot" as const,
            message: botResponse,
            timestamp: new Date()
          };

          setChatMessages((prev) => [...prev, botMessage]);
        }, 1000);
      }
    } catch (error) {
      console.error("Chatbot webhook error:", error);

      // Fallback response on error
      const errorMessage = {
        id: Date.now() + 1,
        type: "bot" as const,
        message:
        "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at info@ieimpact.com for immediate assistance.",
        timestamp: new Date()
      };
      setChatMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const messageText = chatInput;
    setChatInput("");
    await sendChatMessage(messageText);
  };

  // Voice recording functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const audioChunks: BlobPart[] = [];
      let timer: NodeJS.Timeout;

      recorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        setRecordingBlob(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
        clearInterval(timer);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timer = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);

      setShowAudioRecordModal(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      alert("Unable to access microphone. Please check your permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      setMediaRecorder(null);
    }
  };

  const handleSendAudioMessage = async () => {
    if (!recordingBlob) return;

    setShowAudioRecordModal(false);
    await handleAudioMessage(recordingBlob, audioMessage);
    setAudioMessage("");
    setRecordingBlob(null);
    setRecordingTime(0);
  };

  const cancelAudioRecording = () => {
    if (isRecording) {
      stopRecording();
    }
    setShowAudioRecordModal(false);
    setAudioMessage("");
    setRecordingBlob(null);
    setRecordingTime(0);
  };

  const handleAudioMessage = async (audioBlob: Blob, message?: string) => {
    // Add user message indicating audio was sent
    const displayMessage = message ? `🎤 ${message}` : "🎤 Audio message sent";
    const audioMessage = {
      id: Date.now(),
      type: "user" as const,
      message: displayMessage,
      timestamp: new Date()
    };
    setChatMessages((prev) => [...prev, audioMessage]);

    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, "voice-message.wav");
      if (message) {
        formData.append("message", message);
      }

      // Add session info for webhook
      formData.append("sessionId", sessionId.current);
      formData.append("timestamp", new Date().toISOString());
      formData.append("type", "audio_message");

      const response = await fetch("/api/chat/audio", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage = {
          id: Date.now() + 1,
          type: "bot" as const,
          message: data.message,
          timestamp: new Date()
        };
        setChatMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("Audio processing failed");
      }
    } catch (error) {
      console.error("Error processing audio:", error);
      const errorMessage = {
        id: Date.now() + 1,
        type: "bot" as const,
        message:
        "I'm having trouble processing your audio message. Please try typing your message or call us at 408-256-0154.",
        timestamp: new Date()
      };
      setChatMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      setSelectedFile(fileArray[0]); // Keep for backward compatibility
      setShowFileUploadModal(true);
    }
    event.target.value = "";
  };

  const handleSendFileMessage = async () => {
    if (!selectedFiles.length) return;

    const fileNames = selectedFiles.map((f) => f.name).join(", ");
    const displayMessage = fileMessage ?
    `📎 ${fileMessage} (${selectedFiles.length} file${selectedFiles.length > 1 ? "s" : ""}: ${fileNames})` :
    `📎 ${selectedFiles.length} file${selectedFiles.length > 1 ? "s" : ""} uploaded: ${fileNames}`;

    // Add user message
    const userFileMessage = {
      id: Date.now(),
      type: "user" as const,
      message: displayMessage,
      timestamp: new Date()
    };
    setChatMessages((prev) => [...prev, userFileMessage]);

    setShowFileUploadModal(false);

    try {
      const formData = new FormData();

      // Append all files
      selectedFiles.forEach((file, index) => {
        formData.append(`files`, file);
      });

      if (fileMessage) {
        formData.append("message", fileMessage);
      }

      // Add session info for webhook
      formData.append("sessionId", sessionId.current);
      formData.append("timestamp", new Date().toISOString());
      formData.append("type", "file_upload");

      const response = await fetch("/api/chat/file", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage = {
          id: Date.now() + 1,
          type: "bot" as const,
          message: data.message,
          timestamp: new Date()
        };
        setChatMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("File processing failed");
      }
    } catch (error) {
      console.error("Error processing files:", error);
      const errorMessage = {
        id: Date.now() + 1,
        type: "bot" as const,
        message:
        "I'm having trouble processing your files. Please try again or email your documents to info@ieimpact.com.",
        timestamp: new Date()
      };
      setChatMessages((prev) => [...prev, errorMessage]);
    }

    // Reset states
    setSelectedFiles([]);
    setSelectedFile(null);
    setFileMessage("");
  };

  const cancelFileUpload = () => {
    setShowFileUploadModal(false);
    setSelectedFiles([]);
    setSelectedFile(null);
    setFileMessage("");
  };

  // Resize functionality
  const handleResizeStart = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    e.stopPropagation();

    const startResizing = () => {
      setIsResizing(true);

      resizeRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startWidth: chatSize.width,
        startHeight: chatSize.height
      };

      const handleMouseMove = (e: MouseEvent) => {
        const { startX, startY, startWidth, startHeight } = resizeRef.current;
        let newWidth = startWidth;
        let newHeight = startHeight;

        // Handle horizontal resizing
        if (direction.includes("right")) {
          newWidth = Math.max(
            280,
            Math.min(600, startWidth + (e.clientX - startX))
          );
        } else if (direction.includes("left")) {
          newWidth = Math.max(
            280,
            Math.min(600, startWidth - (e.clientX - startX))
          );
        }

        // Handle vertical resizing
        if (direction.includes("bottom")) {
          newHeight = Math.max(
            400,
            Math.min(800, startHeight + (e.clientY - startY))
          );
        } else if (direction.includes("top")) {
          newHeight = Math.max(
            400,
            Math.min(800, startHeight - (e.clientY - startY))
          );
        }

        setChatSize({ width: newWidth, height: newHeight });
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
      };

      // Prevent text selection during resize
      document.body.style.userSelect = "none";
      document.body.style.cursor =
      direction.includes("top") && direction.includes("left") ?
      "nw-resize" :
      direction.includes("top") && direction.includes("right") ?
      "ne-resize" :
      direction.includes("bottom") && direction.includes("left") ?
      "sw-resize" :
      direction.includes("bottom") && direction.includes("right") ?
      "se-resize" :
      direction.includes("top") || direction.includes("bottom") ?
      "ns-resize" :
      "ew-resize";

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    // Use requestAnimationFrame to ensure state updates properly
    requestAnimationFrame(startResizing);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-white"
      data-oid="_9e:i5.">

      {/* Navigation Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        data-oid="l7lp99h">

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="lxqm-oj">

          <div
            className="flex justify-between items-center h-16"
            data-oid="6zyxxnj">

            {/* Logo */}

            <div
              className="flex items-center"
              data-oid="c.ce126"
              key="olk-GHYR">

              <img
                src="/ieimpact.gif"
                alt="ieIMPACT Logo"
                className="h-10 w-auto"
                data-oid="_mhjoug" />

            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center space-x-8"
              data-oid="145kj0k"
              key="olk-R5F9">

              <a
                href="#services"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="liv5e9o">

                Services
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid=".u340b3">

                Benefits
              </a>
              <a
                href="/how-it-works"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid=":rp977l">

                How It Works
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="about-nav">

                About
              </a>
              <a
                href="/faqs"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="faqs-nav">

                FAQs
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="tr7m.4g">

                Contact
              </a>
              <motion.a
                href="https://secure.ieimpact.com/members/index.php"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 inline-block"
                data-oid="6c0e3.d">

                Login
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden" data-oid="ncjhw1:" key="olk-onkk">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="fet60ty">

                {isMenuOpen ?
                <X className="w-6 h-6" data-oid="uujh1kz" /> :

                <Menu className="w-6 h-6" data-oid="oa3b524" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen &&
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
            data-oid="vop3z82">

              <div className="flex flex-col space-y-4" data-oid="xq6m8ci">
                <a
                href="#services"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="c:qpfas">

                  Services
                </a>
                <a
                href="#benefits"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="vlp:yy9">

                  Benefits
                </a>
                <a
                href="/how-it-works"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="4i8fln3">

                  How It Works
                </a>
                <a
                href="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="about-nav-mobile">

                  About
                </a>
                <a
                href="/faqs"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="faqs-nav-mobile">

                  FAQs
                </a>
                <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                data-oid="bw-1bt.">

                  Contact
                </a>
                <button
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 w-full"
                data-oid="9psygm6">

                  Get Started
                </button>
              </div>
            </motion.div>
          }
        </div>
      </nav>

      <div className="pt-16" data-oid="i0j_u4c">
        {/* Hero Section */}
        <section className="relative overflow-hidden" data-oid="xrrsn51">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
            data-oid="_vv6b:l">

            <div
              className="grid lg:grid-cols-2 gap-12 items-center"
              data-oid="0hlui6o"
              key="olk-CxKT">

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
                data-oid=".uzg2u_">

                <div className="space-y-6" data-oid="0oj:ewn">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight"
                    data-oid="5qc-:k1">

                    Focus on Appraising.{" "}
                    <span className="text-primary-600" data-oid="hoe7qms">
                      We'll Handle the Data Entry.
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
                    data-oid="3n-kzy-">

                    24/7 professional data entry services for real estate
                    appraisers. Boost productivity, reduce costs, and deliver
                    faster results.
                  </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                  data-oid="m_nhzr9">

                  <motion.a
                    href="https://secure.ieimpact.com/members/register.php"
                    target="_blank"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    data-oid="v7wt-sm">

                    Free Trial
                    <ArrowRight
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      data-oid="lxr--7y" />

                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-primary-300 hover:border-primary-600 text-primary-700 hover:text-primary-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-white hover:bg-primary-50"
                    data-oid="_j9:br0">

                    Request Quote
                  </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200"
                  data-oid="e:ij.dr">

                  <div
                    className="flex items-center gap-2 text-gray-600"
                    data-oid="jtpm2:3">

                    <div
                      className="w-3 h-3 bg-success-500 rounded-full animate-pulse"
                      data-oid="58q1-9_">
                    </div>
                    <span className="font-medium" data-oid="ny3sjmr">
                      24/7 Available
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-gray-600"
                    data-oid="geji2yv">

                    <div
                      className="w-3 h-3 bg-warning-500 rounded-full"
                      data-oid="kfu7.f1">
                    </div>
                    <span className="font-medium" data-oid="yob2kpt">
                      99.9% Accuracy
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-gray-600"
                    data-oid="nu.o5cw">

                    <div
                      className="w-3 h-3 bg-primary-500 rounded-full"
                      data-oid="_64da:m">
                    </div>
                    <span className="font-medium" data-oid="7lsjq3m">
                      Trusted by 500+ Appraisers
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
                data-oid="qunubpb">

                <div className="relative z-10" data-oid="wekv5.s">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
                    data-oid="g40zud2">

                    {/* Mock Appraisal Interface */}
                    <div className="space-y-6" data-oid="69ri9fn">
                      <div
                        className="flex items-center justify-between"
                        data-oid="4fah_8e">

                        <h3
                          className="text-lg font-semibold text-primary-900"
                          data-oid="4dbik:l">

                          Appraisal Report #AR-2024-001
                        </h3>
                        <div
                          className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium"
                          data-oid="z4gt1ew">

                          Processing
                        </div>
                      </div>

                      <div
                        className="grid grid-cols-2 gap-4"
                        data-oid="m2xjsax">

                        <div className="space-y-2" data-oid="418ay_f">
                          <label
                            className="text-sm font-medium text-gray-700"
                            data-oid="501otkv">

                            Property Address
                          </label>
                          <div
                            className="h-3 bg-gray-200 rounded animate-pulse"
                            data-oid="cyxxe39">
                          </div>
                        </div>
                        <div className="space-y-2" data-oid="ab5oj-j">
                          <label
                            className="text-sm font-medium text-gray-700"
                            data-oid="2vhh3qd">

                            Square Footage
                          </label>
                          <div
                            className="h-3 bg-gray-200 rounded animate-pulse"
                            data-oid="g15:y36">
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2" data-oid=".9a8tth">
                        <label
                          className="text-sm font-medium text-gray-700"
                          data-oid="lsafbc6">

                          Comparable Properties
                        </label>
                        <div className="space-y-2" data-oid="p0upmo1">
                          <div
                            className="h-3 bg-primary-200 rounded"
                            data-oid="evhma74">
                          </div>
                          <div
                            className="h-3 bg-primary-200 rounded w-4/5"
                            data-oid="f.vy1ux">
                          </div>
                          <div
                            className="h-3 bg-primary-200 rounded w-3/5"
                            data-oid="q_630yi">
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center gap-2 pt-4"
                        data-oid="hta4rob">

                        <div
                          className="w-2 h-2 bg-success-500 rounded-full animate-pulse"
                          data-oid="jaon90t">
                        </div>
                        <span
                          className="text-sm text-success-700 font-medium"
                          data-oid="i-fxiwj">

                          Data entry in progress...
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Background Decorative Elements */}
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-warning-200 rounded-full opacity-20 animate-bounce-gentle"
                  data-oid="w1u-qdd">
                </div>
                <div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-success-200 rounded-full opacity-20 animate-bounce-gentle"
                  style={{ animationDelay: "1s" }}
                  data-oid="dvcm5h-">
                </div>
                <div
                  className="absolute top-1/2 -right-8 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-bounce-gentle"
                  style={{ animationDelay: "2s" }}
                  data-oid="cvbuqkg">
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10" data-oid="ue3n-_i">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary-50 via-transparent to-primary-100 opacity-50"
              data-oid="18vo6:5">
            </div>
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
              data-oid="jok7k9n">
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section
          className="py-20 lg:py-32 relative overflow-hidden"
          data-oid="69hz0va">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="4m7ab5l">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="kw3j9yy">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="61to85n">

                Stop Losing Time on Data Entry
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="qg7gogj">

                Every hour spent on data entry is an hour not spent growing your
                appraisal business
              </p>
            </motion.div>

            <div
              className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl"
              data-oid="db4-mg8">

              {/* Problem Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-12 text-white relative"
                data-oid="p75kk7n">

                <div className="relative z-10" data-oid="tyeszbu">
                  <div
                    className="flex items-center gap-3 mb-8"
                    data-oid="hg:c-1.">

                    <div
                      className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center"
                      data-oid="nbvkf6:">

                      <AlertTriangle
                        className="w-6 h-6 text-white"
                        data-oid="uybv56j" />

                    </div>
                    <h3
                      className="text-2xl lg:text-3xl font-bold"
                      data-oid="p86f5tu">

                      The Problem
                    </h3>
                  </div>

                  <div className="space-y-6" data-oid="89kvqkm">
                    <div className="flex items-start gap-4" data-oid="k41b9ey">
                      <div
                        className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                        data-oid="xlbu.-4">

                        <Clock
                          className="w-4 h-4 text-red-400"
                          data-oid="5.mkm-0" />

                      </div>
                      <div data-oid="v3rp8jw">
                        <h4
                          className="font-semibold text-lg mb-2"
                          data-oid="4xrrhc5">

                          Time-Consuming Process
                        </h4>
                        <p className="text-gray-300" data-oid="uzb:xn0">
                          Spending 3-5 hours per report on tedious data entry
                          instead of focusing on appraisal analysis
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4" data-oid="izv1y11">
                      <div
                        className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                        data-oid="88uwsfv">

                        <AlertTriangle
                          className="w-4 h-4 text-red-400"
                          data-oid="4-jvkun" />

                      </div>
                      <div data-oid="_-45o6u">
                        <h4
                          className="font-semibold text-lg mb-2"
                          data-oid="z8_sk43">

                          Error-Prone Manual Entry
                        </h4>
                        <p className="text-gray-300" data-oid="x:kek.a">
                          Human errors in data input leading to report revisions
                          and client dissatisfaction
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4" data-oid="qc4zcek">
                      <div
                        className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                        data-oid=":jnhoa_">

                        <TrendingDown
                          className="w-4 h-4 text-red-400"
                          data-oid="lwb.n5d" />

                      </div>
                      <div data-oid="5n.ejho">
                        <h4
                          className="font-semibold text-lg mb-2"
                          data-oid="xwku77:">

                          Limited Growth Potential
                        </h4>
                        <p className="text-gray-300" data-oid="4ydo17r">
                          Unable to take on more clients due to administrative
                          bottlenecks
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-8 p-6 bg-gray-700/50 rounded-lg border border-gray-600"
                    data-oid="lc4dq4t">

                    <div className="text-center" data-oid="oiw_54g">
                      <div
                        className="text-3xl font-bold text-red-400 mb-2"
                        data-oid=":zf8z6g">

                        3-5 Hours
                      </div>
                      <div className="text-gray-300" data-oid="xo64vl.">
                        Wasted per report on data entry
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Solution Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-success-50 to-primary-50 p-8 lg:p-12 relative"
                data-oid="v-_qv0l">

                <div className="relative z-10" data-oid="f5m_og:">
                  <div
                    className="flex items-center gap-3 mb-8"
                    data-oid="nqk1-wv">

                    <div
                      className="w-12 h-12 bg-success-500 rounded-lg flex items-center justify-center"
                      data-oid="7mol4tc">

                      <CheckCircle
                        className="w-6 h-6 text-white"
                        data-oid="z_opxfk" />

                    </div>
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-primary-900"
                      data-oid="4v2vayh">

                      The Solution
                    </h3>
                  </div>

                  <div className="space-y-6" data-oid="z2ilj0y">
                    <div className="flex items-start gap-4" data-oid="wv2i.-3">
                      <div
                        className="w-8 h-8 bg-success-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                        data-oid="6rc4jdx">

                        <Zap
                          className="w-4 h-4 text-success-600"
                          data-oid="asxjamp" />

                      </div>
                      <div data-oid="3rs12iz">
                        <h4
                          className="font-semibold text-lg mb-2 text-primary-900"
                          data-oid="f0v.wz.">

                          Lightning-Fast Processing
                        </h4>
                        <p className="text-gray-700" data-oid="26bkncr">
                          Professional data entry experts complete your reports
                          in minutes, not hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4" data-oid="1jmpyuw">
                      <div
                        className="w-8 h-8 bg-success-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                        data-oid="ocx2mkz">

                        <Shield
                          className="w-4 h-4 text-success-600"
                          data-oid="hkvl7xd" />

                      </div>
                      <div data-oid="e8jj.f1">
                        <h4
                          className="font-semibold text-lg mb-2 text-primary-900"
                          data-oid="j1vg1wd">

                          99.9% Accuracy Guarantee
                        </h4>
                        <p className="text-gray-700" data-oid="sen7jbi">
                          Rigorous quality control processes ensure error-free
                          data entry every time
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4" data-oid="i2v9et6">
                      <div
                        className="w-8 h-8 bg-success-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                        data-oid="e56c:.s">

                        <TrendingUp
                          className="w-4 h-4 text-success-600"
                          data-oid="_nxpud6" />

                      </div>
                      <div data-oid="gmpb6iz">
                        <h4
                          className="font-semibold text-lg mb-2 text-primary-900"
                          data-oid="p4xnipk">

                          Scale Your Business
                        </h4>
                        <p className="text-gray-700" data-oid="5m_3cyj">
                          Take on more clients without hiring additional staff
                          or working longer hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-8 grid grid-cols-2 gap-4"
                    data-oid="byda0oj">

                    <div
                      className="p-4 bg-white rounded-lg shadow-md border border-success-200"
                      data-oid="9dy97o1">

                      <div className="text-center" data-oid="f3x:ce6">
                        <div
                          className="text-2xl font-bold text-success-600 mb-1"
                          data-oid="kbppvzv">

                          75%
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="9ae0tob">

                          Time Savings
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-4 bg-white rounded-lg shadow-md border border-primary-200"
                      data-oid="ffr8hyw">

                      <div className="text-center" data-oid="x1ljjnq">
                        <div
                          className="text-2xl font-bold text-primary-600 mb-1"
                          data-oid="djh59pg">

                          Fast
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="ypv8e__">

                          Turnaround
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div
            className="absolute inset-0 -z-10 bg-gray-50"
            data-oid="bu88apn">
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 lg:py-32 bg-white"
          data-oid="zj2hhha">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="93bdhae">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="y._sl3x">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="ne7hxfb">

                Comprehensive Data Entry Services
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="3_r2aj4">

                We handle all types of appraisal data with precision and speed
              </p>
            </motion.div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
              data-oid="fcs.a2r">

              {[
              {
                icon: FileText,
                title: "Inspection Sheets",
                description:
                "Complete property inspection data entry with detailed accuracy"
              },
              {
                icon: Database,
                title: "Subject Information",
                description:
                "Property details, measurements, and characteristics"
              },
              {
                icon: BarChart3,
                title: "Comparable Properties",
                description:
                "Comp analysis data and market research information"
              },
              {
                icon: MapPin,
                title: "Property Listings",
                description:
                "MLS data, property descriptions, and listing details"
              },
              {
                icon: PenTool,
                title: "Sketches & Diagrams",
                description:
                "Floor plans, property sketches, and technical drawings"
              },
              {
                icon: Target,
                title: "Custom Reports",
                description:
                "Specialized data entry for unique appraisal requirements"
              }].
              map((service, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:border-primary-200 transition-all duration-300 group"
                data-oid="h561qo6">

                  <div
                  className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
                  data-oid="4_0vodb">

                    <service.icon
                    className="w-6 h-6 text-primary-600"
                    data-oid="jixw3so" />

                  </div>
                  <h4
                  className="text-lg font-semibold text-primary-900 mb-2"
                  data-oid=":ag5n5g">

                    {service.title}
                  </h4>
                  <p
                  className="text-gray-600 text-sm leading-relaxed"
                  data-oid="kraru8g">

                    {service.description}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Software Compatibility */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white"
              data-oid="zx:y0z1">

              <div className="text-center mb-8" data-oid="zraldd0">
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-4"
                  data-oid="rnva:62">

                  Compatible with All Major Software
                </h3>
                <p className="text-xl text-primary-100" data-oid="j2ksbc3">
                  Seamless integration with your existing appraisal workflow
                </p>
              </div>

              <div
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
                data-oid="8pr:7ix">

                {[
                "a la mode",
                "WinTOTAL",
                "Aurora",
                "TOTAL 2013",
                "ACI Reports",
                "SFREP",
                "AppraiseIT",
                "ClickFORMS"].
                map((software, index) =>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                  data-oid="6sbdpy1">

                    <span className="text-sm font-medium" data-oid="l6ad:5_">
                      {software}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="py-20 lg:py-32 bg-gray-50"
          data-oid="2571ne7">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="13nf-_t">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="t.61p9l">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="bp4gy1_">

                Benefits That Drive Results
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="_licena">

                Discover how ieIMPACT transforms your appraisal business
                operations
              </p>
            </motion.div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-oid="1s-oyk1">

              {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description:
                "Never miss a deadline with round-the-clock service availability",
                stat: "24/7",
                statLabel: "Service"
              },
              {
                icon: Shield,
                title: "Accuracy & Quality",
                description:
                "Rigorous quality control ensures 99.9% accuracy on every report",
                stat: "99.9%",
                statLabel: "Accuracy"
              },
              {
                icon: DollarSign,
                title: "Cost Reduction",
                description:
                "Save up to 60% compared to hiring full-time data entry staff",
                stat: "60%",
                statLabel: "Savings"
              },
              {
                icon: Zap,
                title: "Faster Turnaround",
                description:
                "Complete reports 75% faster with professional data entry",
                stat: "75%",
                statLabel: "Faster"
              },
              {
                icon: BarChart3,
                title: "Scalability",
                description:
                "Handle unlimited volume without capacity constraints",
                stat: "∞",
                statLabel: "Capacity"
              },
              {
                icon: Award,
                title: "Professional Excellence",
                description:
                "Trained experts with years of appraisal industry experience",
                stat: "10+",
                statLabel: "Years"
              }].
              map((benefit, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                data-oid="1t.2mz1">

                  <div
                  className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                  data-oid="p81w9ly">

                    <benefit.icon
                    className="w-8 h-8 text-primary-600"
                    data-oid="ytsp3uj" />

                  </div>

                  <h3
                  className="text-xl font-bold text-primary-900 mb-3"
                  data-oid="o1agfmf">

                    {benefit.title}
                  </h3>
                  <p
                  className="text-gray-600 mb-6 leading-relaxed"
                  data-oid="z7pdyb2">

                    {benefit.description}
                  </p>

                  <div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full"
                  data-oid="1jqkx3h">

                    <span
                    className="text-2xl font-bold text-primary-600"
                    data-oid="xeya-h2">

                      {benefit.stat}
                    </span>
                    <span
                    className="text-sm font-medium text-primary-700"
                    data-oid="bv4nub8">

                      {benefit.statLabel}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-20 lg:py-32 bg-white" data-oid="eksstbu">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="5-uew_a">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="bnjfb1-">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="8pnkpuy">

                Trusted by Industry Leaders
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="y8r2n7u">

                Join hundreds of satisfied appraisers who trust ieIMPACT with
                their data entry needs
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-16" data-oid="d3.kpwg">
              {[
              { number: "10+", label: "Years Experience", icon: Award },
              {
                number: "50,000+",
                label: "Reports Processed",
                icon: FileText
              },
              { number: "500+", label: "Happy Clients", icon: Users },
              { number: "99.9%", label: "Client Satisfaction", icon: Star }].
              map((stat, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-oid="d9pycjz">

                  <div
                  className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  data-oid="athbwxb">

                    <stat.icon
                    className="w-8 h-8 text-primary-600"
                    data-oid="fp6z6ph" />

                  </div>
                  <div
                  className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2"
                  data-oid="z_b4a._">

                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium" data-oid="6rgd:3k">
                    {stat.label}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-success-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
              data-oid="ceqlj2g">

              <div className="relative z-10 text-center" data-oid="a9_l30b">
                <div className="flex justify-center mb-6" data-oid="jwpkak9">
                  {[...Array(5)].map((_, i) =>
                  <Star
                    key={i}
                    className="w-6 h-6 text-warning-500 fill-current"
                    data-oid="at6rui0" />

                  )}
                </div>
                <blockquote
                  className="text-xl lg:text-2xl text-gray-800 font-medium mb-6 italic"
                  data-oid="r:c:zty">

                  "Thank you for all the great service, I appreciate the hard
                  work and detailed files you assist my company with daily. Keep
                  up the great work."
                </blockquote>
                <div
                  className="text-primary-700 font-semibold"
                  data-oid="hq9n63t">

                  - Verified ieIMPACT Client
                </div>

                {/* Testimonials Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-6"
                  data-oid=":oik7d2">

                  <motion.a
                    href="/reviews"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-oid="vnn1k:v">

                    <Star className="w-5 h-5 fill-current" data-oid="r0ejun5" />
                    View All Testimonials
                    <ArrowRight className="w-4 h-4" data-oid="x9m8s1s" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-20 lg:py-32 bg-gray-50"
          data-oid="y3w8w7g">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="iwj2ofp">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="u2v.qi7">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="dh62u53">

                How It Works
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="wl91:yx">

                Simple, streamlined process to get your data entry completed
                quickly
              </p>
            </motion.div>

            <div className="space-y-12" data-oid="9bg6vna">
              {[
              {
                step: "01",
                title: "Submit Your Data Requirements",
                description:
                "Upload your inspection sheets, property details, or any data that needs to be entered. Our secure portal accepts all file formats.",
                icon: FileText
              },
              {
                step: "02",
                title: "Our Experts Process Your Information",
                description:
                "Trained professionals with appraisal expertise carefully enter your data with rigorous quality control at every step.",
                icon: Users
              },
              {
                step: "03",
                title: "Receive Accurate, Formatted Reports",
                description:
                "Get your completed reports back in your preferred format, ready for client delivery. Fast, accurate, and professional.",
                icon: CheckCircle
              }].
              map((step, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                data-oid="01y:gbw">

                  <div
                  className="flex items-center gap-4 mb-4"
                  data-oid="m6-.yx6">

                    <div
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
                    data-oid="-di2-nl">

                      <step.icon
                      className="w-6 h-6 text-primary-600"
                      data-oid="rna:6p6" />

                    </div>
                    <span
                    className="text-3xl font-bold text-primary-600"
                    data-oid="_9s28yo">

                      {step.step}
                    </span>
                  </div>
                  <h3
                  className="text-xl font-bold text-primary-900 mb-3"
                  data-oid="2k_ufic">

                    {step.title}
                  </h3>
                  <p
                  className="text-gray-600 leading-relaxed"
                  data-oid="ajlaoov">

                    {step.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section
          id="contact"
          className="py-20 lg:py-32 bg-white"
          data-oid="s:98amg">

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="8aukaw8">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
              data-oid="010t8wq">

              <h2
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                data-oid="kmr:9a8">

                Transform Your Appraisal Business Today
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                data-oid="nzs0xny">

                Ready to boost productivity and reduce costs? Get started with
                ieIMPACT's professional data entry services.
              </p>
            </motion.div>

            <div
              className="grid lg:grid-cols-2 gap-12 items-start"
              data-oid="ugi-vxt">

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border border-primary-100"
                data-oid="2b_5a-_">

                <h3
                  className="text-2xl font-bold text-primary-900 mb-6"
                  data-oid=".rqfo.6">

                  Get Your Free Quote
                </h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-oid="-lt6-sh">

                  <div className="grid md:grid-cols-2 gap-4" data-oid="tq:-6p:">
                    {/* Name Field */}
                    <div data-oid="hb:n2cr">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="ir.ghfj">

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
                        data-oid="8.y7qj:" />


                      <AnimatePresence data-oid="qk2k1me">
                        {errors.name &&
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          data-oid="tcx_nt8">

                            <AlertTriangle
                            className="w-4 h-4"
                            data-oid="2h1nvk1" />


                            {errors.name.message}
                          </motion.p>
                        }
                      </AnimatePresence>
                    </div>

                    {/* Email Field */}
                    <div data-oid="_cz05vf">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="flm5:i5">

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
                        data-oid="07d9oqe" />


                      <AnimatePresence data-oid="f_9.7y7">
                        {errors.email &&
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          data-oid="xef:-mk">

                            <AlertTriangle
                            className="w-4 h-4"
                            data-oid="hvsjbzs" />


                            {errors.email.message}
                          </motion.p>
                        }
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4" data-oid="h9t9o_5">
                    {/* Phone Field */}
                    <div data-oid="8xl_s5j">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid=".-11_wd">

                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="(555) 123-4567"
                        data-oid="2guc4w5" />

                    </div>

                    {/* Company Field */}
                    <div data-oid="r0kmcy2">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="hfznf-7">

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
                        data-oid="vhml8ce" />


                      <AnimatePresence data-oid="wk6q83u">
                        {errors.company &&
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          data-oid="fk_8wcx">

                            <AlertTriangle
                            className="w-4 h-4"
                            data-oid="dkw-x3k" />


                            {errors.company.message}
                          </motion.p>
                        }
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div data-oid="9y_nn0k">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      data-oid="a7m-o80">

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
                      data-oid="ectryiu" />


                    <div
                      className="flex justify-between items-center mt-1"
                      data-oid="qz3:1f.">

                      <AnimatePresence data-oid="78jpkf0">
                        {errors.message &&
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm flex items-center gap-1"
                          data-oid="u61fcv4">

                            <AlertTriangle
                            className="w-4 h-4"
                            data-oid=":u27-2j" />


                            {errors.message.message}
                          </motion.p>
                        }
                      </AnimatePresence>
                      <span
                        className="text-sm text-gray-500"
                        data-oid="c081iaj">

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
                    data-oid="d5-rvne">

                    {isSubmitting ?
                    <>
                        <Loader2
                        className="w-5 h-5 animate-spin"
                        data-oid="ucpuwpb" />

                        Sending Message...
                      </> :

                    <>
                        Send Message
                        <Send className="w-5 h-5" data-oid="0dn4lhx" />
                      </>
                    }
                  </motion.button>

                  {/* Form Status Indicator */}
                  <div className="text-center" data-oid="1d6j.cf">
                    <p className="text-sm text-gray-500" data-oid="j.0qx9z">
                      We'll respond within 24 hours • 100% confidential
                    </p>
                  </div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
                data-oid="w.1iqt7">

                <div data-oid="nnx-2at">
                  <h3
                    className="text-2xl font-bold text-primary-900 mb-6"
                    data-oid="7.ajpph">

                    Get In Touch
                  </h3>
                  <p
                    className="text-gray-600 text-lg leading-relaxed mb-8"
                    data-oid="zay10t1">

                    Ready to streamline your appraisal workflow? Contact us
                    today for a free consultation and discover how ieIMPACT can
                    transform your business.
                  </p>
                </div>

                <div className="space-y-6" data-oid="..ixskk">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                    data-oid="zh.ikrt">

                    <div
                      className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
                      data-oid="trhn.xx">

                      <Phone
                        className="w-6 h-6 text-primary-600"
                        data-oid="veo57sl" />

                    </div>
                    <div data-oid="b-7du6n">
                      <div
                        className="font-semibold text-primary-900"
                        data-oid="0.9j0kn">

                        Phone
                      </div>
                      <div className="text-gray-600" data-oid="ksj9zi7">
                        408-256-0154
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                    data-oid="jhuli5z">

                    <div
                      className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center"
                      data-oid="sfj-p1k">

                      <Mail
                        className="w-6 h-6 text-success-600"
                        data-oid="y.4jfsh" />

                    </div>
                    <div data-oid="_tteg:-">
                      <div
                        className="font-semibold text-primary-900"
                        data-oid="go.7td.">

                        Email
                      </div>
                      <div className="text-gray-600" data-oid="ilxhhip">
                        info@ieimpact.com
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                    data-oid="uaoei9b">

                    <div
                      className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center"
                      data-oid="z1hwgon">

                      <Clock
                        className="w-6 h-6 text-warning-600"
                        data-oid="l255by9" />

                    </div>
                    <div data-oid="1hqg4:c">
                      <div
                        className="font-semibold text-primary-900"
                        data-oid="n2hipt4">

                        Hours
                      </div>
                      <div className="text-gray-600" data-oid="pe7ehb4">
                        24/7 Available
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Emergency CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-success-600 to-success-700 rounded-xl p-6 text-white"
                  data-oid="qda:gt4">

                  <h4 className="text-xl font-bold mb-2" data-oid="er5szl6">
                    Need Urgent Data Entry?
                  </h4>
                  <p className="text-success-100 mb-4" data-oid="-dq5hqg">
                    Rush orders available with same-day turnaround
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-success-700 hover:text-success-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                    data-oid="pi9q4t.">

                    Call Now: 408-256-0154
                    <Phone className="w-4 h-4" data-oid="6n9z.gc" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary-900 text-white py-16" data-oid="5tqt08g">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-oid="o579sli">

            <div className="grid md:grid-cols-4 gap-8 mb-12" data-oid="rcss1g_">
              {/* Company Info */}
              <div className="md:col-span-2" data-oid="n9z.jul">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  data-oid="43rt3dj">

                  <h3 className="text-3xl font-bold mb-4" data-oid="g__ugpi">
                    ieIMPACT
                  </h3>
                  <p
                    className="text-primary-200 mb-6 leading-relaxed text-lg"
                    data-oid="tbrhch7">

                    Professional data entry services for real estate appraisers.
                    Boost productivity, reduce costs, and deliver faster results
                    with our 24/7 expert team.
                  </p>
                  <div
                    className="flex items-center gap-2 mb-6"
                    data-oid="8p:rjcj">

                    <div
                      className="w-3 h-3 bg-success-500 rounded-full animate-pulse"
                      data-oid="9vh9ptp">
                    </div>
                    <span
                      className="text-primary-200 font-medium"
                      data-oid="yd73lzt">

                      Available 24/7
                    </span>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex items-center gap-4" data-oid="a0k:fkf">
                    <span
                      className="text-primary-300 text-sm"
                      data-oid="912y7f_">

                      Follow us:
                    </span>
                    <div className="flex gap-3" data-oid=".gx-rg6">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                        data-oid="0z01uz9">

                        <Facebook className="w-5 h-5" data-oid="c_c.m.y" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                        data-oid="7lh44xk">

                        <Twitter className="w-5 h-5" data-oid="wf21q7h" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                        data-oid="xn5xtam">

                        <Linkedin className="w-5 h-5" data-oid="u03iz82" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
                        data-oid="67n6yrt">

                        <Instagram className="w-5 h-5" data-oid="586x1.4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Services */}
              <div data-oid="co8ox5:">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  data-oid="v5zyrcj">

                  <h4 className="text-lg font-semibold mb-4" data-oid="9h-8v5_">
                    Services
                  </h4>
                  <ul className="space-y-3" data-oid="fyocf3c">
                    <li data-oid="33zqg7x">
                      <a
                        href="#services"
                        className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                        data-oid="dierz08">

                        <FileText className="w-4 h-4" data-oid=":zcww04" />
                        Inspection Sheets
                      </a>
                    </li>
                    <li data-oid="x5.fe9n">
                      <a
                        href="#services"
                        className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                        data-oid="rcpzsb0">

                        <Database className="w-4 h-4" data-oid="7hfzx.k" />
                        Subject Information
                      </a>
                    </li>
                    <li data-oid="e5n5rcx">
                      <a
                        href="#services"
                        className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                        data-oid="r0m1cgq">

                        <BarChart3 className="w-4 h-4" data-oid="8wv05-i" />
                        Comparable Properties
                      </a>
                    </li>
                    <li data-oid="80p.aeh">
                      <a
                        href="#services"
                        className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                        data-oid="7t0-i3k">

                        <PenTool className="w-4 h-4" data-oid="pdh7vdy" />
                        Sketches & Diagrams
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Company */}
              <div data-oid=":hk9.8a">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  data-oid="glx3s2d">

                  <h4 className="text-lg font-semibold mb-4" data-oid="9t2:4nc">
                    Company
                  </h4>
                  <ul className="space-y-3" data-oid="4eglcib">
                    <li data-oid="g758qc9">
                      <a
                        href="/about"
                        className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                        data-oid="ynjbcjo">

                        <ExternalLink className="w-4 h-4" data-oid="y48dm9t" />
                        About Us
                      </a>
                    </li>
                    <li data-oid="x_qb0_g">
                      <a
                        href="#"
                        className="text-primary-200 hover:text-white transition-colors"
                        data-oid="ed2drdm">

                        Privacy Policy
                      </a>
                    </li>
                    <li data-oid=".-3:gz4">
                      <a
                        href="#"
                        className="text-primary-200 hover:text-white transition-colors"
                        data-oid="qwm-sm2">

                        Terms of Service
                      </a>
                    </li>
                    <li data-oid="-gm-eel">
                      <a
                        href="#"
                        className="text-primary-200 hover:text-white transition-colors flex items-center gap-2"
                        data-oid="4:tedq0">

                        <Shield className="w-4 h-4" data-oid="zb2t9m2" />
                        Security
                      </a>
                    </li>
                    <li data-oid="5__ewd6">
                      <a
                        href="#contact"
                        className="text-primary-200 hover:text-white transition-colors"
                        data-oid="irhrt64">

                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Contact Information Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-primary-800 rounded-xl p-6 mb-8"
              data-oid="c_:d_l4">

              <div
                className="grid md:grid-cols-3 gap-6 text-center md:text-left"
                data-oid="gkzk4dm">

                <div
                  className="flex items-center justify-center md:justify-start gap-3"
                  data-oid="r4:jwiu">

                  <div
                    className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center"
                    data-oid="rbvu28t">

                    <Phone
                      className="w-6 h-6 text-primary-200"
                      data-oid="owdzjs:" />

                  </div>
                  <div data-oid="xh6xrq0">
                    <div
                      className="font-semibold text-white"
                      data-oid="w0wtnf5">

                      Call Us
                    </div>
                    <div className="text-primary-200" data-oid="shwdm_4">
                      408-256-0154
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center md:justify-start gap-3"
                  data-oid="1p82p9h">

                  <div
                    className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center"
                    data-oid="lmm57t0">

                    <Mail
                      className="w-6 h-6 text-primary-200"
                      data-oid=".0bd_we" />

                  </div>
                  <div data-oid="hy4ejrz">
                    <div
                      className="font-semibold text-white"
                      data-oid="wmcbiyi">

                      Email Us
                    </div>
                    <div className="text-primary-200" data-oid="onxssn.">
                      info@ieimpact.com
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center md:justify-start gap-3"
                  data-oid="e581_r8">

                  <div
                    className="w-12 h-12 bg-success-600 rounded-lg flex items-center justify-center"
                    data-oid="w..ugd6">

                    <Clock className="w-6 h-6 text-white" data-oid="-o6xgf6" />
                  </div>
                  <div data-oid="w9lk66g">
                    <div
                      className="font-semibold text-white"
                      data-oid="ba-1bvp">

                      Always Available
                    </div>
                    <div className="text-success-200" data-oid="l802798">
                      24/7 Support
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications & Payment Methods */}
            <div
              className="border-t border-primary-800 pt-8 mb-8"
              data-oid="cert-section">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
                data-oid="cert-container">

                <h4
                  className="text-lg font-semibold text-white mb-6"
                  data-oid="cert-title">

                  Trusted & Certified
                </h4>

                {/* Certification Logos Grid */}
                <div
                  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8"
                  data-oid="cert-grid">

                  {[
                  {
                    name: "PCI DSS Validated",
                    alt: "PCI DSS Compliance",
                    image: "/PCI-DSS.png"
                  },
                  {
                    name: "TRUSTe Certified",
                    alt: "TRUSTe Privacy Certification",
                    image: "/TRUSTe.png"
                  },
                  {
                    name: "D&B D-U-N-S",
                    alt: "D&B D-U-N-S Registered",
                    image: "/duns.png"
                  },
                  {
                    name: "MasterCard",
                    alt: "MasterCard Accepted",
                    image: "/MasterCard.png"
                  },
                  {
                    name: "VISA",
                    alt: "VISA Card Accepted",
                    image: "/VISA.png"
                  },
                  {
                    name: "AMEX",
                    alt: "American Express Accepted",
                    image: "/AMEX.png"
                  },
                  {
                    name: "DTS-COVER",
                    alt: "DTS Coverage",
                    image: "/DISCOVER.png"
                  },
                  {
                    name: "PayPal",
                    alt: "PayPal Accepted",
                    image: "/PayPall.png"
                  }].
                  map((cert, index) =>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center min-h-[60px]"
                    data-oid={`cert-${index}`}
                    data-oid="53z7wub"
                    data-oid=":yj8m5w"
                    data-oid="6lo1jl."
                    data-oid="3zibq7b"
                    data-oid="202roc2"
                    data-oid="3b:pa9t"
                    data-oid="9wvldf0"
                    data-oid="jgs4whm"
                    data-oid="jianbe6"
                    data-oid="bllu.00"
                    data-oid="m4llf2h"
                    data-oid="_kuxuhz"
                    data-oid="3i9zbjl"
                    data-oid="o5_a2_y"
                    data-oid="f3wzvd3"
                    data-oid="d3vr-oe"
                    data-oid="y5atmj8"
                    data-oid="s-me6sr"
                    data-oid="i2re822"
                    data-oid="h51rb2x"
                    data-oid="gy8ihn:"
                    data-oid="6rn.56b"
                    data-oid="rl724h6"
                    data-oid="mmx4w9o"
                    data-oid="6x4rvpi"
                    data-oid="y37v19d"
                    data-oid="mrvs6bn"
                    data-oid="3lp:zs4"
                    data-oid="i6n.z18"
                    data-oid="60tloq-"
                    data-oid="3gsrj7u"
                    data-oid="ojbmrhw"
                    data-oid="dytrxlq"
                    data-oid="u8bxhz7"
                    data-oid="x_hvj86"
                    data-oid="vwz9m7z"
                    data-oid="zcvt5rz"
                    data-oid="q81-mzs"
                    data-oid="xw9joqe"
                    data-oid="f3.pdsf"
                    data-oid="j__dm21"
                    data-oid="ynl7pu6"
                    data-oid="m125m:l"
                    data-oid="pzx7eb7"
                    data-oid="girpwk6"
                    data-oid="0633syg"
                    data-oid="ehx3rc8"
                    data-oid="7101i7a"
                    data-oid="u8umtih"
                    data-oid="imog4n-"
                    data-oid="vyv4wi9"
                    data-oid="zo__x7d"
                    data-oid="rj-rkwi"
                    data-oid="aggttfe"
                    data-oid="77y0-of"
                    data-oid="i6_ppq0"
                    data-oid="_05gzrs"
                    data-oid="7wkvrca"
                    data-oid="rr.sn2s"
                    data-oid="bks9bpc"
                    data-oid="9y6476d"
                    data-oid="8mxjzdw"
                    data-oid="05sj9hl">

                      {cert.image ?
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className="h-full w-full object-contain rounded-lg border border-gray-300"
                      data-oid=":wfdu4." /> :


                    <div
                      className="w-full h-8 bg-white/20 rounded flex items-center justify-center"
                      data-oid=":wsgwh4">

                          <span
                        className="text-xs text-white/80 font-medium text-center px-1"
                        data-oid="ocidx.q">

                            {cert.name}
                          </span>
                        </div>
                    }
                    </motion.div>
                  )}
                </div>

                <p className="text-primary-300 text-sm" data-oid="amv4rf4">
                  Secure, compliant, and trusted by industry standards
                </p>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <div
              className="border-t border-primary-800 pt-8"
              data-oid="6:_g55j">

              <div
                className="flex flex-col md:flex-row justify-between items-center gap-4"
                data-oid="bf:eb9r">

                <div
                  className="text-primary-300 text-center md:text-left"
                  data-oid="54:rgu3">

                  <p data-oid="_a-axan">
                    © 2024 ieIMPACT. All rights reserved.
                  </p>
                  <p className="text-sm mt-1" data-oid="hyvciz8">
                    Professional Real Estate Appraisal Data Entry Services
                  </p>
                </div>

                <div className="flex items-center gap-6" data-oid="rt5e7.t">
                  <div className="flex items-center gap-2" data-oid="1rqqpk:">
                    <Shield
                      className="w-4 h-4 text-success-400"
                      data-oid="jswb9m1" />


                    <span
                      className="text-primary-200 text-sm"
                      data-oid="38edrwm">

                      SSL Secured
                    </span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="hkotq-5">
                    <Award
                      className="w-4 h-4 text-warning-400"
                      data-oid="lj_amoi" />


                    <span
                      className="text-primary-200 text-sm"
                      data-oid="sqe:xk9">

                      Industry Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50" data-oid="y.a6ge5">
        <AnimatePresence data-oid="te:t:rp">
          {isChatOpen &&
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden relative ${
            isResizing ? "select-none cursor-grabbing" : "select-none"}`
            }
            style={{
              width: `${chatSize.width}px`,
              height: `${chatSize.height}px`,
              minWidth: "280px",
              minHeight: "400px",
              maxWidth: "600px",
              maxHeight: "800px"
            }}
            data-oid="hqse-qh">

              {/* Chat Header */}
              <div
              className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-white"
              data-oid="ox1jv4t">

                <div
                className="flex items-center justify-between"
                data-oid="5wy60dg">

                  <div className="flex items-center gap-3" data-oid="5e1a_zf">
                    <div
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                    data-oid="0.qbc0_">

                      <Bot className="w-5 h-5" data-oid="8puyp_h" />
                    </div>
                    <div data-oid="x7a96tz">
                      <h4 className="font-semibold" data-oid="r35as_b">
                        ieIMPACT Assistant
                      </h4>
                      <div
                      className="flex items-center gap-1 text-xs text-primary-100"
                      data-oid="zxng_.m">

                        <div
                        className="w-2 h-2 bg-success-400 rounded-full animate-pulse"
                        data-oid="god83n.">
                      </div>
                        Online
                      </div>
                    </div>
                  </div>
                  <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  data-oid="n98erth">

                    <Minimize2 className="w-5 h-5" data-oid=":cdqvad" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div
              className="flex-1 p-4 overflow-y-auto space-y-4"
              data-oid="didyyxz">

                {chatMessages.map((message) =>
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                data-oid="8n_qal7">

                    {message.type === "bot" &&
                <div
                  className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"
                  data-oid="co1yauv">

                        <Bot
                    className="w-4 h-4 text-primary-600"
                    data-oid="da2-9xr" />

                      </div>
                }
                    <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.type === "user" ?
                  "bg-primary-600 text-white" :
                  "bg-gray-100 text-gray-800"}`
                  }
                  data-oid="-5ef456">

                      <p className="text-sm" data-oid="c:qugha">
                        {message.message}
                      </p>
                    </div>
                    {message.type === "user" &&
                <div
                  className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0"
                  data-oid="w4iqfbm">

                        <User
                    className="w-4 h-4 text-white"
                    data-oid="rd:5-dt" />

                      </div>
                }
                  </motion.div>
              )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200" data-oid="m::zoj_">
                {/* Voice and File Controls */}
                <div className="flex gap-2 mb-3" data-oid="z7cly:3">
                  <motion.button
                  type="button"
                  onClick={startRecording}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-300"
                  title="Record voice message"
                  data-oid="voice-btn">

                    <Mic className="w-4 h-4" data-oid="au6tivg" />
                  </motion.button>

                  <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.xls,.xlsx"
                  className="hidden"
                  data-oid="file-input" />


                  <motion.button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-300"
                  title="Upload file"
                  data-oid="file-btn">

                    <Paperclip className="w-4 h-4" data-oid="d-lt0e-" />
                  </motion.button>
                </div>

                <form
                onSubmit={handleChatSubmit}
                className="flex gap-2"
                data-oid="bbkk8an">

                  <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-500"
                  data-oid="q720k5i" />


                  <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors duration-300"
                  data-oid="-hhorbn">

                    <Send className="w-4 h-4" data-oid="j2i01um" />
                  </motion.button>
                </form>
              </div>

              {/* Quick Actions */}
              <div
              className="p-4 bg-gray-50 border-t border-gray-200"
              data-oid="6a-x3qg">

                <div className="text-xs text-gray-500 mb-2" data-oid="cskrp8g">
                  Quick actions:
                </div>
                <div className="flex gap-2 flex-wrap" data-oid="5hrc:.c">
                  <button
                  onClick={() =>
                  sendChatMessage("What are your pricing options?")
                  }
                  className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700"
                  data-oid=":heas1_">

                    Pricing
                  </button>
                  <button
                  onClick={() =>
                  sendChatMessage("How fast is your turnaround time?")
                  }
                  className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700"
                  data-oid="vvm:5g.">

                    Turnaround
                  </button>
                  <button
                  onClick={() =>
                  sendChatMessage("Can you handle my appraisal software?")
                  }
                  className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700"
                  data-oid="-7er:n7">

                    Software
                  </button>
                </div>
              </div>

              {/* Resize Handles */}
              {/* Top resize handle */}
              <div
              className="absolute -top-1 left-4 right-4 h-2 cursor-ns-resize hover:bg-primary-200 transition-all duration-200 opacity-60 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "top")}
              data-oid="vqlbaln">

                <div
                className="w-12 h-1 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="5w:m:k." />

              </div>

              {/* Bottom resize handle */}
              <div
              className="absolute -bottom-1 left-4 right-4 h-2 cursor-ns-resize hover:bg-primary-200 transition-all duration-200 opacity-60 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "bottom")}
              data-oid="sue3:2_">

                <div
                className="w-12 h-1 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="m02z9-f" />

              </div>

              {/* Left resize handle */}
              <div
              className="absolute -left-1 top-4 bottom-4 w-2 cursor-ew-resize hover:bg-primary-200 transition-all duration-200 opacity-60 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "left")}
              data-oid="5y4oujr">

                <div
                className="w-1 h-12 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="nk52pvw" />

              </div>

              {/* Right resize handle */}
              <div
              className="absolute -right-1 top-4 bottom-4 w-2 cursor-ew-resize hover:bg-primary-200 transition-all duration-200 opacity-60 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "right")}
              data-oid="0qi3t3.">

                <div
                className="w-1 h-12 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="p1o50g." />

              </div>

              {/* Corner resize handles */}
              <div
              className="absolute -top-1 -left-1 w-4 h-4 cursor-nw-resize opacity-50 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "top-left")}
              data-oid="wmfsmp7">

                <div
                className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="24lc:h7" />

              </div>

              <div
              className="absolute -top-1 -right-1 w-4 h-4 cursor-ne-resize opacity-50 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "top-right")}
              data-oid="3kybz2v">

                <div
                className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="x5-ajyi" />

              </div>

              <div
              className="absolute -bottom-1 -left-1 w-4 h-4 cursor-sw-resize opacity-50 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "bottom-left")}
              data-oid="b9wusek">

                <div
                className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="1.p.faq" />

              </div>

              <div
              className="absolute -bottom-1 -right-1 w-4 h-4 cursor-se-resize opacity-50 hover:opacity-100 group flex items-center justify-center"
              onMouseDown={(e) => handleResizeStart(e, "bottom-right")}
              data-oid="shoqyt2">

                <div
                className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-primary-500 transition-all duration-200"
                data-oid="uvphlhi" />

              </div>

              {/* Resize indicator when resizing */}
              {isResizing &&
            <div
              className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-mono z-50 shadow-lg"
              data-oid="-a507sl">

                  {chatSize.width} × {chatSize.height}
                </div>
            }

              {/* Resize helper overlay */}
              {isResizing &&
            <div
              className="absolute inset-0 bg-primary-100/10 pointer-events-none z-40 rounded-2xl border-2 border-primary-300 border-dashed"
              data-oid="f68oicn" />

            }
            </motion.div>
          }
        </AnimatePresence>

        {/* Chat Toggle Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white relative"
          data-oid="wiyq_o7">

          <AnimatePresence mode="wait" data-oid="gpee4ro">
            {isChatOpen ?
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              data-oid="kgjb5a3">

                <X className="w-6 h-6" data-oid="y0jgmv3" />
              </motion.div> :

            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              data-oid="xy8:emp">

                <MessageCircle className="w-6 h-6" data-oid="gz.-b84" />
              </motion.div>
            }
          </AnimatePresence>

          {/* Notification Dot */}
          {!isChatOpen &&
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white"
            data-oid="4ku4owg">
          </motion.div>
          }
        </motion.button>
      </div>

      {/* Success Modal */}
      <AnimatePresence data-oid="y.0o6bj">
        {showSuccessModal &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSuccessModal(false)}
          data-oid="c8tj7:h">

            <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-oid="sbb2d0m">

              <div className="text-center" data-oid="byzrq52">
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
                data-oid="rj:-v:n">

                  <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.4,
                    type: "spring",
                    damping: 15,
                    stiffness: 300
                  }}
                  data-oid="y8y2pug">

                    <CheckCircle2
                    className="w-10 h-10 text-success-600"
                    data-oid="tasb:hr" />

                  </motion.div>
                </motion.div>

                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-primary-900 mb-4"
                data-oid="wp9jpmt">

                  Message Sent Successfully!
                </motion.h3>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-6 leading-relaxed"
                data-oid="ytir.ui">

                  Thank you for your interest in ieIMPACT! We've received your
                  message and will respond within 24 hours with a customized
                  quote for your data entry needs.
                </motion.p>

                {/* Next Steps */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-primary-50 rounded-lg p-4 mb-6 text-left"
                data-oid="alio:z_">

                  <h4
                  className="font-semibold text-primary-900 mb-2"
                  data-oid="mb5-xpd">

                    What happens next?
                  </h4>
                  <ul
                  className="text-sm text-gray-600 space-y-1"
                  data-oid="u0m2f.x">

                    <li data-oid="nq0geo9">
                      • Our team will review your requirements
                    </li>
                    <li data-oid="ab0wobh">
                      • We'll prepare a customized quote
                    </li>
                    <li data-oid="tusg5yn">
                      • You'll receive a detailed proposal within 24 hours
                    </li>
                    <li data-oid="32dx1sp">
                      • We can start processing your data immediately
                    </li>
                  </ul>
                </motion.div>

                <div className="flex gap-3" data-oid="0yzho1z">
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  data-oid="wrcmj.x">

                    Close
                  </motion.button>
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowSuccessModal(false);
                    window.location.href = "tel:5551234567";
                  }}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  data-oid="iaegd0u">

                    <Phone className="w-4 h-4" data-oid="m3:m_v7" />
                    Call Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      {/* File Upload Modal */}
      <AnimatePresence data-oid="ymrsqfo">
        {showFileUploadModal &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={cancelFileUpload}
          data-oid="isudzrc">

            <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-oid="lxtx_my">

              <div className="text-center mb-4" data-oid="wlkmyib">
                <div
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                data-oid="o:k1qv9">

                  <Paperclip
                  className="w-8 h-8 text-primary-600"
                  data-oid="u_db9bd" />

                </div>
                <h3
                className="text-xl font-bold text-primary-900 mb-2"
                data-oid="qb5rhg9">

                  Send {selectedFiles.length > 1 ? "Files" : "File"}
                </h3>
                <div className="text-gray-600 text-sm" data-oid="m1zizhe">
                  {selectedFiles.length > 1 ?
                <div data-oid="f4x5q5p">
                      <p className="font-medium mb-1" data-oid="vgtzqyn">
                        Selected {selectedFiles.length} files:
                      </p>
                      <div
                    className="max-h-24 overflow-y-auto space-y-1"
                    data-oid="d1ha2r1">

                        {selectedFiles.map((file, index) =>
                    <p
                      key={index}
                      className="text-xs truncate"
                      data-oid="mmwbvfk">

                            • {file.name}
                          </p>
                    )}
                      </div>
                    </div> :

                <p data-oid="e8guqpk">Selected: {selectedFiles[0]?.name}</p>
                }
                </div>
              </div>

              <div className="space-y-4" data-oid="1scogvn">
                <div data-oid="-nm8n6-">
                  <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="bqwufk.">

                    Add a message (optional)
                  </label>
                  <textarea
                  value={fileMessage}
                  onChange={(e) => setFileMessage(e.target.value)}
                  placeholder="Describe your file or add additional context..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-500 resize-none"
                  rows={3}
                  data-oid="ldy3tn2" />

                </div>

                <div className="flex gap-3" data-oid="2masp6y">
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={cancelFileUpload}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  data-oid="ai2yhuu">

                    Cancel
                  </motion.button>
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendFileMessage}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  data-oid="5jfuzr.">

                    <Send className="w-4 h-4" data-oid="s89oqis" />
                    Send
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Audio Recording Modal */}
      <AnimatePresence data-oid="ng8t0t7">
        {showAudioRecordModal &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={cancelAudioRecording}
          data-oid="cnp_ouf">

            <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-oid="j7gfuah">

              <div className="text-center mb-6" data-oid="rpar74-">
                <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isRecording ? "bg-red-100" : "bg-primary-100"}`
                }
                data-oid="wrlwo-8">

                  <Mic
                  className={`w-10 h-10 ${
                  isRecording ?
                  "text-red-600 animate-pulse" :
                  "text-primary-600"}`
                  }
                  data-oid="w_vno:c" />

                </div>
                <h3
                className="text-xl font-bold text-primary-900 mb-2"
                data-oid="9sccx66">

                  {isRecording ? "Recording..." : "Voice Message"}
                </h3>

                {isRecording &&
              <div className="space-y-3" data-oid="kgctyqm">
                    <p className="text-gray-600 text-sm" data-oid="76nm8xo">
                      Recording time: {Math.floor(recordingTime / 60)}:
                      {(recordingTime % 60).toString().padStart(2, "0")}
                    </p>
                    <div
                  className="w-full bg-gray-200 rounded-full h-2"
                  data-oid="tbinca:">

                      <div
                    className="bg-red-600 h-2 rounded-full animate-pulse"
                    style={{
                      width: `${Math.min(recordingTime * 2, 100)}%`
                    }}
                    data-oid="azjofb." />

                    </div>
                  </div>
              }
              </div>

              {!isRecording && recordingBlob &&
            <div className="space-y-4 mb-6" data-oid="3sp38wn">
                  <div data-oid="pb0yxhk">
                    <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="6z0f9jh">

                      Add a message (optional)
                    </label>
                    <textarea
                  value={audioMessage}
                  onChange={(e) => setAudioMessage(e.target.value)}
                  placeholder="Describe your audio message or add additional context..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-gray-900 placeholder-gray-500 resize-none"
                  rows={3}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendAudioMessage();
                    }
                  }}
                  data-oid="cllaesw" />

                  </div>
                </div>
            }

              <div className="flex gap-3" data-oid="5yngc94">
                {isRecording ?
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={stopRecording}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                data-oid="d5_cu-2">

                    <div
                  className="w-4 h-4 bg-white rounded-sm"
                  data-oid="p9lwge." />

                    Stop Recording
                  </motion.button> :

              <>
                    <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={cancelAudioRecording}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  data-oid="z8vgg6g">

                      Cancel
                    </motion.button>
                    {recordingBlob &&
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendAudioMessage}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  data-oid="1dgfp0_">

                        <Send className="w-4 h-4" data-oid="8jcssar" />
                        Send
                      </motion.button>
                }
                  </>
              }
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}