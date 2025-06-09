"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Plus, Trash2, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { GlassCard } from "../../components/ui/glass-card"
import { GradientText } from "../../components/gradient-text"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../components/ui/chart"

export default function CaloriesPage() {
  const [foodItems, setFoodItems] = useState([])
  const [newItem, setNewItem] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  })
  const [showForm, setShowForm] = useState(false)

  const addFoodItem = () => {
    if (newItem.name.trim() === "" || newItem.calories.trim() === "") {
      return
    }

    const item = {
      id: Date.now().toString(),
      name: newItem.name,
      calories: Number.parseInt(newItem.calories),
      protein: Number.parseInt(newItem.protein) || 0,
      carbs: Number.parseInt(newItem.carbs) || 0,
      fat: Number.parseInt(newItem.fat) || 0,
    }

    setFoodItems([...foodItems, item])
    setNewItem({
      name: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    })
    setShowForm(false)
  }

  const removeFoodItem = (id) => {
    setFoodItems(foodItems.filter((item) => item.id !== id))
  }

  const totalCalories = foodItems.reduce((sum, item) => sum + item.calories, 0)
  const totalProtein = foodItems.reduce((sum, item) => sum + item.protein, 0)
  const totalCarbs = foodItems.reduce((sum, item) => sum + item.carbs, 0)
  const totalFat = foodItems.reduce((sum, item) => sum + item.fat, 0)

  const macroData = [
    { name: "Protein", value: totalProtein * 4 }, // 4 calories per gram
    { name: "Carbs", value: totalCarbs * 4 }, // 4 calories per gram
    { name: "Fat", value: totalFat * 9 }, // 9 calories per gram
  ]

  const COLORS = ["#10b981", "#3b82f6", "#f59e0b"]

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
            <GradientText from="from-orange-400" via="via-amber-500" to="to-yellow-600">
              Calorie Counter
            </GradientText>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GlassCard className="p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Food Log</h2>
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                >
                  Add Food <Plus className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {foodItems.length === 0 ? (
                <div className="text-center py-8 text-white/50">
                  <p>No food items added yet. Click "Add Food" to get started.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {foodItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="text-sm text-white/70">
                          P: {item.protein}g | C: {item.carbs}g | F: {item.fat}g
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-bold">{item.calories}</div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFoodItem(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </GlassCard>

            <AnimatePresence>
              {showForm && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                  <GlassCard className="p-6 relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowForm(false)}
                      className="absolute top-4 right-4"
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <h2 className="text-xl font-bold mb-6">Add Food Item</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Food Name</label>
                        <Input
                          value={newItem.name}
                          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                          placeholder="e.g., Chicken Breast"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Calories</label>
                        <Input
                          type="number"
                          value={newItem.calories}
                          onChange={(e) => setNewItem({ ...newItem, calories: e.target.value })}
                          placeholder="e.g., 165"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Protein (g)</label>
                        <Input
                          type="number"
                          value={newItem.protein}
                          onChange={(e) => setNewItem({ ...newItem, protein: e.target.value })}
                          placeholder="e.g., 31"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Carbs (g)</label>
                        <Input
                          type="number"
                          value={newItem.carbs}
                          onChange={(e) => setNewItem({ ...newItem, carbs: e.target.value })}
                          placeholder="e.g., 0"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Fat (g)</label>
                        <Input
                          type="number"
                          value={newItem.fat}
                          onChange={(e) => setNewItem({ ...newItem, fat: e.target.value })}
                          placeholder="e.g., 3.6"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={addFoodItem}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                    >
                      Add Food Item
                    </Button>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <GlassCard className="p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Daily Summary</h2>

              <div className="text-center mb-4">
                <div className="text-5xl font-bold mb-1">{totalCalories}</div>
                <div className="text-white/70">Total Calories</div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <div className="text-lg font-bold text-emerald-400">{totalProtein}g</div>
                  <div className="text-xs text-white/70">Protein</div>
                </div>
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">{totalCarbs}g</div>
                  <div className="text-xs text-white/70">Carbs</div>
                </div>
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <div className="text-lg font-bold text-amber-400">{totalFat}g</div>
                  <div className="text-xs text-white/70">Fat</div>
                </div>
              </div>

              {totalCalories > 0 && (
                <div className="h-64">
                  <ChartContainer
                    config={{
                      Protein: {
                        label: "Protein",
                        color: "#10b981",
                      },
                      Carbs: {
                        label: "Carbs",
                        color: "#3b82f6",
                      },
                      Fat: {
                        label: "Fat",
                        color: "#f59e0b",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={macroData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          animationDuration={1000}
                          animationBegin={200}
                        >
                          {macroData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              )}
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Daily Goal</h2>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-white/70">Daily Target</span>
                  <span className="text-sm font-medium">2000 cal</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                    style={{ width: `${Math.min((totalCalories / 2000) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-white/70">
                <p className="mb-2">Recommended Macros:</p>
                <ul className="space-y-1">
                  <li>Protein: 150g (30%)</li>
                  <li>Carbs: 200g (40%)</li>
                  <li>Fat: 67g (30%)</li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
