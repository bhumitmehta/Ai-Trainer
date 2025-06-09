// "use client"

// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "../../components/ui/button"
// import { GlassCard } from "../../components/ui/glass-card"
// import { Camera, X } from "lucide-react"

// export default function WebcamViewWrapper({ exercise, onClose }) {
//   const [browserSupport, setBrowserSupport] = useState(true)

//   useEffect(() => {
//     // Check if we're in a browser environment with required APIs
//     if (
//       typeof window === "undefined" ||
//       typeof navigator === "undefined" ||
//       !navigator.mediaDevices ||
//       !navigator.mediaDevices.getUserMedia
//     ) {
//       setBrowserSupport(false)
//     }
//   }, [])

//   if (!browserSupport) {
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           className="w-full max-w-4xl"
//         >
//           <GlassCard className="relative overflow-hidden p-6">
//             <div className="absolute top-4 right-4 z-10">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={onClose}
//                 className="bg-black/20 hover:bg-black/40 rounded-full"
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </div>
//             <h2 className="text-2xl font-bold mb-4">Browser Not Supported</h2>
//             <p className="text-white/80">
//               Your browser doesn't support the required features for webcam access. Please try using a modern browser
//               like Chrome, Firefox, or Edge.
//             </p>
//           </GlassCard>
//         </motion.div>
//       </div>
//     )
//   }

//   return <WebcamView exercise={exercise} onClose={onClose} />
// }

// function WebcamView({ exercise, onClose }) {
//   const videoRef = useRef(null)
//   const canvasRef = useRef(null)
//   const [isRecording, setIsRecording] = useState(false)
//   const [score, setScore] = useState(0)
//   const [feedback, setFeedback] = useState("Prepare to start...")
//   const [cameraAvailable, setCameraAvailable] = useState(true)

//   useEffect(() => {
//     let stream = null
//     let mounted = true

//     const startCamera = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({ video: true })
//         if (videoRef.current && mounted) {
//           videoRef.current.srcObject = stream
//         }
//       } catch (err) {
//         console.error("Error accessing webcam:", err)
//         if (mounted) {
//           setCameraAvailable(false)
//         }
//       }
//     }

//     startCamera()

//     // Cleanup function
//     return () => {
//       mounted = false
//       if (stream) {
//         stream.getTracks().forEach((track) => track.stop())
//       }
//     }
//   }, [])

//   const startRecording = () => {
//     setIsRecording(true)
//     setFeedback("Analyzing your form...")

//     // Simulate score increasing
//     const interval = setInterval(() => {
//       setScore((prevScore) => {
//         const newScore = Math.min(prevScore + Math.random() * 5, 100)

//         // Update feedback based on score
//         if (newScore > 80) {
//           setFeedback("Excellent form! Keep it up!")
//         } else if (newScore > 50) {
//           setFeedback("Good form, try to maintain proper posture.")
//         } else {
//           setFeedback("Focus on your form and alignment.")
//         }

//         return newScore
//       })
//     }, 500)

//     // Stop after 10 seconds
//     setTimeout(() => {
//       clearInterval(interval)
//       setIsRecording(false)
//       setFeedback("Exercise completed! See your results.")
//     }, 10000)
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className="w-full max-w-4xl"
//       >
//         <GlassCard className="relative overflow-hidden">
//           <div className="absolute top-4 right-4 z-10">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={onClose}
//               className="bg-black/20 hover:bg-black/40 rounded-full"
//             >
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           <div className="p-6">
//             <h2 className="text-2xl font-bold mb-2">{exercise.name}</h2>
//             <p className="text-white/70 mb-4">{exercise.description}</p>

//             <div className="relative aspect-video bg-black/30 rounded-lg overflow-hidden mb-4">
//               {!cameraAvailable ? (
//                 <div className="absolute inset-0 flex items-center justify-center text-white/70">
//                   Camera access is not available. Please check your browser permissions.
//                 </div>
//               ) : (
//                 <>
//                   <video
//                     ref={videoRef}
//                     autoPlay
//                     playsInline
//                     muted
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                   <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

