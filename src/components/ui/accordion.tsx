import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-3.5", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-2xl bg-[#f5f4fd] transition-colors overflow-hidden border-none shadow-none data-open:bg-[#eae9fb]",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between p-6 text-right text-base sm:text-lg font-bold text-black transition-all outline-none cursor-pointer border-none shadow-none aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span className="flex-1 text-right">{children}</span>
        <div className="w-8 h-8 rounded-xl bg-[#3525cd] text-white flex items-center justify-center shrink-0 mr-4 transition-transform duration-300 group-aria-expanded/accordion-trigger:bg-[#3525cd] group-aria-expanded/accordion-trigger:text-white">
          <ChevronDownIcon
            data-slot="accordion-trigger-icon"
            className="w-4 h-4 pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
          />
          <ChevronUpIcon
            data-slot="accordion-trigger-icon"
            className="w-4 h-4 pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm sm:text-base text-black/80 leading-relaxed font-normal transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] data-[open]:animate-accordion-open",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "px-6 pb-6 pt-0 text-black/80 transition-all duration-300",
          className
        )}
      >
        <div className="p-4 rounded-xl bg-white/90 text-black/85 leading-relaxed transition-all">
          {children}
        </div>
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
