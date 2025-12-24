import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, ArrowLeft } from 'lucide-react'

const VideoGalleryPage = () => {
  const videos = [
    {
      id: 1,
      title: 'Run Trial',
      src: 'https://cdn.glitch.me/2a1e26d9-ab9f-4d0d-922f-a475d812e321/lv_0_20241230154014.mp4?v=1735558460386',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent"
          >
            Video Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed"
          >
            Explore our collection of videos showcasing our projects, services, and innovations.
          </motion.p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <video
                      controls
                      className="w-full h-auto rounded-t-xl"
                      poster=""
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
                      <Play className="w-4 h-4" />
                      Video
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h2>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">No videos available at the moment.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoGalleryPage

