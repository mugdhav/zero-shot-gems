import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { AppData } from "@/data/sampleApps";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AppCardProps {
  app: AppData;
  onClick: () => void;
}

const gradients = [
  "from-[#5271FF] to-[#E07CFF]",
  "from-[#E07CFF] to-[#E83F9B]",
  "from-[#E83F9B] to-[#FF3366]",
  "from-[#FF3366] to-[#FF6B00]",
  "from-[#5271FF] to-[#E83F9B]",
  "from-[#E07CFF] to-[#FF6B00]",
  "from-[#5271FF] to-[#FF3366]",
  "from-[#E83F9B] to-[#FF6B00]",
  "from-[#5271FF] to-[#FF6B00]",
];

const AppCard = ({ app, onClick }: AppCardProps) => {
  const gradient = gradients[(app.id - 1) % gradients.length];
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = app.thumbnail && !imgFailed;

  return (
    <Card
      onClick={onClick}
      className="cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 group border-border bg-card"
    >
      <AspectRatio ratio={16 / 9}>
        <div className="w-full h-full relative">
          {showImage ? (
            <img
              src={app.thumbnail}
              alt={app.title}
              className="w-full h-full object-cover object-top"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
            >
              <span className="text-5xl font-black text-white/20 select-none">
                {app.title.charAt(0)}
              </span>
            </div>
          )}
          {app.publishedlink && (
            <a
              href={app.publishedlink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/30 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </AspectRatio>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-bold leading-tight text-foreground">{app.title}</h3>
        <p className="text-xs text-muted-foreground">
          by{" "}
          {app.creatorLink ? (
            <a
              href={app.creatorLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:underline text-primary"
            >
              {app.name}
            </a>
          ) : (
            app.name
          )}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">{app.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {app.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppCard;
