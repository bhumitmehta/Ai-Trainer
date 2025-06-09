"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronRight, Filter } from "lucide-react"
import { Button } from "../../components/ui/button"
import { GlassCard } from "../../components/ui/glass-card"
import { GradientText } from "../../components/gradient-text"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

export default function MealPlansPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [flippedCard, setFlippedCard] = useState(null)

  const mealPlans = [
    {
      id: "1",
      title: "High Protein Weight Loss",
      category: "weight-loss",
      calories: 1800,
      image: "/placeholder.svg?height=300&width=400",
      meals: [
        {
          name: "Breakfast",
          calories: 400,
          protein: 30,
          carbs: 30,
          fat: 15,
          description: "Greek yogurt with berries and a scoop of protein powder, topped with a small handful of nuts.",
        },
        {
          name: "Lunch",
          calories: 550,
          protein: 40,
          carbs: 45,
          fat: 20,
          description: "Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette.",
        },
        {
          name: "Dinner",
          calories: 600,
          protein: 45,
          carbs: 40,
          fat: 25,
          description: "Baked salmon with roasted vegetables and quinoa.",
        },
        {
          name: "Snack",
          calories: 250,
          protein: 20,
          carbs: 15,
          fat: 10,
          description: "Protein shake with a small apple.",
        },
      ],
    },
    {
      id: "2",
      title: "Lean Muscle Builder",
      category: "muscle-gain",
      calories: 2800,
      image: "/placeholder.svg?height=300&width=400",
      meals: [
        {
          name: "Breakfast",
          calories: 650,
          protein: 40,
          carbs: 70,
          fat: 20,
          description: "Oatmeal with banana, protein powder, peanut butter, and a side of egg whites.",
        },
        {
          name: "Lunch",
          calories: 750,
          protein: 50,
          carbs: 80,
          fat: 25,
          description: "Chicken and rice bowl with vegetables and avocado.",
        },
        {
          name: "Dinner",
          calories: 800,
          protein: 55,
          carbs: 70,
          fat: 30,
          description: "Lean steak with sweet potato and steamed broccoli.",
        },
        {
          name: "Snack 1",
          calories: 300,
          protein: 25,
          carbs: 30,
          fat: 10,
          description: "Greek yogurt with honey and granola.",
        },
        {
          name: "Snack 2",
          calories: 300,
          protein: 20,
          carbs: 30,
          fat: 10,
          description: "Protein bar and a banana.",
        },
      ],
    },
    {
      id: "3",
      title: "Balanced Maintenance",
      category: "maintenance",
      calories: 2200,
      image: "/placeholder.svg?height=300&width=400",
      meals: [
        {
          name: "Breakfast",
          calories: 500,
          protein: 30,
          carbs: 50,
          fat: 20,
          description: "Whole grain toast with avocado and eggs, side of fruit.",
        },
        {
          name: "Lunch",
          calories: 600,
          protein: 35,
          carbs: 60,
          fat: 25,
          description: "Turkey and vegetable wrap with hummus and a side salad.",
        },
        {
          name: "Dinner",
          calories: 700,
          protein: 40,
          carbs: 60,
          fat: 30,
          description: "Grilled fish with brown rice and roasted vegetables.",
        },
        {
          name: "Snack",
          calories: 400,
          protein: 20,
          carbs: 40,
          fat: 15,
          description: "Smoothie with protein powder, mixed berries, spinach, and almond butter.",
        },
      ],
    },
    {
      id: "4",
      title: "Keto Weight Loss",
      category: "weight-loss",
      calories: 1600,
      image: "/placeholder.svg?height=300&width=400",
      meals: [
        {
          name: "Breakfast",
          calories: 450,
          protein: 30,
          carbs: 5,
          fat: 35,
          description: "Avocado and bacon omelette with spinach.",
        },
        {
          name: "Lunch",
          calories: 500,
          protein: 35,
          carbs: 8,
          fat: 40,
          description: "Chicken salad with olive oil dressing, nuts, and cheese.",
        },
        {
          name: "Dinner",
          calories: 550,
          protein: 40,
          carbs: 10,
          fat: 40,
          description: "Beef stir-fry with low-carb vegetables in coconut oil.",
        },
        {
          name: "Snack",
          calories: 100,
          protein: 5,
          carbs: 2,
          fat: 8,
          description: "String cheese and a small handful of macadamia nuts.",
        },
      ],
    },
    {
      id: "5",
      title: "Vegan Muscle Builder",
      category: "muscle-gain",
      calories: 2600,
      image: "/placeholder.svg?height=300&width=400",
      meals: [
        {
          name: "Breakfast",
          calories: 600,
          protein: 30,
          carbs: 80,
          fat: 15,
          description: "Tofu scramble with vegetables, whole grain toast, and avocado.",
        },
        {
          name: "Lunch",
          calories: 700,
          protein: 35,
          carbs: 90,
          fat: 20,
          description: "Lentil and quinoa bowl with roasted vegetables and tahini dressing.",
        },
        {
          name: "Dinner",
          calories: 750,
          protein: 40,
          carbs: 85,
          fat: 25,
          description: "Tempeh stir-fry with brown rice and mixed vegetables.",
        },
        {
          name: "Snack 1",
          calories: 250,
          protein: 15,
          carbs: 30,
          fat: 10,
          description: "Protein smoothie with plant-based protein, banana, and almond butter.",
        },
        {
          name: "Snack 2",
          calories: 300,
          protein: 20,
          carbs: 35,
          fat: 10,
          description: "Chickpea and vegetable wrap with hummus.",
        },
      ],
    },
    {
      id: "6",
      title: "Mediterranean Maintenance",
      category: "maintenance",
      calories: 2100,
      image: "/placeholder.svg?height=300&width=400",
      meals: [
        {
          name: "Breakfast",
          calories: 450,
          protein: 20,
          carbs: 50,
          fat: 20,
          description: "Greek yogurt with honey, walnuts, and fresh fruit.",
        },
        {
          name: "Lunch",
          calories: 600,
          protein: 30,
          carbs: 60,
          fat: 25,
          description: "Mediterranean salad with chickpeas, feta, olives, and olive oil dressing.",
        },
        {
          name: "Dinner",
          calories: 700,
          protein: 35,
          carbs: 65,
          fat: 30,
          description: "Grilled fish with roasted vegetables and whole grain couscous.",
        },
        {
          name: "Snack",
          calories: 350,
          protein: 15,
          carbs: 40,
          fat: 15,
          description: "Hummus with vegetable sticks and whole grain crackers.",
        },
      ],
    },
  ]

  const filteredMealPlans =
    selectedCategory === "all" ? mealPlans : mealPlans.filter((plan) => plan.category === selectedCategory)

  const getCategoryColor = (category) => {
    switch (category) {
      case "weight-loss":
        return "from-cyan-500 to-blue-600"
      case "muscle-gain":
        return "from-purple-500 to-pink-600"
      case "maintenance":
        return "from-emerald-500 to-green-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getCategoryName = (category) => {
    switch (category) {
      case "weight-loss":
        return "Weight Loss"
      case "muscle-gain":
        return "Muscle Gain"
      case "maintenance":
        return "Maintenance"
      default:
        return category
    }
  }

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
            <GradientText from="from-purple-400" via="via-pink-500" to="to-red-500">
              Meal Plans
            </GradientText>
          </h1>
        </div>

        <div className="flex justify-between items-center mb-8">
          <p className="text-white/70">
            Discover meal plans tailored to your fitness goals. Click on a plan to see detailed meal information.
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <Filter className="h-4 w-4 mr-2" />
                Filter: {selectedCategory === "all" ? "All Plans" : getCategoryName(selectedCategory)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                <DropdownMenuRadioItem value="all">All Plans</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="weight-loss">Weight Loss</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="muscle-gain">Muscle Gain</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="maintenance">Maintenance</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMealPlans.map((plan) => (
            <div key={plan.id} className="perspective-1000">
              <motion.div
                className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
                animate={{ rotateY: flippedCard === plan.id ? 180 : 0 }}
                onClick={() => setFlippedCard(flippedCard === plan.id ? null : plan.id)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden">
                  <GlassCard className="h-full overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={plan.image || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(plan.category)} mb-2`}
                        >
                          {getCategoryName(plan.category)}
                        </div>
                        <h3 className="text-xl font-bold">{plan.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm text-white/70">Daily Calories</div>
                          <div className="text-2xl font-bold">{plan.calories}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70">Meals</div>
                          <div className="text-2xl font-bold">{plan.meals.length}</div>
                        </div>
                      </div>
                      <Button className="w-full bg-white/10 hover:bg-white/20">
                        View Meal Details <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </GlassCard>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <GlassCard className="h-full overflow-auto">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                      <div className="space-y-6">
                        {plan.meals.map((meal, index) => (
                          <div key={index} className="pb-4 border-b border-white/10 last:border-0">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-bold">{meal.name}</h4>
                              <div className="text-sm font-medium">{meal.calories} cal</div>
                            </div>
                            <p className="text-sm text-white/70 mb-3">{meal.description}</p>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="text-center p-1 bg-white/5 rounded">
                                <div className="text-xs text-white/70">Protein</div>
                                <div className="text-sm font-medium">{meal.protein}g</div>
                              </div>
                              <div className="text-center p-1 bg-white/5 rounded">
                                <div className="text-xs text-white/70">Carbs</div>
                                <div className="text-sm font-medium">{meal.carbs}g</div>
                              </div>
                              <div className="text-center p-1 bg-white/5 rounded">
                                <div className="text-xs text-white/70">Fat</div>
                                <div className="text-sm font-medium">{meal.fat}g</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4 border-white/20 hover:bg-white/10"
                        onClick={(e) => {
                          e.stopPropagation()
                          setFlippedCard(null)
                        }}
                      >
                        Back to Plan
                      </Button>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
