import * as React from "react"

// Correct import statement for the cn function
import { cn } from "../lib/utils.js"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        // Base classes for the input
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        // Classes for file input
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        // Classes for placeholder
        "placeholder:text-muted-foreground",
        // Classes for focus state
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // Classes for disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Any additional classes passed as props
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

// Set a display name for the component (useful for debugging)
Input.displayName = "Input"

export { Input }