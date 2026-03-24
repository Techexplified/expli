import React from "react";
import {
  Play,
  CheckCircle2,
  Mail,
  FileText,
  Zap,
  MousePointer2,
  Plus,
  Circle,
  Bot,
  Layout,
  AtSign,
  Layers,
  Link2,
  TrendingUp,
  ChevronRight,
  BookOpen,
  MessageSquare,
  Github,
  Code2,
  Workflow,
} from "lucide-react";

function Lurph() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-300/30">
      <Navbar />
      {/* 1. HERO CONTAINER */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
            Stop switching between AI tools.
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            All Your AI. <br />
            <span className="text-white">Working As One.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed">
            lurph connects your AI tools and runs them simultaneously — so tasks
            get done faster, smarter, and without manual effort.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-yellow-300 hover:bg-bg-400 text-black font-bold py-4 px-8 rounded-xl transition-all active:scale-95 text-lg">
              Start Automating — Free
            </button>
            <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group">
              <div className="p-2 border border-zinc-700 rounded-full group-hover:bg-zinc-800">
                <Play size={18} fill="currentColor" />
              </div>
              <span className="font-medium">See It in Action</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <CheckCircle2 size={14} className="text-zinc-600" />
            <span>No setup required · Works in minutes</span>
          </div>
          <div className="pt-8 border-t border-zinc-900 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-bold"
                >
                  {String.fromCharCode(81 + i)}
                </div>
              ))}
            </div>
            <p className="text-zinc-500 text-sm">
              Used by{" "}
              <span className="text-zinc-300 font-semibold">10,000+</span> teams
              worldwide
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-4 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-300/20 border border-yellow-300/40"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
              </div>
              <div className="text-zinc-600 text-xs font-mono flex items-center gap-2">
                <MousePointer2 size={12} /> lurph orchestrator
              </div>
              <div className="px-3 py-1 rounded-full border border-yellow-300/30 bg-yellow-300/5 text-yellow-300 text-[10px] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse"></span>
                3 AGENTS RUNNING
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center relative">
              <div className="space-y-3">
                <AgentCard name="ChatGPT" status="generating content" />
                <AgentCard name="Notion AI" status="structuring notes" />
                <AgentCard name="Gmail AI" status="drafting email" />
              </div>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 flex flex-col justify-around py-10 -left-6 text-yellow-300/40 text-sm">
                  <span>→</span>
                  <span>→</span>
                  <span>→</span>
                </div>
                <div className="w-24 h-32 rounded-2xl border-2 border-yellow-300/50 bg-yellow-300/5 flex flex-col items-center justify-center gap-2">
                  <Workflow className="text-yellow-300" size={30} />
                  <div className="text-center">
                    <p className="font-bold text-sm">lurph</p>
                    <p className="text-[10px] text-zinc-500">orchestrating</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-around py-10 -right-6 text-yellow-300/40 text-sm">
                  <span>→</span>
                  <span>→</span>
                  <span>→</span>
                </div>
              </div>
              <div className="space-y-3">
                <ResultCard
                  icon={<Mail size={14} />}
                  title="Email sent"
                  sub="drafts complete"
                />
                <ResultCard
                  icon={<FileText size={14} />}
                  title="Document created"
                  sub="notes structured"
                />
                <ResultCard
                  icon={<Zap size={14} />}
                  title="Workflow executed"
                  sub="100% automated"
                />
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-zinc-500 text-[11px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-yellow-300" />
                <span className="text-white font-medium">Task Completed</span>
                <span className="bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 ml-2">
                  3 tools · 1 task
                </span>
              </div>
              <div className="flex items-center gap-1 italic">
                <span>⏱ completed in 4.2s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WORKFLOW SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-300/40 bg-yellow-300/5 text-yellow-300 text-[10px] font-bold tracking-widest uppercase">
            Intelligent Automation
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Multiple AIs. One Seamless <br className="hidden md:block" />{" "}
            Workflow.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            lurph connects your AI tools and runs them simultaneously — so your
            work gets done faster, without switching between tools.
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-[#0f0f0f] border border-zinc-800/60 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          <div className="flex flex-col items-center">
            <span className="text-zinc-600 text-[10px] font-bold tracking-[0.2em] mb-10 uppercase">
              How Lurph Works
            </span>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-2">
              <ToolBadge icon={<Bot size={14} />} label="ChatGPT" />
              <Plus size={14} className="text-zinc-700" />
              <ToolBadge icon={<Layout size={14} />} label="Notion" />
              <Plus size={14} className="text-zinc-700" />
              <ToolBadge icon={<AtSign size={14} />} label="Email" />
              <Plus size={14} className="text-zinc-700" />
              <ToolBadge
                icon={<Circle size={10} className="fill-zinc-600" />}
                label="& more"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-px h-10 bg-gradient-to-b from-zinc-700 to-yellow-300/50"></div>
              <div className="w-3 h-3 rounded-full border-2 border-yellow-300/50 bg-[#0f0f0f]"></div>
              <div className="w-px h-6 bg-yellow-300/50"></div>
            </div>
            <div className="bg-yellow-300 text-black px-8 py-4 rounded-xl flex items-center gap-3 font-bold shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
              <span>lurph</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-px h-6 bg-yellow-300/50"></div>
              <div className="w-3 h-3 rounded-full border-2 border-yellow-300/50 bg-[#0f0f0f]"></div>
              <div className="w-px h-10 bg-gradient-to-t from-zinc-700 to-yellow-300/50"></div>
            </div>
            <div className="border border-yellow-300/40 bg-yellow-300/5 px-8 py-3 rounded-xl flex items-center gap-3">
              <Circle size={14} className="text-yellow-300" />
              <span className="text-white font-medium text-sm">
                Task Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES & CTA SECTION (New) */}
      <section className="max-w-7xl mx-auto px-6 py-2 space-y-24">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Layers size={20} />}
            title="Run Multiple AIs at Once"
            description="Execute tasks across different AI tools simultaneously — no switching, no delays."
          />
          <FeatureCard
            icon={<Link2 size={20} />}
            title="One Unified Workflow"
            description="Connect ChatGPT, Notion, email, and more into a single seamless process."
          />
          <FeatureCard
            icon={<Zap size={20} />}
            title="Instant Execution"
            description="From input to output in seconds — with all tools working together, in parallel."
          />
          <FeatureCard
            icon={<TrendingUp size={20} />}
            title="Less Work, More Done"
            description="Automate repetitive tasks and focus only on what truly matters to you."
          />
        </div>

        {/* Closing CTA */}
        <div className="bg-[#0f0f0f] border border-zinc-800/60 rounded-[40px] p-12 md:p-20 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to Stop Switching Between AI Tools?
          </h2>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-yellow-300 hover:bg-[#d9a607] text-black font-bold py-4 px-8 rounded-xl transition-all active:scale-95 text-lg flex items-center gap-2">
              <Zap size={18} fill="currentColor" />
              Start Automating — Free
            </button>
            <p className="text-zinc-500 text-sm">
              No setup required • Works instantly
            </p>
          </div>
        </div>
      </section>

      {/* 4. INTEGRATIONS & ECOSYSTEM SECTION (New) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Header Text */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-300/40 bg-yellow-300/5 text-yellow-300 text-[10px] font-bold tracking-widest uppercase">
            Integrations & Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            All Your AI Tools. Working <br className="hidden md:block" />{" "}
            Together.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            lurph connects your AI tools and runs them simultaneously — so{" "}
            <br className="hidden md:block" />
            you get one complete output, instantly.
          </p>
        </div>

        {/* Ecosystem Visualization Container */}
        {/* Ecosystem Visualization Container */}
        <div className="max-w-5xl mx-auto bg-[#0f0f0f] border border-zinc-800 rounded-[28px] px-12 py-10 relative">
          {/* Top Center Badge */}
          <div className="flex justify-center mb-9">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-yellow-400/20 text-yellow-400 text-[10px] font-bold tracking-widest uppercase">
              <Zap size={12} className="fill-yellow-400" />
              Simultaneous Execution
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-0">
            {/* Left Column: Input Sources */}
            <div className="flex flex-col gap-2.5 min-w-[168px]">
              <ToolSlot icon={<Bot size={14} />} label="ChatGPT" />
              <ToolSlot icon={<BookOpen size={14} />} label="Notion AI" />
              <ToolSlot icon={<Mail size={14} />} label="Gmail AI" />
              <ToolSlot icon={<Zap size={14} />} label="Zapier" />
            </div>

            {/* Connector: All In */}
            <div className="flex flex-col items-center gap-1.5 px-5">
              <div className="text-yellow-400 font-bold text-lg tracking-[-0.25em]">
                &rsaquo;&rsaquo;
              </div>
              <span className="text-[10px] font-bold text-zinc-600 tracking-[0.18em] uppercase">
                All In
              </span>
            </div>

            {/* Center: Core Engine */}
            <div className="w-40 h-[220px] bg-[#0c0c0c] border-2 border-yellow-400/50 rounded-[28px] flex flex-col items-center justify-center flex-shrink-0">
              <div className="w-[72px] h-[72px] rounded-full bg-[#1a1a1a] border border-zinc-800 flex items-center justify-center mb-4">
                <Workflow className="text-yellow-300" size={30} />
              </div>
              <h3 className="text-[22px] font-bold tracking-tight text-white mb-1">
                lurph
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                core engine
              </p>
            </div>

            {/* Connector: Output */}
            <div className="flex flex-col items-center gap-1.5 px-5">
              <div className="text-yellow-400 font-bold text-lg tracking-[-0.25em]">
                &rsaquo;&rsaquo;
              </div>
              <span className="text-[10px] font-bold text-zinc-600 tracking-[0.18em] uppercase">
                Output
              </span>
            </div>

            {/* Right Column: Results */}
            <div className="flex flex-col gap-2.5 min-w-[185px]">
              <ResultSlot icon={<Mail size={16} />} label="Email sent" />
              <ResultSlot
                icon={<FileText size={16} />}
                label="Document created"
              />
              <ResultSlot
                icon={<CheckCircle2 size={16} />}
                label="Task completed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATIONS GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Works with the Tools You Already Use
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Communication */}
          <IntegrationCard title="COMMUNICATION">
            <ToolItem
              icon={<MessageSquare size={18} />}
              name="Slack"
              desc="Send updates instantly"
            />
            <ToolItem
              icon={<Mail size={18} />}
              name="Gmail"
              desc="Draft emails automatically"
            />
          </IntegrationCard>

          {/* Productivity */}
          <IntegrationCard title="PRODUCTIVITY">
            <ToolItem
              icon={<BookOpen size={18} />}
              name="Notion"
              desc="Sync tasks instantly"
            />
            <ToolItem
              icon={<FileText size={18} />}
              name="Google Docs"
              desc="Auto-generate documents"
            />
          </IntegrationCard>

          {/* Development */}
          <IntegrationCard title="DEVELOPMENT">
            <ToolItem
              icon={<Github size={18} />}
              name="GitHub"
              desc="Commit & review with AI"
            />
            <ToolItem
              icon={<Code2 size={18} />}
              name="VS Code"
              desc="AI completions inline"
            />
          </IntegrationCard>

          {/* Automation */}
          <IntegrationCard title="AUTOMATION">
            <ToolItem
              icon={<Zap size={18} />}
              name="Zapier"
              desc="Trigger any workflow"
            />
            <ToolItem
              icon={<Plus size={18} />}
              name="50+ tools"
              desc="More added every week"
            />
          </IntegrationCard>
        </div>

        {/* Horizontal Feature Bar */}
        <div className="max-w-5xl mx-auto border border-zinc-800/60 bg-[#0f0f0f]/30 rounded-2xl py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-400 mb-24">
          <div className="flex items-center gap-3">
            <Layers size={18} className="text-yellow-300" />
            <span className="text-sm font-medium">50+ integrations</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-zinc-800"></div>
          <div className="flex items-center gap-3">
            <Zap size={18} className="text-yellow-300" />
            <span className="text-sm font-medium">Works instantly</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-zinc-800"></div>
          <div className="flex items-center gap-3">
            <MousePointer2 size={18} className="text-yellow-300" />
            <span className="text-sm font-medium">No setup required</span>
          </div>
        </div>

        {/* Final Big CTA */}
        <div className="max-w-6xl mx-auto bg-[#0f0f0f] border border-zinc-800/60 rounded-[40px] p-12 md:p-24 text-center space-y-10 relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">
            Stop Switching Between AI Tools.
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto relative z-10">
            Connect everything into a single synchronized workflow — and get
            results instantly.
          </p>

          <div className="flex flex-col items-center gap-6 relative z-10">
            <button className="bg-yellow-300 text-black font-bold py-5 px-10 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 text-lg flex items-center gap-3 shadow-[0_0_40px_rgba(234,179,8,0.2)]">
              <Link2 size={20} />
              Connect Your Tools — Free
            </button>
            <p className="text-zinc-600 text-sm flex items-center gap-2">
              No setup required{" "}
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span> Works
              in minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="h-20 w-24 flex items-center">
          <img src="./lurph.jpeg" alt="lurph" className="h-full w-auto" />
        </div>

        {/* Right Side: Button */}
        <div className="flex items-center gap-6">
          {/* Optional: Navigation Links can be added here if needed later */}
          <a
            href="https://app.explified.com/expli"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.15)] text-sm"
          >
            Try Lurph
          </a>
        </div>
      </div>
    </nav>
  );
}

