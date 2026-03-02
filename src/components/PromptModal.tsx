import type { AppData } from "@/data/sampleApps";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PromptModalProps {
  app: AppData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PromptModal = ({ app, open, onOpenChange }: PromptModalProps) => {
  if (!app) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{app.title}</DialogTitle>
          <DialogDescription>Zero-shot prompt used to build this app</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-md font-mono leading-relaxed text-foreground">
            {app.prompt}
          </pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PromptModal;
