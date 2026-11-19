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

interface AccordionItemProps extends AccordionPrimitive.Item.Props {
  inverted?: boolean;
}

function AccordionItem({ className, inverted = false, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-inverted={inverted ? "true" : undefined}
      className={cn(
        "rounded-3xl transition-colors overflow-hidden border-none shadow-none",
        inverted
          ? "bg-white/10 data-open:bg-white/15"
          : "bg-[#f5f4fd] data-open:bg-[#eae9fb]",
        className
      )}
      {...props}
    />
  );
}

interface AccordionTriggerProps extends AccordionPrimitive.Trigger.Props {
  inverted?: boolean;
}

function AccordionTrigger({
  className,
  inverted = false,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between p-6 text-right text-base sm:text-lg font-bold transition-all outline-none cursor-pointer border-none shadow-none aria-disabled:pointer-events-none aria-disabled:opacity-50",
          inverted ? "text-white hover:text-white/90" : "text-black",
          className
        )}
        {...props}
      >
        <span className="flex-1 text-right">{children}</span>
        <div
          className={cn(
            "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mr-4 transition-transform duration-300",
            inverted
              ? "bg-white text-[#0d0751]"
              : "bg-[#3525cd] text-white"
          )}
        >
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

interface AccordionContentProps extends AccordionPrimitive.Panel.Props {
  innerClassName?: string;
  inverted?: boolean;
}

function AccordionContent({
  className,
  innerClassName,
  inverted = false,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm sm:text-base leading-relaxed font-normal transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] data-[open]:animate-accordion-open",
        inverted ? "text-white/90" : "text-black/80",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "px-6 pb-6 pt-0 transition-all duration-300",
          inverted ? "text-white/90" : "text-black/80"
        )}
      >
        <div
          className={cn(
            "p-4 rounded-2xl leading-relaxed transition-all",
            inverted
              ? "bg-white/10 text-white/95"
              : "bg-white/90 text-black/85",
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
