import { motion } from 'framer-motion'

const CompetitorAnalysis = () => {
  const competitorData = [
    {
      parameter: 'Model',
      yamaha: 'Grizzly EPS',
      teamAmigos: 'Amigos Thunder 400',
      cfmoto: 'CForce 600',
      kawasaki: 'Kawasaki Brute 750',
      trailForge: 'TrailForge XR-500',
      astraRide: 'AstraRide Pro 450',
    },
    {
      parameter: 'Engine Model',
      yamaha: '686 cc liquid-cooled SOHC 4-stroke engine',
      teamAmigos: 'Bi-fuel BSVI CNG, 4-stroke single-cylinder',
      cfmoto: '580 cc four-valve, EFI, liquid-cooled engine',
      kawasaki: '749 cc liquid-cooled V-twin, four-stroke engine',
      trailForge: '520 cc liquid-cooled DOHC 4-stroke engine',
      astraRide: '450 cc air-cooled single-cylinder 4-stroke engine',
    },
    {
      parameter: 'Weight (kg)',
      yamaha: '313',
      teamAmigos: '290',
      cfmoto: '394',
      kawasaki: '274',
      trailForge: '305',
      astraRide: '285',
    },
    {
      parameter: 'Max Speed',
      yamaha: '60 kmph',
      teamAmigos: '60 kmph',
      cfmoto: '60 kmph',
      kawasaki: '85 kmph',
      trailForge: '65 kmph',
      astraRide: '55 kmph',
    },
    {
      parameter: 'Type of ATV',
      yamaha: 'Utility',
      teamAmigos: 'Sports / Utility',
      cfmoto: 'Sports',
      kawasaki: 'Utility',
      trailForge: 'Utility',
      astraRide: 'Sports',
    },
    {
      parameter: 'CNG Gas Detection System',
      yamaha: '✗',
      teamAmigos: '✓',
      cfmoto: '✗',
      kawasaki: '✗',
      trailForge: '✗',
      astraRide: '✗',
    },
    {
      parameter: 'Automatic Fire Suppression System',
      yamaha: '✗',
      teamAmigos: '✓',
      cfmoto: '✗',
      kawasaki: '✗',
      trailForge: '✗',
      astraRide: '✗',
    },
    {
      parameter: 'Fuel',
      yamaha: 'Petrol',
      teamAmigos: 'Bi-Fuel (Petrol + CNG)',
      cfmoto: 'Petrol',
      kawasaki: 'Petrol',
      trailForge: 'Petrol',
      astraRide: 'Petrol',
    },
    {
      parameter: 'Price (₹)',
      yamaha: '8,77,000',
      teamAmigos: '6,76,500',
      cfmoto: '6,75,000',
      kawasaki: '9,00,000',
      trailForge: '7,25,000',
      astraRide: '6,50,000',
    },
    {
      parameter: 'Warranty',
      yamaha: '12 months',
      teamAmigos: '30 months',
      cfmoto: '24 months',
      kawasaki: '12 months',
      trailForge: '18 months',
      astraRide: '15 months',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-neutral-800 mb-6">Competitor Analysis</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 sticky left-0 bg-gray-50 z-10">
                Parameters
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-700">Yamaha</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-700 bg-blue-50">Team Amigos</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-700">CFMOTO</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-700">Kawasaki</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-700">TrailForge Motors</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-700">AstraRide Vehicles</th>
            </tr>
          </thead>
          <tbody>
            {competitorData.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="px-4 py-3 text-sm font-medium text-neutral-700 sticky left-0 bg-inherit z-10">
                  {row.parameter}
                </td>
                <td className="px-4 py-3 text-center text-sm text-neutral-600">{row.yamaha}</td>
                <td className="px-4 py-3 text-center text-sm text-neutral-600 bg-blue-50 font-medium">
                  {row.teamAmigos}
                </td>
                <td className="px-4 py-3 text-center text-sm text-neutral-600">{row.cfmoto}</td>
                <td className="px-4 py-3 text-center text-sm text-neutral-600">{row.kawasaki}</td>
                <td className="px-4 py-3 text-center text-sm text-neutral-600">{row.trailForge}</td>
                <td className="px-4 py-3 text-center text-sm text-neutral-600">{row.astraRide}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  )
}

export default CompetitorAnalysis

