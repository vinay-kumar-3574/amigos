import { cn } from '@/lib/utils'
import {
  Palette,
  Cpu,
  Shield,
  Phone,
  Wrench,
  Headphones,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  'Custom Design': Palette,
  'IoT and AI Integration': Cpu,
  'Warranty': Shield,
  'Roadside Assistance': Phone,
  'Service through Mobile': Wrench,
  'Online and Offline Support': Headphones,
}

// Helper function to get icon
const getIcon = (title) => {
  if (!title) return Palette
  const cleanTitle = title.trim()
  return iconMap[cleanTitle] || iconMap[title] || Palette
}

const ServicesPage = ({ servicesList }) => {
  // Take first 8 services for the grid (or all if less than 8)
  const displayServices = servicesList.slice(0, 8)

  if (!servicesList || servicesList.length === 0) {
    return null
  }

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-neutral-800">
          Our Services
        </h2>
        <p className="text-center text-neutral-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          We offer a range of high-quality services to meet your needs. Explore what we can do for you below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 bg-white rounded-lg shadow-sm border border-neutral-200">
          {displayServices.map((service, index) => (
            <Service key={service.title || `service-${index}`} {...service} index={index} totalItems={displayServices.length} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

const Service = ({ title, text, index, totalItems }) => {
  if (!title) return null
  
  const IconComponent = getIcon(title)
  const isLastRow = index >= Math.floor(totalItems / 3) * 3
  const isLastInRow = (index + 1) % 3 === 0
  const isFirstInRow = index % 3 === 0

  return (
    <div
      className={cn(
        'flex flex-col py-10 relative group/service',
        !isLastInRow && 'border-r border-neutral-200',
        !isLastRow && 'border-b border-neutral-200'
      )}
    >
      {!isLastRow && (
        <div className="opacity-0 group-hover/service:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {isLastRow && (
        <div className="opacity-0 group-hover/service:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/service:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/service:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/service:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {text}
      </p>
    </div>
  )
}

export default ServicesPage

