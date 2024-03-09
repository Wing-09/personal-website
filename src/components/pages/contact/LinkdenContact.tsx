import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function LinkdenContact() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://www.linkedin.com/in/wgayongan/"
            target="_blank"
            className="flex  items-center group hover:bg-secondary rounded-lg md:p-2"
          >
            <LinkedInLogoIcon className="h-auto w-5 md:w-10" />
            <p className="mx-5 text-sm md:text-xl group-hover:underline">
              Wilfreno Gayongan
            </p>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>https://www.linkedin.com/in/wgayongan/</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