// Integration Card Sub-component
function IntegrationCard({ title, children }) {
  return (
    <div className="bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 space-y-6">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
        <span className="text-[10px] font-bold tracking-widest text-yellow-300 uppercase">
          {title}
        </span>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

// Tool Item Sub-component
function ToolItem({ icon, name, desc }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-yellow-300 group-hover:border-yellow-300/30 transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-zinc-200">{name}</h4>
        <p className="text-[11px] text-zinc-500">{desc}</p>
      </div>
    </div>
  );
}

function ToolSlot({ icon, label }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-yellow-400/30 bg-[#131313]">
      <div className="w-7 h-7 rounded-lg border border-yellow-400/30 flex items-center justify-center flex-shrink-0 text-yellow-400">
        {icon}
      </div>
      <span className="text-sm font-semibold text-zinc-300">{label}</span>
    </div>
  );
}

function ResultSlot({ icon, label }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-yellow-400/30 bg-[#131313]">
      <div className="text-yellow-400 flex-shrink-0">{icon}</div>
      <span className="text-sm font-semibold text-zinc-300">{label}</span>
    </div>
  );
}

// Feature Card Helper
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#111111] border border-zinc-800/60 p-8 rounded-3xl space-y-4 hover:border-zinc-700 transition-colors">
      <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-yellow-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

// Previous Helpers
function ToolBadge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 bg-[#141414] hover:bg-zinc-800/50 transition-colors">
      <span className="text-zinc-400">{icon}</span>
      <span className="text-zinc-300 text-sm font-medium">{label}</span>
    </div>
  );
}

function AgentCard({ name, status }) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-xs font-bold">{name}</p>
        <p className="text-[10px] text-zinc-500">{status}</p>
      </div>
      <div className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-yellow-300 font-medium">
        active
      </div>
    </div>
  );
}

function ResultCard({ icon, title, sub }) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
      <div className="text-yellow-300">{icon}</div>
      <div>
        <p className="text-xs font-bold">{title}</p>
        <p className="text-[10px] text-zinc-500">{sub}</p>
      </div>
    </div>
  );
}

export default Lurph;
