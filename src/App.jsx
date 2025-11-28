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
  Terminal,
  Code,
  Globe,
  Database,
  Layers,
  Command,
} from "lucide-react";

// --- Custom CSS for Animations ---
const style = document.createElement("style");
style.textContent = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
  .pause-on-hover:hover .animate-scroll {
    animation-play-state: paused;
  }
`;
document.head.appendChild(style);

// --- Components ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden group";
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
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
      )}
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
            <div className="w-8 h-8 rounded bg-[#23b5b5] flex items-center justify-center shadow-[0_0_10px_#23b5b5]">
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
      <div className="p-4 border-b border-[#23b5b5]/10 flex items-center justify-between bg-black/40">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="flex gap-2">
          <ModelBadge id="expli" name="Native" icon={Sparkles} />
          <ModelBadge id="gemini" name="Gemini" icon={Bot} />
          <ModelBadge id="gpt" name="GPT-4" icon={MessageSquare} />
        </div>
      </div>

      <div className="p-6 h-[400px] flex flex-col gap-4 overflow-y-auto font-mono text-sm relative scrollbar-hide">
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

        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-neutral-900/90 to-transparent pointer-events-none"></div>
      </div>

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

const GlowingFeatureCard = ({
  icon: Icon,
  title,
  description,
  colSpan = "col-span-1",
}) => (
  <div
    className={`group relative p-[1px] rounded-3xl bg-gradient-to-b from-neutral-800 to-neutral-950 overflow-hidden ${colSpan} hover:z-10`}
  >
    {/* Glowing gradient border effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#23b5b5] to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

    <div className="relative h-full bg-neutral-950 rounded-[23px] p-8 flex flex-col justify-between overflow-hidden">
      {/* Background Grid Pattern inside card */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
        <Icon size={120} />
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-[#23b5b5]/10 flex items-center justify-center mb-6 group-hover:bg-[#23b5b5] group-hover:text-black transition-all duration-300 border border-[#23b5b5]/20">
          <Icon
            className="text-[#23b5b5] group-hover:text-black transition-colors"
            size={28}
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center text-[#23b5b5] text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Learn more <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  </div>
);

const BrandTicker = () => {
  const brands = [
    { name: "Gemini", icon: Bot },
    { name: "OpenAI", icon: MessageSquare },
    { name: "Anthropic", icon: Sparkles },
    { name: "Llama", icon: Cpu },
    { name: "Mistral", icon: Command },
    { name: "Cohere", icon: Layers },
    { name: "Azure AI", icon: Database },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
        {[...brands, ...brands, ...brands].map((brand, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 text-xl font-bold text-gray-500 hover:text-[#23b5b5] transition-colors cursor-pointer whitespace-nowrap"
          >
            <brand.icon size={32} strokeWidth={1.5} />
            <span className="tracking-widest uppercase">{brand.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#23b5b5] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#23b5b5]/20 via-neutral-900/0 to-transparent blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-[#23b5b5]/30 text-[#23b5b5] text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23b5b5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#23b5b5]"></span>
                </span>
                v2.0 is now live
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Unified AI. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23b5b5] via-cyan-400 to-white animate-pulse">
                  Singular Focus.
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Orchestrate multiple LLMs in a single, beautiful interface.
                Compare outputs, merge contexts, and accelerate your workflow.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto justify-center shadow-[0_0_40px_rgba(35,181,181,0.3)]"
                >
                  Start Chatting Free <ArrowRight size={18} />
                </Button>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto justify-center"
                >
                  View Benchmarks
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-[#23b5b5]" />
                  SOC2 Compliant
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-[#23b5b5]" />
                  &lt; 15ms Latency
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full perspective-1000">
              <div className="relative transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#23b5b5] to-purple-600 rounded-3xl blur opacity-30 animate-pulse"></div>
                <ChatDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REBUILT: Model Ticker Section */}
      <section className="py-12 bg-neutral-950 border-y border-neutral-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#23b5b5]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
            Orchestrating the world's best models
          </p>
        </div>
        <BrandTicker />
      </section>

      {/* REBUILT: Features Grid (Bento Style) */}
      <section id="features" className="py-32 relative bg-black">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why professional teams <br />
              <span className="text-[#23b5b5]">switch to Expli</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We've stripped away the complexity of managing multiple AI
              subscriptions and consolidated them into one powerful workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main large feature */}
            <GlowingFeatureCard
              icon={Cpu}
              title="Multi-Model Core"
              description="Access GPT-4, Gemini Pro, and Claude 3 Opus simultaneously. Compare their answers side-by-side to verify hallucinations and get the best result."
              colSpan="lg:col-span-2"
            />

            <GlowingFeatureCard
              icon={Zap}
              title="Zero Latency"
              description="Direct WebSocket pipes to model providers ensure you see tokens the millisecond they are generated."
            />

            <GlowingFeatureCard
              icon={Terminal}
              title="Live Code Execution"
              description="Don't just generate code. Run Python and JS directly in the browser sandbox."
            />

            <GlowingFeatureCard
              icon={Globe}
              title="Real-time Web"
              description="Expli browses the internet to fetch citations, news, and real-time data for your queries."
            />

            <GlowingFeatureCard
              icon={Shield}
              title="Enterprise Grade"
              description="SSO, audit logs, and data retention policies designed for Fortune 500 security requirements."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-neutral-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#23b5b5]/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-7xl font-bold mb-8 tracking-tight">
            Ready to break free?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join the workspace that adapts to your intelligence needs, not the
            other way around.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="px-12 py-5 text-lg shadow-[0_0_50px_rgba(35,181,181,0.25)]">
              Start Free Trial
            </Button>
            <Button variant="secondary" className="px-12 py-5 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#23b5b5]/10 pt-20 pb-10">
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
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#23b5b5] cursor-pointer transition-colors">
                  Features
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer transition-colors">
                  Integrations
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer transition-colors">
                  Pricing
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#23b5b5] cursor-pointer transition-colors">
                  Documentation
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer transition-colors">
                  API Reference
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#23b5b5] cursor-pointer transition-colors">
                  Privacy
                </li>
                <li className="hover:text-[#23b5b5] cursor-pointer transition-colors">
                  Terms
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2024 Expli AI Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