//                   {/* Overlay with tracking points (simulated) */}
//                   {isRecording && (
//                     <div className="absolute inset-0">
//                       <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
//                       <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-blue-500 rounded-full"></div>
//                       <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full"></div>
//                       <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full"></div>
//                       <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full"></div>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <GlassCard className="p-4">
//                 <h3 className="text-sm font-medium text-white/70 mb-1">Current Score</h3>
//                 <div className="text-3xl font-bold">
//                   {score.toFixed(0)}
//                   <span className="text-lg text-white/50">/100</span>
//                 </div>
//               </GlassCard>

//               <GlassCard className="p-4 md:col-span-2">
//                 <h3 className="text-sm font-medium text-white/70 mb-1">Feedback</h3>
//                 <div className="text-xl font-medium">{feedback}</div>
//               </GlassCard>
//             </div>

//             <div className="relative w-full h-4 bg-white/10 rounded-full overflow-hidden mb-6">
//               <motion.div
//                 className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500"
//                 initial={{ width: "0%" }}
//                 animate={{ width: `${score}%` }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>

//             <div className="flex justify-center">
//               <Button
//                 onClick={isRecording ? () => setIsRecording(false) : startRecording}
//                 size="lg"
//                 disabled={!cameraAvailable}
//                 className={`${
//                   isRecording
//                     ? "bg-red-500 hover:bg-red-600"
//                     : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
//                 } text-white`}
//               >
//                 {isRecording ? "Stop Recording" : "Start Recording"}
//                 <Camera className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </GlassCard>
//       </motion.div>
//     </div>
//   )
// }

// modified code v2
// "use client"

// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "../../components/ui/button"
// import { GlassCard } from "../../components/ui/glass-card"
// import { Camera, X, RefreshCw } from "lucide-react"
// import config from '../../config' // Add this import

// export default function WebcamViewWrapper({ exercise, onClose }) {
//   const [browserSupport, setBrowserSupport] = useState(true)

//   useEffect(() => {
//     // Check if we're in a browser environment with required APIs
//     if (
//       typeof window === "undefined" ||
//       typeof navigator === "undefined" ||
//       !navigator.mediaDevices ||
//       !navigator.mediaDevices.getUserMedia
//     ) {
//       setBrowserSupport(false)
//     }
//   }, [])

//   if (!browserSupport) {
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           className="w-full max-w-4xl"
//         >
//           <GlassCard className="relative overflow-hidden p-6">
//             <div className="absolute top-4 right-4 z-10">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={onClose}
//                 className="bg-black/20 hover:bg-black/40 rounded-full"
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </div>
//             <h2 className="text-2xl font-bold mb-4">Browser Not Supported</h2>
//             <p className="text-white/80">
//               Your browser doesn't support the required features for webcam access. Please try using a modern browser
//               like Chrome, Firefox, or Edge.
//             </p>
//           </GlassCard>
//         </motion.div>
//       </div>
//     )
//   }

//   return <WebcamView exercise={exercise} onClose={onClose} />
// }

// function WebcamView({ exercise, onClose }) {
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [score, setScore] = useState(0)
//   const [feedback, setFeedback] = useState("Prepare to start...")
//   const [connectionError, setConnectionError] = useState(false)
//   const videoRef = useRef(null)
//   const feedbackTimerRef = useRef(null)
//   const {backendUrl} = config

//   // Start the exercise analysis
//   const startAnalysis = () => {
//     setIsAnalyzing(true)
//     setFeedback("Connecting to analysis server...")
    
//     // Increment score periodically to show progress
//     feedbackTimerRef.current = setInterval(() => {
//       setScore(prev => Math.min(prev + 2, 100));
      
//       // Update feedback based on score
//       if (score > 80) {
//         setFeedback("Excellent form! Keep it up!");
//       } else if (score > 50) {
//         setFeedback("Good form, try to maintain proper posture.");
//       } else if (score > 20) {
//         setFeedback("Focus on your form and alignment.");
//       }
//     }, 1000);
//   }

//   // Stop the exercise analysis
//   const stopAnalysis = () => {
//     setIsAnalyzing(false)
    
//     if (feedbackTimerRef.current) {
//       clearInterval(feedbackTimerRef.current);
//     }
    
