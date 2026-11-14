import { IconStack } from "../reui/icon-stack";

export function HeaderSections({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <IconStack aria-hidden="true" className="w-full  text-violet-300">
        <div>{icon}</div>
      </IconStack>
    </div>
  );
}
