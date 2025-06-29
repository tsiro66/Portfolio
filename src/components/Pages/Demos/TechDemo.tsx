import { useState, useEffect } from "react";

const TechDemo = () => {
  const [codeLineIndex, setCodeLineIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLineIndex((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Lightning Fast",
      description:
        "Built with performance in mind. Sub-second response times guaranteed.",
      icon: "⚡",
      stats: "0.3s avg response",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "AI-Powered",
      description:
        "Leverage cutting-edge machine learning for intelligent automation.",
      icon: "🤖",
      stats: "99.9% accuracy",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Secure by Design",
      description: "Enterprise-grade security with end-to-end encryption.",
      icon: "🔐",
      stats: "SOC 2 Type II",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Global Scale",
      description:
        "Infrastructure that grows with you. From startup to enterprise.",
      icon: "🌍",
      stats: "150+ countries",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const codeLines = [
    "const api = new CloudAPI({ region: 'global' });",
    "const response = await api.process(data);",
    "const insights = AI.analyze(response);",
    "await dashboard.update(insights);",
    "console.log('Processing complete ✨');",
  ];

  const metrics = [
    { label: "API Calls", value: "2.5B+", change: "+23%" },
    { label: "Uptime", value: "99.99%", change: "+0.04%" },
    { label: "Response Time", value: "0.3s", change: "-15%" },
    { label: "Active Users", value: "500K+", change: "+87%" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden tech-demo-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');
        
        .tech-demo-wrapper {
          color-scheme: dark;
        }
        
        .tech-demo {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .neon-glow {
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
        }
        
        .gradient-border {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 400% 400%;
          animation: gradient-shift 10s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
        
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        
        .slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .glitch {
          position: relative;
          text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                       0.025em 0.04em 0 #fffc00;
          animation: glitch 725ms infinite;
        }
        
        @keyframes glitch {
          0%, 100% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
          15% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
          16% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
          49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
          50% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff, 0 -0.05em 0 #fffc00; }
          99% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff, 0 -0.05em 0 #fffc00; }
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .code-line {
          font-family: 'Fira Code', 'Courier New', monospace;
          opacity: 0.3;
          transition: all 0.5s ease;
        }
        
        .code-line.active {
          opacity: 1;
          transform: translateX(10px);
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
        }
      `}</style>

      <div className="tech-demo relative">
        {/* Interactive background */}
        <div
          className="fixed inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16 grid-bg">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl float"></div>
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl float"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl float"
              style={{ animationDelay: "6s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/50 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></div>
                <span className="text-sm font-medium text-gray-300">
                  Live in Production
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="block text-5xl sm:text-6xl md:text-7xl">
                  The Future of
                </span>
                <span className="block glitch bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Cloud Computing
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Deploy globally in seconds. Scale infinitely. Pay only for what
                you use.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                  <span className="flex items-center gap-2">
                    Start Building
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
                <button className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>

              {/* Live code preview */}
              <div className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500 ml-2">api.js</span>
                </div>
                <div className="space-y-2 text-left">
                  {codeLines.map((line, index) => (
                    <div
                      key={index}
                      className={`code-line text-sm ${
                        index === codeLineIndex ? "active" : ""
                      }`}
                    >
                      <span className="text-gray-500 mr-4">{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Metrics */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-sm text-gray-400 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div
                    className={`text-sm ${
                      metric.change.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {metric.change} from last month
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Built for{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developers
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to build and scale modern applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`}
                  />
                  <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {feature.stats}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Deploy in
                  <span className="block text-6xl md:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    Under 30 Seconds
                  </span>
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  From code to production faster than ever. Our platform handles
                  the complexity so you can focus on building.
                </p>

                <div className="space-y-4">
                  {[
                    "Git push to deploy",
                    "Auto-scaling infrastructure",
                    "Global CDN included",
                    "Zero-downtime deployments",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 group">
                  <span className="flex items-center gap-2">
                    Read Documentation
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="relative">
                <div className="gradient-border p-1 rounded-2xl">
                  <div className="bg-black rounded-2xl p-8">
                    <div className="space-y-6">
                      {/* Terminal mockup */}
                      <div
                        className="bg-gray-900 rounded-lg p-4"
                        style={{
                          fontFamily: "'Fira Code', 'Courier New', monospace",
                          fontSize: "14px",
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-green-400">$</span>
                          <span className="text-gray-300">
                            cloud deploy --prod
                          </span>
                        </div>
                        <div className="space-y-1 text-gray-500">
                          <div>🔍 Analyzing codebase...</div>
                          <div>📦 Building application...</div>
                          <div>🚀 Deploying to 8 regions...</div>
                          <div className="text-green-400">
                            ✅ Deployment successful!
                          </div>
                        </div>
                      </div>

                      {/* Stats cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-4 border border-purple-500/20">
                          <div className="text-2xl font-bold text-purple-400">
                            8ms
                          </div>
                          <div className="text-sm text-gray-400">
                            Response time
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-lg p-4 border border-green-500/20">
                          <div className="text-2xl font-bold text-green-400">
                            100%
                          </div>
                          <div className="text-sm text-gray-400">
                            Uptime SLA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Vision?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of developers building the future on our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 neon-glow">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold">CloudFlow</span>
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Docs
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TechDemo;
