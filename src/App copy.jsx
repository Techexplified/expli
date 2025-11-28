import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Cpu,
  Zap,
  Shield,
  Menu,
  X,
  ArrowRight,
  Bot,
  Sparkles,
  ChevronDown,
  Terminal,
  Code,
  Globe,
} from "lucide-react";

// --- Components ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary:
      "bg-[#23b5b5] text-black hover:bg-[#1a8f8f] hover:shadow-[0_0_20px_rgba(35,181,181,0.4)]",
    secondary:
      "bg-transparent border border-[#23b5b5] text-[#23b5b5] hover:bg-[#23b5b5] hover:text-black",
    ghost: "text-gray-400 hover:text-[#23b5b5]",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#23b5b5]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#23b5b5] flex items-center justify-center">
              <span className="font-bold text-black text-xl">e</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              expli
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-[#23b5b5] transition-colors"
              >
                Features
              </a>
              <a
                href="#models"
                className="text-gray-300 hover:text-[#23b5b5] transition-colors"
              >
                Models
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-[#23b5b5] transition-colors"
              >
                Pricing
              </a>
              <Button variant="primary" className="py-2 px-4 text-sm">
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#23b5b5]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-[#23b5b5]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="text-gray-300 hover:text-[#23b5b5] block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a
              href="#models"
              className="text-gray-300 hover:text-[#23b5b5] block px-3 py-2 rounded-md text-base font-medium"
            >
              Models
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-[#23b5b5] block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </a>
            <div className="mt-4">
              <Button variant="primary" className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const ChatDemo = () => {
  const [activeModel, setActiveModel] = useState("expli");
  const [messages, setMessages] = useState([
    { role: "user", text: "Write a quick sorting function in Python." },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const responses = {
    expli:
      "Here is a concise implementation using Python's sorted() function:\n\nnumbers = [5, 2, 9, 1]\nsorted_nums = sorted(numbers)\nprint(sorted_nums)",
    gemini:
      "Certainly! Here's a standard Bubble Sort implementation in Python for educational purposes:\n\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr",
    gpt: "Sure. Python lists have a built-in .sort() method which is very efficient (Timsort).\n\nmy_list = [3, 1, 4, 1, 5]\nmy_list.sort()\n# List is now sorted in-place.",
  };

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [activeModel]);

  const ModelBadge = ({ id, name, icon: Icon }) => (
    <button
      onClick={() => setActiveModel(id)}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
        activeModel === id
          ? "bg-[#23b5b5] text-black shadow-[0_0_15px_rgba(35,181,181,0.5)]"
          : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
      }`}
    >
      <Icon size={14} />
      {name}
    </button>
  );

  return (
    <div className="w-full max-w-lg mx-auto bg-neutral-900/50 backdrop-blur-sm border border-[#23b5b5]/20 rounded-2xl overflow-hidden shadow-2xl">
      {/* Chat Header */}
      <div className="p-4 border-b border-[#23b5b5]/10 flex items-center justify-between bg-black/40">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="flex gap-2">
          <ModelBadge id="expli" name="Expli Native" icon={Sparkles} />
          <ModelBadge id="gemini" name="Gemini" icon={Bot} />
          <ModelBadge id="gpt" name="ChatGPT" icon={MessageSquare} />
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-6 h-[400px] flex flex-col gap-4 overflow-y-auto font-mono text-sm relative">
        {messages.map((msg, idx) => (
          <div key={idx} className="flex flex-col gap-1 items-end">
            <div className="bg-neutral-800 text-gray-200 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%]">
              {msg.text}
            </div>
            <span className="text-[10px] text-gray-500">You</span>
          </div>
        ))}

        <div className="flex flex-col gap-1 items-start">
          <div
            className={`px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] transition-colors duration-500 ${
              activeModel === "expli"
                ? "bg-[#23b5b5]/10 border border-[#23b5b5]/30 text-[#23b5b5]"
                : "bg-neutral-800 border border-transparent text-gray-300"
            }`}
          >
            {isTyping ? (
              <div className="flex gap-1 h-5 items-center">
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.1s]"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.2s]"></div>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap font-sans text-sm">
                {responses[activeModel]}
              </pre>
            )}
          </div>
          <span className="text-[10px] text-[#23b5b5] flex items-center gap-1">
            {activeModel === "expli" && <Sparkles size={10} />}
            {activeModel === "gemini" && <Bot size={10} />}
            {activeModel === "gpt" && <MessageSquare size={10} />}
            {activeModel.charAt(0).toUpperCase() + activeModel.slice(1)}
          </span>
        </div>

        {/* Decorative fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none"></div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-black/40 border-t border-[#23b5b5]/10">
        <div className="flex gap-2">
          <input
            disabled
            type="text"
            placeholder="Ask anything..."
            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-[#23b5b5]"
          />
          <button className="bg-[#23b5b5] text-black p-2 rounded-lg hover:bg-[#1e9e9e]">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-[#23b5b5] transition-all duration-300 hover:shadow-[0_0_30px_rgba(35,181,181,0.1)] hover:-translate-y-1">
    <div className="w-12 h-12 rounded-lg bg-[#23b5b5]/10 flex items-center justify-center mb-6 group-hover:bg-[#23b5b5] transition-colors duration-300">
      <Icon
        className="text-[#23b5b5] group-hover:text-black transition-colors duration-300"
        size={24}
      />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#23b5b5] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#23b5b5]/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-[#23b5b5]/30 text-[#23b5b5] text-sm font-medium mb-8 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23b5b5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#23b5b5]"></span>
                </span>
                Now supporting Gemini Pro 1.5
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                One Interface. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23b5b5] to-white">
                  Infinite Intelligence.
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Switch seamlessly between Expli Native, ChatGPT, and Gemini. Get
                the best answer for every question, without changing tabs.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto justify-center"
                >
                  Start Chatting Free <ArrowRight size={18} />
                </Button>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto justify-center"
                >
                  View Models
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-[#23b5b5]" />
                  Enterprise Secure
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-[#23b5b5]" />
                  Real-time Responses
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full perspective-1000">
              <div className="relative transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#23b5b5] to-purple-600 rounded-2xl blur opacity-30"></div>
                <ChatDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why choose <span className="text-[#23b5b5]">expli</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We aggregate the world's most powerful AI models into a single,
              intuitive interface designed for productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Cpu}
              title="Multi-Model Core"
              description="Don't limit yourself to one brain. Switch instantly between GPT-4, Gemini, and Claude to verify facts and get diverse perspectives."
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Our optimized WebSocket infrastructure ensures you receive tokens as fast as the models can generate them. No added latency."
            />
            <FeatureCard
              icon={Terminal}
              title="Code Interpreter"
              description="Run and test code snippets directly within the chat interface. Supports Python, JavaScript, and Rust out of the box."
            />
            <FeatureCard
              icon={Shield}
              title="Private & Secure"
              description="Your data is encrypted at rest and in transit. We strictly adhere to SOC2 compliance standards."
            />
            <FeatureCard
              icon={Globe}
              title="Web Access"
              description="Expli can browse the live internet to fetch up-to-date information, news, and citations for your research."
            />
            <FeatureCard
              icon={Code}
              title="API Access"
              description="Build your own applications on top of the Expli unified API. One key, access to all major LLMs."
            />
          </div>
        </div>
      </section>

      {/* Model Showcase Banner */}
      <section
        id="models"
        className="py-24 border-y border-[#23b5b5]/10 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl font-bold mb-12 text-gray-400">
            POWERED BY THE INDUSTRY LEADERS
          </h2>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text representations for brands to avoid external SVGs issues, or use generic icons */}
            <div className="flex items-center gap-3 text-2xl font-bold hover:text-[#23b5b5] transition-colors cursor-default">
              <Bot size={32} /> Gemini
            </div>
            <div className="flex items-center gap-3 text-2xl font-bold hover:text-[#23b5b5] transition-colors cursor-default">
              <MessageSquare size={32} /> OpenAI
            </div>
            <div className="flex items-center gap-3 text-2xl font-bold hover:text-[#23b5b5] transition-colors cursor-default">
              <Sparkles size={32} /> Anthropic
            </div>
            <div className="flex items-center gap-3 text-2xl font-bold hover:text-[#23b5b5] transition-colors cursor-default">
              <Cpu size={32} /> Llama 3
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#23b5b5]/5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Ready to upgrade your chat?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join 50,000+ developers and creators who use Expli to accelerate
            their workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-12 py-4 text-lg">Get Started Free</Button>
            <Button variant="secondary" className="px-12 py-4 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-[#23b5b5]/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-[#23b5b5] flex items-center justify-center">
                  <span className="font-bold text-black text-xs">e</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  expli
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                The unified interface for the age of artificial intelligence.
                Simplify your workflow today.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#23b5b5] cursor-pointer">
                  Features
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer">
                  Integrations
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer">Pricing</li>
                <li className="hover:text-[#23b5b5] cursor-pointer">
                  Changelog
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#23b5b5] cursor-pointer">
                  Documentation
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer">
                  API Reference
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer">
                  Community
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer">
                  Help Center
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#23b5b5] cursor-pointer">About</li>
                <li className="hover:text-[#23b5b5] cursor-pointer">Blog</li>
                <li className="hover:text-[#23b5b5] cursor-pointer">Careers</li>
                <li className="hover:text-[#23b5b5] cursor-pointer">Legal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 Expli AI Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-[#23b5b5]">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#23b5b5]">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
