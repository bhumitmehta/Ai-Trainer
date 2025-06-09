"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Info } from "lucide-react"
import { Button } from "../../components/ui/button"
import { GlassCard } from "../../components/ui/glass-card"
import { GradientText } from "../../components/gradient-text"
import Link from "next/link"
import dynamic from "next/dynamic"
import lunges from "../../public/Images/lunges.jpg"
import plank from "../../public/Images/plank.jpg"
import situps from "../../public/Images/situps.jpg"
import shoulderPress from "../../public/Images/shoulderpress.jpg"
import pushup from "../../public/Images/pushup.jpg"
import squats from "../../public/Images/squats.jpg"
import bicepleft from "../../public/Images/bicep-left.png" 
import bicepright from "../../public/Images/bicep-right.png"
import jumpingJacks from "../../public/Images/jumpingjacks.jpg"
import highknees from "../../public/Images/highknees.jpg"

// Dynamically import components that use browser APIs with no SSR
const ExerciseGrid = dynamic(() => import("./exercise-grid"), { ssr: false })
const WebcamViewWrapper = dynamic(() => import("./webcam-view"), { ssr: false })

export default function ExercisePage() {
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [isMounted, setIsMounted] = useState(false)

  // Only run on client side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const exercises = [
    {
      id:1,
      name: "Bicep Curl - Left arm",
      description: "An isolation exercise that targets the biceps.",
      imagePath: bicepleft, // Replace modelPath with imagePath
      difficulty: "Beginner",
    },
    {
      id: 2,
      name: "Bicep Curl - Right arm",
      description: "An isolation exercise that targets the biceps.",
      imagePath: bicepright, // Replace modelPath with imagePath
      difficulty: "Beginner",
    },
    {
      id:3,
      name: "Shoulder Press",
      description: "An upper body exercise that targets the shoulders and triceps.",
      imagePath: shoulderPress, // Replace modelPath with imagePath
      difficulty: "Intermediate",
    },
    {
      id: 4,
      name: "Push-up",
      description: "An upper body exercise that works the chest, shoulders, and triceps.",
      imagePath: pushup,
      difficulty: "Intermediate",
    },
    {
      id: 5,
      name: "Squats",
      description: "A compound exercise that targets the quadriceps, hamstrings, and glutes.",
      imagePath: squats, // Replace modelPath with imagePath
      difficulty: "Beginner",
    },
    {
      id: 6,
      name: "Lunges - Left leg",
      description: "A lower body exercise that works the quadriceps, hamstrings, and glutes.",
      imagePath: lunges,
      difficulty: "Intermediate",
    },
    {
      id: 7,
      name: "Lunges - Right leg",
      description: "A lower body exercise that works the quadriceps, hamstrings, and glutes.",
      imagePath: lunges,
      difficulty: "Intermediate",
    },
    {
      id:8,
      name: "Jumping Jacks",
      description: "A full-body exercise that improves cardiovascular fitness.",
      imagePath: jumpingJacks, // Replace modelPath with imagePath
      difficulty: "Beginner",
    },
    {
      id:9,
      name:"High Knees",
      description: "A cardio exercise that targets the legs and core.",
      imagePath: highknees, // Replace modelPath with imagePath
      difficulty: "Beginner",
    },
    {
      id:10,
      name:"Sit-ups",
      description: "An abdominal exercise that targets the core.",
      imagePath: situps, // Replace modelPath with imagePath
      difficulty: "Beginner",
    },
    {
      id:11,
      name:"Plank",
      description: "A core exercise that targets the abdominal muscles.",
      imagePath: plank, // Replace modelPath with imagePath
      difficulty: "Beginner",
    },
    // {
    //   id:12,
    //   name:"Frog Press",
    //   description: "A compound exercise that targets the chest, shoulders, and triceps.",
    //   imagePath: "/assets/images/frog-press.jpg", // Replace modelPath with imagePath
    //   difficulty: "Intermediate",
    // }
  ]

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">
            <GradientText>Exercise Evaluation</GradientText>
          </h1>
        </div>

        <GlassCard className="p-6 mb-10">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2">How It Works</h2>
              <p className="text-white/80">
                Select an exercise from the grid below. Our system will use your webcam to analyze your form
                and provide real-time feedback to help you improve your technique.
              </p>
            </div>
          </div>
        </GlassCard>

        {isMounted && (
          <>
            <ExerciseGrid exercises={exercises} onSelectExercise={setSelectedExercise} />

            {selectedExercise && (
              <WebcamViewWrapper exercise={selectedExercise} onClose={() => setSelectedExercise(null)} />
            )}
          </>
        )}
      </div>
    </div>
  )
}