//     // Reset or stop the backend stream
//     fetch(`${backendUrl}/stop`)
//       .then(response => {
//         if (!response.ok) throw new Error('Failed to stop exercise');
//         setFeedback("Exercise stopped. Click start to begin a new session.");
//       })
//       .catch(err => {
//         console.error("Error stopping exercise:", err);
//         setFeedback("Connection error. Please try again.");
//       });
//   }

//   // Set up the video stream from the backend when analysis starts
//   useEffect(() => {
//     if (!isAnalyzing) return;
    
//     if (videoRef.current) {
//       // Connect to the Flask backend's video stream
//       videoRef.current.src = `${backendUrl}/start_exercise?type=${exercise.id}`;
//       videoRef.current.onerror = () => {
//         setConnectionError(true);
//         setFeedback("Error connecting to analysis server. Please try again.");
//         setIsAnalyzing(false);
//         if (feedbackTimerRef.current) {
//           clearInterval(feedbackTimerRef.current);
//         }
//       };
//     }

//     // Cleanup function
//     return () => {
//       if (feedbackTimerRef.current) {
//         clearInterval(feedbackTimerRef.current);
//       }
      
//       // Stop the backend processing
//       fetch(`${backendUrl}/stop`).catch(err => 
//         console.error("Error stopping exercise on cleanup:", err)
//       );
//     };
//   }, [isAnalyzing, exercise.id]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className="w-full max-w-4xl"
//       >
//         <GlassCard className="relative overflow-hidden">
//           <div className="absolute top-4 right-4 z-10">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={onClose}
//               className="bg-black/20 hover:bg-black/40 rounded-full"
//             >
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           <div className="p-6">
//             <h2 className="text-2xl font-bold mb-2">{exercise.name}</h2>
//             <p className="text-white/70 mb-4">{exercise.description}</p>

//             <div className="relative aspect-video bg-black/30 rounded-lg overflow-hidden mb-4">
//               {connectionError ? (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70">
//                   <div className="mb-4">Connection to analysis server failed.</div>
//                   <Button 
//                     onClick={() => {
//                       setConnectionError(false);
//                       startAnalysis();
//                     }} 
//                     variant="outline"
//                   >
//                     <RefreshCw className="mr-2 h-4 w-4" /> Retry Connection
//                   </Button>
//                 </div>
//               ) : (
//                 <img
//                   ref={videoRef}
//                   className="w-full h-full object-cover"
//                   alt="Exercise analysis feed"
//                 />
//               )}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <GlassCard className="p-4">
//                 <h3 className="text-sm font-medium text-white/70 mb-1">Current Score</h3>
//                 <div className="text-3xl font-bold">
//                   {score.toFixed(0)}
//                   <span className="text-lg text-white/50">/100</span>
//                 </div>
//               </GlassCard>

//               <GlassCard className="p-4 md:col-span-2">
//                 <h3 className="text-sm font-medium text-white/70 mb-1">Feedback</h3>
//                 <div className="text-xl font-medium">{feedback}</div>
//               </GlassCard>
//             </div>

//             <div className="relative w-full h-4 bg-white/10 rounded-full overflow-hidden mb-6">
//               <motion.div
//                 className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500"
//                 initial={{ width: "0%" }}
//                 animate={{ width: `${score}%` }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>

//             <div className="flex justify-center">
//               <Button
//                 onClick={isAnalyzing ? stopAnalysis : startAnalysis}
//                 size="lg"
//                 className={`${
//                   isAnalyzing
//                     ? "bg-red-500 hover:bg-red-600"
//                     : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
//                 } text-white`}
//               >
//                 {isAnalyzing ? "Stop Analysis" : "Start Analysis"}
//                 <Camera className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </GlassCard>
//       </motion.div>
//     </div>
//   )
// }


// // // modified code v2

"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { GlassCard } from "../../components/ui/glass-card"
import { Camera, X, RefreshCw } from "lucide-react"
import config from '../../config'

