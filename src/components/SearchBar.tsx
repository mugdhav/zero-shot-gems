import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  resultCount: number;
  totalCount: number;
}

const SearchBar = ({ query, onQueryChange, resultCount, totalCount }: SearchBarProps) => {
  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search apps by name, creator, or tag…"
            className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Showing {resultCount} of {totalCount} apps
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
