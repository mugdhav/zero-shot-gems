import type { AppData } from "@/data/sampleApps";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AppCardProps {
  app: AppData;
  onClick: () => void;
}

const AppCard = ({ app, onClick }: AppCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
    >
      <AspectRatio ratio={16 / 9}>
        <div
          className={`w-full h-full bg-gradient-to-br ${app.gradient} flex items-center justify-center`}
        >
          <span className="text-4xl font-bold text-white/30 select-none">
            {app.title.charAt(0)}
          </span>
        </div>
      </AspectRatio>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-bold leading-tight text-foreground">{app.title}</h3>
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
