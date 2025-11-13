import React, { useState } from 'react';
import { Info, ZoomIn, Palette, Type, Layout } from 'lucide-react';

const FlyerAnatomyTemplate = () => {
  const [activeView, setActiveView] = useState('layout');

  const LayoutView = () => (
    <div className="relative w-full h-[800px] bg-white border-4 border-gray-800 shadow-2xl">
      {/* Header Zone - 20% */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-red-100 border-b-2 border-red-300 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 font-bold text-sm">HEADER ZONE - 20%</div>
          <div className="text-xs text-gray-600 mt-1">Logo (15%) + Tagline (5%)</div>
        </div>
      </div>

      {/* Hero Image Zone - 35% */}
      <div className="absolute top-[20%] left-0 right-0 h-[35%] bg-orange-100 border-b-2 border-orange-300 flex items-center justify-center">
        <div className="text-center">
          <div className="text-orange-600 font-bold text-sm">HERO IMAGE ZONE - 35%</div>
          <div className="text-xs text-gray-600 mt-1">High-quality rotisserie chicken photo</div>
          <div className="text-xs text-gray-600">Dripping with appeal, golden-brown</div>
        </div>
      </div>

      {/* Offer Zone - 25% */}
      <div className="absolute top-[55%] left-0 right-0 h-[25%] bg-yellow-100 border-b-2 border-yellow-300 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-yellow-700 font-bold text-sm">OFFER ZONE - 25%</div>
          <div className="text-xs text-gray-600 mt-1">Headline (8%) + Price (7%) + Details (10%)</div>
          <div className="text-xs text-gray-600">Most important conversion area</div>
        </div>
      </div>

      {/* CTA Zone - 20% */}
      <div className="absolute top-[80%] left-0 right-0 h-[20%] bg-green-100 border-b-2 border-green-300 flex items-center justify-center">
        <div className="text-center">
          <div className="text-green-600 font-bold text-sm">CALL-TO-ACTION ZONE - 20%</div>
          <div className="text-xs text-gray-600 mt-1">Phone + Hours + CTA Button (12%)</div>
          <div className="text-xs text-gray-600">Social proof + urgency (8%)</div>
        </div>
      </div>

      {/* Margins indicator */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-blue-400 pointer-events-none">
        <div className="absolute -top-6 left-0 text-xs text-blue-600 font-semibold">0.5" Safe Margin</div>
      </div>
    </div>
  );

  const HierarchyView = () => (
    <div className="relative w-full h-[800px] bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-gray-800 shadow-2xl p-8">
      <div className="space-y-6">
        {/* Primary Elements */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold">PRIMARY LEVEL (3 elements)</h3>
            <span className="text-sm bg-white text-red-500 px-3 py-1 rounded-full">First 2 seconds</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span>Hero Image: 40% of visual weight - Must trigger appetite</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span>Main Headline: 36-48pt bold - "POLLO AL HORNO ESPECIAL"</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span>Price: 42pt bold in contrasting color - "$24.99"</span>
            </div>
          </div>
        </div>

        {/* Secondary Elements */}
        <div className="bg-orange-400 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">SECONDARY LEVEL (4-5 elements)</h3>
            <span className="text-sm bg-white text-orange-500 px-3 py-1 rounded-full">3-5 seconds</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span>Subheadline: 24-30pt - "Perfecto para toda la familia"</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span>Offer details: 18-20pt - "Incluye 3 acompañamientos"</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span>Supporting images: Side dishes (15% visual weight)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span>Logo: Top-left, 10-12% of header height</span>
            </div>
          </div>
        </div>

        {/* Tertiary Elements */}
        <div className="bg-yellow-500 text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">TERTIARY LEVEL (5-7 elements)</h3>
            <span className="text-sm bg-gray-800 text-white px-3 py-1 rounded-full">6-10 seconds</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
              <span>Phone number: 20-24pt bold - Highly visible</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
              <span>Hours: 14-16pt - "Lunes-Domingo 10am-9pm"</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
              <span>Address: 12-14pt with map icon</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
              <span>Social proof: "500+ familias servidas"</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
              <span>QR code: Order online convenience</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
              <span>Urgency text: "¡Ordena antes del 20 de diciembre!"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ColorView = () => (
    <div className="relative w-full h-[800px] bg-white border-4 border-gray-800 shadow-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Color Palette & Usage Guidelines</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Primary Red */}
        <div className="bg-[#C41E3A] p-6 rounded-lg text-white shadow-lg">
          <div className="text-3xl font-bold mb-2">Primary Red</div>
          <div className="text-xl mb-4">#C41E3A</div>
          <div className="text-sm space-y-1">
            <div>• Headlines (30% usage)</div>
            <div>• CTA buttons</div>
            <div>• Price highlights</div>
            <div>• Border accents</div>
            <div className="mt-3 pt-3 border-t border-white/30">
              <strong>Psychology:</strong> Appetite stimulation, urgency, cultural warmth
            </div>
          </div>
        </div>

        {/* Rich Gold */}
        <div className="bg-[#D4AF37] p-6 rounded-lg text-gray-800 shadow-lg">
          <div className="text-3xl font-bold mb-2">Rich Gold</div>
          <div className="text-xl mb-4">#D4AF37</div>
          <div className="text-sm space-y-1">
            <div>• Offer backgrounds (20% usage)</div>
            <div>• Decorative elements</div>
            <div>• Holiday accents</div>
            <div>• "Limited time" badges</div>
            <div className="mt-3 pt-3 border-t border-gray-600/30">
              <strong>Psychology:</strong> Premium quality, celebration, value
            </div>
          </div>
        </div>

        {/* Forest Green */}
        <div className="bg-[#228B22] p-6 rounded-lg text-white shadow-lg">
          <div className="text-3xl font-bold mb-2">Forest Green</div>
          <div className="text-xl mb-4">#228B22</div>
          <div className="text-sm space-y-1">
            <div>• Secondary CTAs (15% usage)</div>
            <div>• Fresh/healthy callouts</div>
            <div>• Christmas elements</div>
            <div>• Trust indicators</div>
            <div className="mt-3 pt-3 border-t border-white/30">
              <strong>Psychology:</strong> Freshness, health, natural cooking
            </div>
          </div>
        </div>

        {/* Cream */}
        <div className="bg-[#FFFDD0] p-6 rounded-lg text-gray-800 shadow-lg border-2 border-gray-300">
          <div className="text-3xl font-bold mb-2">Cream</div>
          <div className="text-xl mb-4">#FFFDD0</div>
          <div className="text-sm space-y-1">
            <div>• Background (25% usage)</div>
            <div>• Text areas</div>
            <div>• Breathing space</div>
            <div>• Contrast foundation</div>
            <div className="mt-3 pt-3 border-t border-gray-600/30">
              <strong>Psychology:</strong> Sophistication, warmth, readability
            </div>
          </div>
        </div>

        {/* Deep Brown */}
        <div className="bg-[#3E2723] p-6 rounded-lg text-white shadow-lg col-span-2">
          <div className="text-3xl font-bold mb-2">Deep Brown (Body Text)</div>
          <div className="text-xl mb-4">#3E2723</div>
          <div className="text-sm space-y-1">
            <div>• All body text (10% usage but 100% of copy)</div>
            <div>• Descriptions and details</div>
            <div>• Contact information</div>
            <div>• Fine print</div>
            <div className="mt-3 pt-3 border-t border-white/30">
              <strong>Psychology:</strong> Earthiness, warmth, premium readability (better than black)
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TypographyView = () => (
    <div className="relative w-full h-[800px] bg-gradient-to-br from-gray-50 to-white border-4 border-gray-800 shadow-2xl p-8 overflow-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Typography Specifications</h2>
      
      <div className="space-y-8">
        {/* Main Headline */}
        <div className="border-4 border-red-500 p-6 rounded-lg bg-white shadow-lg">
          <div className="text-red-500 text-sm font-bold mb-3">MAIN HEADLINE STYLE</div>
          <div className="text-5xl font-bold text-gray-800 leading-tight mb-4">
            POLLO AL HORNO
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Size:</strong> 48pt (3rem)</div>
            <div><strong>Weight:</strong> Bold (700-900)</div>
            <div><strong>Font:</strong> Montserrat / Bebas Neue</div>
            <div><strong>Line height:</strong> 1.1-1.2</div>
            <div><strong>Color:</strong> #C41E3A or #3E2723</div>
            <div><strong>Transform:</strong> Uppercase for impact</div>
          </div>
        </div>

        {/* Subheadline */}
        <div className="border-4 border-orange-400 p-6 rounded-lg bg-white shadow-lg">
          <div className="text-orange-500 text-sm font-bold mb-3">SUBHEADLINE STYLE</div>
          <div className="text-3xl font-semibold text-gray-800 mb-4">
            Perfecto para toda la familia
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Size:</strong> 28pt (1.75rem)</div>
            <div><strong>Weight:</strong> Semi-bold (600)</div>
            <div><strong>Font:</strong> Open Sans / Lato</div>
            <div><strong>Line height:</strong> 1.3</div>
            <div><strong>Color:</strong> #3E2723</div>
            <div><strong>Transform:</strong> Sentence case</div>
          </div>
        </div>

        {/* Price */}
        <div className="border-4 border-yellow-500 p-6 rounded-lg bg-yellow-50 shadow-lg">
          <div className="text-yellow-700 text-sm font-bold mb-3">PRICE DISPLAY STYLE</div>
          <div className="text-6xl font-bold text-[#C41E3A] mb-4">
            $24<span className="text-4xl align-top">.99</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Size:</strong> 56pt (3.5rem) + 36pt cents</div>
            <div><strong>Weight:</strong> Extra-bold (800-900)</div>
            <div><strong>Font:</strong> Same as headline</div>
            <div><strong>Special:</strong> Cents superscript</div>
            <div><strong>Color:</strong> #C41E3A (red)</div>
            <div><strong>Background:</strong> Yellow/Gold highlight</div>
          </div>
        </div>

        {/* Body Text */}
        <div className="border-4 border-blue-400 p-6 rounded-lg bg-white shadow-lg">
          <div className="text-blue-500 text-sm font-bold mb-3">BODY TEXT STYLE</div>
          <div className="text-base text-gray-800 mb-4 leading-relaxed">
            Nuestro delicioso pollo al horno, marinado con especias tradicionales y cocinado a la perfección. 
            Incluye arroz, frijoles y ensalada fresca. ¡Ordena hoy para las fiestas!
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Size:</strong> 12-14pt (0.875rem)</div>
            <div><strong>Weight:</strong> Regular (400)</div>
            <div><strong>Font:</strong> Open Sans / Roboto</div>
            <div><strong>Line height:</strong> 1.5-1.6</div>
            <div><strong>Color:</strong> #3E2723</div>
            <div><strong>Max width:</strong> 60-70 characters/line</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-4 border-green-500 p-6 rounded-lg bg-[#228B22] shadow-lg">
          <div className="text-green-200 text-sm font-bold mb-3">CALL-TO-ACTION STYLE</div>
          <div className="inline-block bg-white px-8 py-4 rounded-lg text-[#228B22] text-2xl font-bold mb-4 shadow-md">
            ¡ORDENA AHORA!
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-white">
            <div><strong>Size:</strong> 24pt (1.5rem)</div>
            <div><strong>Weight:</strong> Bold (700)</div>
            <div><strong>Font:</strong> Same as headline</div>
            <div><strong>Button padding:</strong> 16px vertical, 32px horizontal</div>
            <div><strong>Color:</strong> White text on green</div>
            <div><strong>Border-radius:</strong> 8-12px</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-4 border-purple-400 p-6 rounded-lg bg-white shadow-lg">
          <div className="text-purple-500 text-sm font-bold mb-3">CONTACT INFO STYLE</div>
          <div className="text-2xl font-bold text-gray-800 mb-2">
            📞 (555) 123-4567
          </div>
          <div className="text-base text-gray-700">
            📍 1234 Mission Street, Los Angeles, CA
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
            <div><strong>Phone size:</strong> 20-24pt</div>
            <div><strong>Weight:</strong> Bold (700)</div>
            <div><strong>Address size:</strong> 14pt</div>
            <div><strong>Weight:</strong> Regular (400)</div>
            <div><strong>Icons:</strong> 1.2x text size</div>
            <div><strong>Color:</strong> #3E2723</div>
          </div>
        </div>
      </div>
    </div>
  );

  const WhitespaceView = () => (
    <div className="relative w-full h-[800px] bg-gray-100 border-4 border-gray-800 shadow-2xl">
      <div className="absolute inset-0 p-12 border-8 border-dashed border-blue-400">
        <div className="h-full bg-white shadow-inner rounded-lg p-8 relative">
          {/* Visual representation of spacing */}
          <div className="absolute top-8 left-8 right-8 text-center">
            <div className="bg-red-500 h-16 flex items-center justify-center text-white font-bold rounded">
              HEADER (0.5" margin from edge)
            </div>
          </div>

          <div className="absolute top-32 left-8 right-8 text-center">
            <div className="h-4 bg-blue-200 rounded mb-1"></div>
            <div className="text-xs text-blue-600 font-semibold">0.5" breathing space</div>
          </div>

          <div className="absolute top-44 left-8 right-8">
            <div className="bg-orange-400 h-48 flex items-center justify-center text-white font-bold rounded">
              HERO IMAGE<br/>(0.25" internal padding)
            </div>
          </div>

          <div className="absolute top-[400px] left-8 right-8">
            <div className="h-6 bg-blue-200 rounded mb-1"></div>
            <div className="text-xs text-blue-600 font-semibold text-center">0.75" between major sections</div>
          </div>

          <div className="absolute top-[450px] left-8 right-8">
            <div className="bg-yellow-400 h-32 flex items-center justify-center text-gray-800 font-bold rounded">
              OFFER SECTION<br/>(0.5" internal padding)
            </div>
          </div>

          <div className="absolute bottom-32 left-8 right-8">
            <div className="h-4 bg-blue-200 rounded mb-1"></div>
            <div className="text-xs text-blue-600 font-semibold text-center">0.5" breathing space</div>
          </div>

          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-green-500 h-20 flex items-center justify-center text-white font-bold rounded">
              CTA & CONTACT (0.5" margin from edge)
            </div>
          </div>

          {/* Side margins indicator */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <div className="w-1 h-32 bg-blue-400 rounded"></div>
            <div className="text-xs text-blue-600 font-semibold">0.5" margins</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="font-bold">White Space Distribution</div>
          <div className="text-xs mt-1">30-40% of total flyer area should be white/breathing space</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Restaurant Flyer Anatomy Breakdown
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Professional template for Salvadorian restaurant holiday promotion
        </p>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
          <button
            onClick={() => setActiveView('layout')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'layout'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Layout size={20} />
            Layout Zones
          </button>
          <button
            onClick={() => setActiveView('hierarchy')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'hierarchy'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <ZoomIn size={20} />
            Hierarchy
          </button>
          <button
            onClick={() => setActiveView('colors')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'colors'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Palette size={20} />
            Color Palette
          </button>
          <button
            onClick={() => setActiveView('typography')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'typography'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Type size={20} />
            Typography
          </button>
          <button
            onClick={() => setActiveView('whitespace')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'whitespace'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Info size={20} />
            White Space
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-2xl">
          {activeView === 'layout' && <LayoutView />}
          {activeView === 'hierarchy' && <HierarchyView />}
          {activeView === 'colors' && <ColorView />}
          {activeView === 'typography' && <TypographyView />}
          {activeView === 'whitespace' && <WhitespaceView />}
        </div>

        {/* Key Insights */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Info size={24} />
            Critical Design Insights
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-1">🎯 F-Pattern Reading</div>
              <div className="text-blue-100">Top-left to top-right, then down left side. Place key info accordingly.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">📸 Hero Image Power</div>
              <div className="text-blue-100">35% of space = 87% attention capture. Make it drool-worthy.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">💰 Price Visibility</div>
              <div className="text-blue-100">Large, bold, contrasting color. 76% notice within 3 seconds.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerAnatomyTemplate;

