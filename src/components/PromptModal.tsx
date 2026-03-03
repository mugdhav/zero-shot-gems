import { ExternalLink } from "lucide-react";
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
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center gap-2">
            {app.title}
            {app.publishedlink && (
              <a
                href={app.publishedlink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </DialogTitle>
          <DialogDescription>
            Built by {app.name} — zero-shot prompt
          </DialogDescription>
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
