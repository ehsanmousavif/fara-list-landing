import { IconStack } from "@/components/reui/icon-stack"
import { CheckIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <IconStack aria-hidden="true" className="text-primary h-24 w-22">
        <span className="bg-[#3525cd] text-white flex size-8 items-center justify-center rounded-full border-none shadow-none">
          <CheckIcon className="size-4" />
        </span>
      </IconStack>
    </div>
  )
}