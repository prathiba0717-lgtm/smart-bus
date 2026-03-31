import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bus, Shield, Smartphone, Users, Zap, Globe, CheckCircle2 } from 'lucide-react';
import { useApp } from './AppContext';
import { APP_VERSION, APP_BUILD, CHANGELOG } from './constants';
import { Badge } from './badge';

export default function AboutScreen() {
  const navigate = useNavigate();
  const { translations, theme } = useApp();

  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Live Crowd Tracking',
      description: 'Real-time passenger count and crowd level monitoring'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'AI Predictions',
      description: 'Smart predictions for next bus crowd levels'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Female Safety',
      description: 'Safety indicators and SOS emergency features'
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Seat Booking',
      description: 'Book your seat in advance for a comfortable journey'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Multi-Language',
      description: 'Support for English and Tamil languages'
    },
    {
      icon: <Bus className="w-5 h-5" />,
      title: 'Route Planner',
      description: '25+ major bus terminals across Tamil Nadu & South India'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${theme === 'dark' ? 'bg-purple-900' : 'bg-purple-600'} text-white shadow-lg sticky top-0 z-50`}>
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg hover:bg-purple-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold">About</h1>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* App Logo & Name */}
        <div className={`${theme === 'dark' ? 'bg-gradient-to-br from-purple-900 to-purple-800' : 'bg-gradient-to-br from-purple-500 to-purple-600'} rounded-2xl shadow-lg p-8 mb-6 text-center`}>
          <div className="mb-4">
            <Bus className="w-20 h-20 text-white mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{translations.appName}</h2>
          <p className="text-purple-100 mb-4">{translations.tagline}</p>
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-white/20 text-white hover:bg-white/20">
              Version {APP_VERSION}
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/20">
              Build {APP_BUILD}
            </Badge>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Key Features
          </h3>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-4 shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 mb-6`}>
          <h3 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About SmartBus
          </h3>
          <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            SmartBus Crowd Management is a government initiative designed to revolutionize public transportation.
            Our mission is to make bus travel safer, more comfortable, and more efficient for everyone.
          </p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Using cutting-edge AI technology and real-time data, we help passengers make informed decisions
            about their travel, reducing overcrowding and improving the overall commuting experience.
          </p>
        </div>

        {/* Tech Stack */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 mb-6`}>
          <h3 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Technology
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">React</Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">TypeScript</Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Tailwind CSS</Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">AI/ML</Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Real-time GPS</Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Cloud Computing</Badge>
          </div>
        </div>

        {/* Changelog */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 mb-6`}>
          <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            What's New
          </h3>
          {CHANGELOG.map((release, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-purple-600 text-white hover:bg-purple-600">
                  v{release.version}
                </Badge>
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {release.date}
                </span>
              </div>
              <ul className="space-y-2">
                {release.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            🇮🇳 Smart City Initiative
          </p>
          <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            Made with ❤️ for better public transportation
          </p>
          <p className={`text-xs mt-4 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}>
            © 2026 SmartBus. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
