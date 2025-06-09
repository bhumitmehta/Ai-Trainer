"use client"

import { createContext, useContext } from "react"
import { cn } from "../../lib/utils"

const ChartContext = createContext({})

const ChartContainer = ({ children, config, className, ...props }) => {
  const colorVars = {}

  if (config) {
    Object.entries(config).forEach(([key, value]) => {
      if (value.color) {
        colorVars[`--color-${key}`] = value.color
      }
    })
  }

  return (
    <ChartContext.Provider value={{ config }}>
      <div className={cn("w-full", className)} style={colorVars} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  )
}

const ChartTooltip = ({ content, ...props }) => {
  return content
}

const ChartTooltipContent = ({ active, payload, label, ...props }) => {
  const { config } = useContext(ChartContext)

  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        {payload.map((entry) => {
          const configKey = Object.keys(config || {}).find((key) => key === entry.dataKey)
          const color = configKey ? config[configKey].color : entry.color
          const name = configKey ? config[configKey].label : entry.name

          return (
            <div key={entry.dataKey} className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs text-muted-foreground">{name}</span>
              <span className="text-xs font-medium">{entry.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }
