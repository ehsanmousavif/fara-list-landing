import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center select-none", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" className="list-none" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
  size?: "sm" | "md" | "lg" | "icon" | "icon-sm" | "icon-lg"
} & React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon-sm",
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-xl transition-all cursor-pointer select-none active:scale-[0.96] border-none outline-none no-underline",
        size === "icon" && "h-10 w-10 p-0 text-sm",
        size === "icon-sm" && "h-8.5 w-8.5 p-0 text-xs",
        size === "sm" && "text-xs h-8.5 px-3 gap-1.5",
        size === "md" && "text-sm h-10 px-4 gap-2",
        isActive
          ? "bg-[#3525cd] text-white font-bold shadow-sm shadow-[#3525cd]/25"
          : "bg-white/80 hover:bg-[#eae9fb] text-black/70 hover:text-[#3525cd]",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

function PaginationPrevious({
  className,
  text = "قبلی",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="رفتن به صفحه قبلی"
      size="sm"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <ChevronRightIcon className="w-4 h-4" />
      <span className="hidden sm:inline">{text}</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  text = "بعدی",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="رفتن به صفحه بعدی"
      size="sm"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:inline">{text}</span>
      <ChevronLeftIcon className="w-4 h-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex h-8.5 w-8.5 items-center justify-center text-black/40",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="w-4 h-4" />
      <span className="sr-only">صفحات بیشتر</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
