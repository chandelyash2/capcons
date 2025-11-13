import { ChevronDown, ChevronUp } from "lucide-react";

export const DesktopResources = ({ open }: { open: boolean }) => {
  return (
    <button className="flex items-center gap-1 font-medium hover:text-black">
      Resources
      {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </button>
  );
};
