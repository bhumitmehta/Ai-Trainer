"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Slider } from "../../components/ui/slider"
import { GlassCard } from "../../components/ui/glass-card"
import { GradientText } from "../../components/gradient-text"

export default function BMIPage() {
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState("")
  const [showResult, setShowResult] = useState(false)

  const calculateBMI = () => {
    const bmiValue = weight / ((height / 100) * (height / 100))
    setBmi(bmiValue)

    if (bmiValue < 18.5) {
      setCategory("Underweight")
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory("Normal weight")
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory("Overweight")
    } else {
      setCategory("Obesity")
    }

    setShowResult(true)
  }

  const getCategoryColor = () => {
    if (category === "Underweight") return "from-blue-500 to-cyan-400"
    if (category === "Normal weight") return "from-green-500 to-emerald-400"
    if (category === "Overweight") return "from-yellow-500 to-amber-400"
    if (category === "Obesity") return "from-red-500 to-pink-400"
    return "from-gray-500 to-gray-400"
  }

  const getAdvice = () => {
    if (category === "Underweight") {
      return "Consider increasing your caloric intake with nutrient-dense foods. Focus on strength training to build muscle mass."
    }
    if (category === "Normal weight") {
      return "Maintain your healthy lifestyle with a balanced diet and regular exercise. Focus on both cardio and strength training."
    }
    if (category === "Overweight") {
      return "Consider reducing caloric intake slightly and increasing physical activity. Focus on both cardio and strength training."
    }
    if (category === "Obesity") {
      return "Consult with a healthcare professional for personalized advice. Consider a structured diet and exercise plan."
    }
    return ""
  }

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">
            <GradientText from="from-green-400" via="via-cyan-500" to="to-blue-600">
              BMI Calculator
            </GradientText>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <GlassCard className="p-6 mb-6">
              <div className="flex items-start mb-4">
                <Info className="h-6 w-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold mb-2">What is BMI?</h2>
                  <p className="text-white/80">
                    Body Mass Index (BMI) is a value derived from the weight and height of a person. It is a simple way
                    to categorize a person's weight relative to their height.
                  </p>
                </div>
              </div>
              <div className="text-white/70 text-sm">
                <p className="mb-2">BMI Categories:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Underweight: BMI less than 18.5</li>
                  <li>Normal weight: BMI 18.5 to 24.9</li>
                  <li>Overweight: BMI 25 to 29.9</li>
                  <li>Obesity: BMI 30 or greater</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-6">Calculate Your BMI</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Height (cm)</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[height]}
                    min={100}
                    max={250}
                    step={1}
                    onValueChange={(value) => setHeight(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[weight]}
                    min={30}
                    max={200}
                    step={1}
                    onValueChange={(value) => setWeight(value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>

              <Button
                onClick={calculateBMI}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Calculate BMI
              </Button>
            </GlassCard>
          </div>

          <div>
            {showResult ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <GlassCard className="p-6 h-full">
                  <h2 className="text-xl font-bold mb-6">Your Results</h2>

                  <div className="mb-8">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold mb-2">{bmi.toFixed(1)}</div>
                      <div
                        className={`text-xl font-medium bg-gradient-to-r ${getCategoryColor()} bg-clip-text text-transparent`}
                      >
                        {category}
                      </div>
                    </div>

                    <div className="relative h-8 bg-white/10 rounded-full overflow-hidden mb-4">
                      <div className="absolute inset-0 flex">
                        <div className="h-full w-1/4 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                        <div className="h-full w-1/4 bg-gradient-to-r from-green-500 to-emerald-400"></div>
                        <div className="h-full w-1/4 bg-gradient-to-r from-yellow-500 to-amber-400"></div>
                        <div className="h-full w-1/4 bg-gradient-to-r from-red-500 to-pink-400"></div>
                      </div>

                      <motion.div
                        className="absolute top-0 w-4 h-8 bg-white"
                        initial={{ left: "0%" }}
                        animate={{ left: `${Math.min(Math.max((bmi / 40) * 100, 0), 100)}%` }}
                        transition={{ duration: 1, type: "spring" }}
                        style={{ transform: "translateX(-50%)" }}
                      />
                    </div>

                    <div className="flex justify-between text-xs text-white/70">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obesity</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="font-medium mb-2">Health Advice</h3>
                    <p className="text-white/80 text-sm">{getAdvice()}</p>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      onClick={() => setShowResult(false)}
                      className="border-white/20 hover:bg-white/10"
                    >
                      Recalculate
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <GlassCard className="p-6 h-full flex items-center justify-center">
                <div className="text-center text-white/50">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-medium mb-2">Your BMI Results</h3>
                  <p>Fill out the form and click Calculate to see your results here.</p>
                </div>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