export default function WebcamViewWrapper({ exercise, onClose }) {
  const [browserSupport, setBrowserSupport] = useState(true)

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof navigator === "undefined" ||
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getUserMedia
    ) {
      setBrowserSupport(false)
    }
  }, [])

  if (!browserSupport) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-full max-w-lg"
        >
          <GlassCard className="relative overflow-hidden p-4">
            <div className="absolute top-2 right-2 z-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="bg-black/20 hover:bg-black/40 rounded-full h-7 w-7 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="text-xl font-bold mb-2">Browser Not Supported</h2>
            <p className="text-white/80 text-sm">
              Your browser doesn't support webcam access. Try Chrome, Firefox, or Edge.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    )
  }

  return <WebcamView exercise={exercise} onClose={onClose} />
}

function WebcamView({ exercise, onClose }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("Prepare to start...")
  const [connectionError, setConnectionError] = useState(false)
  const videoRef = useRef(null)
  const feedbackTimerRef = useRef(null)
  const {backendUrl} = config

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setFeedback("Connecting to analysis server...")
    
    feedbackTimerRef.current = setInterval(() => {
      setScore(prev => Math.min(prev + 2, 100));
      
      if (score > 80) {
        setFeedback("Excellent form! Keep it up!");
      } else if (score > 50) {
        setFeedback("Good form, try to maintain proper posture.");
      } else if (score > 20) {
        setFeedback("Focus on your form and alignment.");
      }
    }, 1000);
  }

  const stopAnalysis = () => {
    setIsAnalyzing(false)
    
    if (feedbackTimerRef.current) {
      clearInterval(feedbackTimerRef.current);
    }
    
    fetch(`${backendUrl}/stop`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to stop exercise');
        setFeedback("Exercise stopped. Click start to begin a new session.");
      })
      .catch(err => {
        console.error("Error stopping exercise:", err);
        setFeedback("Connection error. Please try again.");
      });
  }

  useEffect(() => {
    if (!isAnalyzing) return;
    
    if (videoRef.current) {
      videoRef.current.src = `${backendUrl}/start_exercise?type=${exercise.id}`;
      videoRef.current.onerror = () => {
        setConnectionError(true);
        setFeedback("Error connecting to analysis server. Please try again.");
        setIsAnalyzing(false);
        if (feedbackTimerRef.current) {
          clearInterval(feedbackTimerRef.current);
        }
      };
    }

    return () => {
      if (feedbackTimerRef.current) {
        clearInterval(feedbackTimerRef.current);
      }
      
      fetch(`${backendUrl}/stop`).catch(err => 
        console.error("Error stopping exercise on cleanup:", err)
      );
    };
  }, [isAnalyzing, exercise.id, backendUrl]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-2xl"
      >
        <GlassCard className="relative overflow-hidden">
          <div className="absolute top-2 right-2 z-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="bg-black/20 hover:bg-black/40 rounded-full h-7 w-7 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold mb-1">{exercise.name}</h2>
            <p className="text-white/70 text-xs sm:text-sm mb-2">{exercise.description}</p>

            <div className="relative aspect-video bg-black/30 rounded-lg overflow-hidden mb-3">
              {connectionError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 text-sm">
                  <div className="mb-2">Connection to analysis server failed.</div>
                  <Button 
                    onClick={() => {
                      setConnectionError(false);
                      startAnalysis();
                    }} 
                    variant="outline"
                    size="sm"
                  >
                    <RefreshCw className="mr-1 h-3 w-3" /> Retry
                  </Button>
                </div>
              ) : (
                <img
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  alt="Exercise analysis feed"
                />
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
              <GlassCard className="p-2 sm:p-3">
                <h3 className="text-xs font-medium text-white/70 mb-0.5">Score</h3>
                <div className="text-xl sm:text-2xl font-bold">
                  {score.toFixed(0)}
                  <span className="text-sm text-white/50">/100</span>
                </div>
              </GlassCard>

              <GlassCard className="p-2 sm:p-3 sm:col-span-2">
                <h3 className="text-xs font-medium text-white/70 mb-0.5">Feedback</h3>
                <div className="text-sm sm:text-base font-medium">{feedback}</div>
              </GlassCard>
            </div>

            <div className="relative w-full h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden mb-3">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex justify-center">
              <Button
                onClick={isAnalyzing ? stopAnalysis : startAnalysis}
                size="sm"
                className={`${
                  isAnalyzing
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                } text-white px-4 py-1`}
              >
                {isAnalyzing ? "Stop Analysis" : "Start Analysis"}
                <Camera className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}