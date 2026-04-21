import { useEffect, useState } from "react";
import { HistoryCard } from "../components/history/HistoryCard";
import { getHistory } from "../services/historyService";
import Section from "../components/ui/Section";
import { Clock } from "lucide-react";

export const ServiceHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <Section title="Service History">
        {history.length === 0 ? (
          <p className="text-muted text-center">No service history yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {history.map((item) => (
              <HistoryCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
};
