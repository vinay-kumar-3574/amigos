import { cn } from '@/lib/utils'
import {
  Zap,
  Shield,
  Users,
  Cloud,
  Flame,
  AlertTriangle,
  Wind,
  HeartPulse,
  Car,
  Disc,
  Gauge,
  ShieldCheck,
  Battery,
  Wrench,
  Package,
  Anchor,
  Lightbulb,
  Settings,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  'High Performance': Zap,
  'Secure': Shield,
  'User Friendly': Users,
  'Cloud-Based': Cloud,
  'Automatic Fire Suppression System': Flame,
  'Automatic Current Circuit Failure Detection System': AlertTriangle,
  'Automatic Gas Leakage Detection and Cut-off System': Wind,
  'Emergency Vehicle Shutdown System with Driver Health Trigger': HeartPulse,
  'Ergonomic Seat Design': Car,
  'Brake Systems': Disc,
  'Brake Systems ': Disc, // Handle trailing space
  'Suspension System': Gauge,
  'Suspension System ': Gauge, // Handle trailing space
  'Roll-Over Protection (ROPS)': ShieldCheck,
  '5 Point Seatbelt': Shield,
  'Electric Start': Battery,
  'Digital Display': Settings,
  'Storage Compartments': Package,
  'Towing Capacity': Anchor,
  'Winch Systems': Wrench,
  'LED Lights': Lightbulb,
  'Custom Accessories': Settings,
}

// Helper function to get icon
const getIcon = (title) => {
  if (!title) return Zap
  const cleanTitle = title.trim()
  return iconMap[cleanTitle] || iconMap[title] || Zap
}

export function FeaturesSectionWithHoverEffects({ features = [] }) {
  // Take first 8 features for the grid
  const displayFeatures = features.slice(0, 8)

  if (!features || features.length === 0) {
    return null
  }

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-neutral-800">
          Features
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          Discover the advanced features and safety systems that make our vehicles stand out
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 bg-white rounded-lg shadow-sm">
          {displayFeatures.map((feature, index) => (
            <Feature key={feature.title || `feature-${index}`} {...feature} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/features"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors font-medium"
          >
            View All Features
          </Link>
        </div>
      </div>
    </section>
  )
}

const Feature = ({ title, text, description, index }) => {
  if (!title) return null
  
  const IconComponent = getIcon(title)
  const displayText = text || description || ''

  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature border-neutral-200',
        (index === 0 || index === 4) && 'lg:border-l border-neutral-200',
        index < 4 && 'lg:border-b border-neutral-200'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {displayText}
      </p>
    </div>
  )
}

