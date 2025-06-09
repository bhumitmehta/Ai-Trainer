// "use client"

// import { motion } from "framer-motion"
// import { GlassCard } from "../../components/ui/glass-card"
// import Image from "next/image"

// // Exercise Card component
// function ExerciseCard({ exercise, onClick }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="cursor-pointer"
//       onClick={() => onClick(exercise)}
//     >
//       <GlassCard className="h-full overflow-hidden">
//         <div className="h-48 relative">
//           <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-500/20 to-purple-500/20">
//             {/* Replace 3D model with image */}
//             <Image 
//               src={`/assets/images/${exercise.id}.jpg`} 
//               alt={exercise.name}
//               width={300}
//               height={200}
//               className="object-cover h-full w-full"
//               onError={(e) => {
//                 // Fallback image if the exercise image doesn't exist
//                 e.target.src = "/assets/images/exercise-placeholder.jpg"
//               }}
//             />
            
//             {/* Exercise difficulty badge */}
//             <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
//               {exercise.difficulty}
//             </div>
//           </div>
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-bold mb-1">{exercise.name}</h3>
//           <p className="text-white/70 text-sm">{exercise.description}</p>
//         </div>
//       </GlassCard>
//     </motion.div>
//   )
// }

// export default function ExerciseGrid({ exercises, onSelectExercise }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {exercises.map((exercise) => (
//         <ExerciseCard key={exercise.id} exercise={exercise} onClick={onSelectExercise} />
//       ))}
//     </div>
//   )
// }

// modified code v2

"use client"

import { motion } from "framer-motion"
import { GlassCard } from "../../components/ui/glass-card"
import Image from "next/image"

// Exercise Card component
function ExerciseCard({ exercise, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
      onClick={() => onClick(exercise)}
    >
      <GlassCard className="h-full overflow-hidden">
        <div className="h-48 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-500/20 to-purple-500/20">
            {/* Exercise image - Updated to show entire image */}
            <div className="relative h-full w-full flex items-center justify-center">
              <Image 
                src={exercise.imagePath}
                alt={exercise.name}
                width={300}
                height={200}
                className="object-contain max-h-full max-w-full p-2"
                onError={(e) => {
                  e.target.src = "/assets/images/exercise-placeholder.jpg"
                }}
              />
            </div>
            
            {/* Exercise difficulty badge */}
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
              {exercise.difficulty}
            </div>
            
            {/* Exercise id (for API call) */}
            <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
              ID: {exercise.id}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1">{exercise.name}</h3>
          <p className="text-white/70 text-sm">{exercise.description}</p>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function ExerciseGrid({ exercises, onSelectExercise }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} onClick={onSelectExercise} />
      ))}
    </div>
  )
}