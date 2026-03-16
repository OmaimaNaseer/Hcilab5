import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function MoodBoard() {
  const colorPalette = [
    { name: "Primary Blue", hex: "#2563EB", desc: "Trust & Professionalism" },
    { name: "Deep Indigo", hex: "#4F46E5", desc: "Academic Excellence" },
    { name: "Slate Gray", hex: "#475569", desc: "Stability & Balance" },
    { name: "Emerald Green", hex: "#10B981", desc: "Success & Growth" },
    { name: "Amber", hex: "#F59E0B", desc: "Energy & Attention" },
  ];

  const typography = [
    { name: "Headings", font: "Inter", weight: "600-700", usage: "Titles and headers" },
    { name: "Body Text", font: "Inter", weight: "400", usage: "Main content" },
    { name: "Captions", font: "Inter", weight: "500", usage: "Labels and metadata" },
  ];

  const designPrinciples = [
    { title: "Professional", desc: "Clean, modern interface that reflects academic excellence" },
    { title: "Trustworthy", desc: "Secure and reliable environment for educational data" },
    { title: "Accessible", desc: "Easy to navigate for students, faculty, and staff" },
    { title: "Efficient", desc: "Quick access to important academic information" },
  ];

  const uiElements = [
    { name: "Cards", desc: "Elevated surfaces for content grouping" },
    { name: "Buttons", desc: "Rounded corners with clear hierarchy" },
    { name: "Icons", desc: "Line-style icons for clarity" },
    { name: "Spacing", desc: "Generous whitespace for readability" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">CMS Mardan Mood Board</h1>
        <p className="text-lg text-gray-600">Visual Design Direction & Identity</p>
        <Badge variant="outline" className="mt-2">Lab Task 1: High Fidelity Prototyping</Badge>
      </div>

      {/* Design Mood & Objectives */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Mood: Professional & Trustworthy</h2>
        <p className="text-gray-700 leading-relaxed">
          The CMS Mardan interface conveys a sense of <strong>academic professionalism</strong>, 
          <strong> reliability</strong>, and <strong>modern efficiency</strong>. The design aims to create 
          a calm, focused environment where students and faculty can manage their academic activities 
          with confidence and ease.
        </p>
      </Card>

      {/* Color Palette */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Color Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {colorPalette.map((color) => (
            <Card key={color.hex} className="overflow-hidden">
              <div
                className="h-32 w-full"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4 space-y-1">
                <h3 className="font-semibold text-gray-900">{color.name}</h3>
                <p className="text-sm text-gray-600 font-mono">{color.hex}</p>
                <p className="text-xs text-gray-500">{color.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Typography</h2>
        <Card className="p-6">
          <div className="space-y-6">
            {typography.map((type) => (
              <div key={type.name} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{type.name}</h3>
                  <Badge variant="secondary">{type.font}</Badge>
                </div>
                <p className="text-sm text-gray-600">Weight: {type.weight}</p>
                <p className="text-xs text-gray-500 mt-1">{type.usage}</p>
                {type.name === "Headings" && (
                  <p className="text-3xl font-semibold mt-2">The Quick Brown Fox</p>
                )}
                {type.name === "Body Text" && (
                  <p className="text-base mt-2">The quick brown fox jumps over the lazy dog</p>
                )}
                {type.name === "Captions" && (
                  <p className="text-sm font-medium mt-2">The quick brown fox jumps over the lazy dog</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Design Principles */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {designPrinciples.map((principle) => (
            <Card key={principle.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">{principle.title}</h3>
              <p className="text-sm text-gray-600">{principle.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* UI Elements */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">UI Components & Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {uiElements.map((element) => (
            <Card key={element.name} className="p-6">
              <h3 className="font-semibold text-gray-900 mb-1">{element.name}</h3>
              <p className="text-sm text-gray-600">{element.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Visual Examples */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Component Samples</h2>
        <Card className="p-8">
          <div className="space-y-6">
            {/* Button Samples */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Primary Action
                </button>
                <button className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Secondary Action
                </button>
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  Tertiary Action
                </button>
              </div>
            </div>

            {/* Card Sample */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Card Component</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Course Title</h4>
                    <p className="text-sm text-gray-500">CS-301 • 3 Credit Hours</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Sample card layout with icon, title, metadata, and description text.
                </p>
              </div>
            </div>

            {/* Badge Samples */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Status Badges</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Present</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Absent</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Enrolled</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Pending</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary */}
      <Card className="p-6 bg-gray-900 text-white">
        <h2 className="text-xl font-semibold mb-3">Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          This mood board establishes the visual foundation for CMS Mardan - a modern, professional, 
          and user-friendly campus management system. The design emphasizes clarity, trust, and efficiency 
          through a carefully selected color palette, clean typography, and consistent UI patterns.
        </p>
      </Card>
    </div>
  );
}
