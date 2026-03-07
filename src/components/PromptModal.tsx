import { useState } from "react";
import { ExternalLink, Languages, Loader2 } from "lucide-react";
import type { AppData } from "@/data/sampleApps";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface PromptModalProps {
  app: AppData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PromptModal = ({ app, open, onOpenChange }: PromptModalProps) => {
  const [translated, setTranslated] = useState<string | null>(null);
  const [translating, setTranslating] = useState(false);
  const [showTranslated, setShowTranslated] = useState(false);

  const handleTranslate = async () => {
    if (translated) {
      setShowTranslated((v) => !v);
      return;
    }
    setTranslating(true);
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(app!.prompt)}&langpair=mr|en`
      );
      const data = await res.json();
      setTranslated(data.responseData.translatedText);
      setShowTranslated(true);
    } catch {
      setTranslated("Translation failed. Please try again.");
      setShowTranslated(true);
    } finally {
      setTranslating(false);
    }
  };

  if (!app) return null;

  const isMarathi = app.promptLang === "mr";
  const displayedPrompt = showTranslated && translated ? translated : app.prompt;

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) { setTranslated(null); setShowTranslated(false); } onOpenChange(o); }}>
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
        {isMarathi && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleTranslate}
              disabled={translating}
              className="flex items-center gap-1.5 text-xs"
            >
              {translating ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Languages className="h-3.5 w-3.5" />
              )}
              {showTranslated ? "Show Marathi" : "Translate to English"}
            </Button>
            {showTranslated && (
              <span className="text-xs text-muted-foreground">Translated via MyMemory</span>
            )}
          </div>
        )}
        <ScrollArea className="max-h-[60vh]">
          <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-md font-mono leading-relaxed text-foreground">
            {displayedPrompt}
          </pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PromptModal;
