import * as React from "react"

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border bg-white p-4 shadow-sm ${className}`}
      {...props}
    />
  )
}
Card.displayName = "Card"

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mb-2 flex flex-col space-y-1 ${className}`}
      {...props}
    />
  )
}
CardHeader.displayName = "CardHeader"

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-lg font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  )
}
CardTitle.displayName = "CardTitle"

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    />
  )
}
CardDescription.displayName = "CardDescription"

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`pt-2 ${className}`}
      {...props}
    />
  )
}
CardContent.displayName = "CardContent"

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-4 flex items-center justify-end ${className}`}
      {...props}
    />
  )
}
CardFooter.displayName = "CardFooter"
