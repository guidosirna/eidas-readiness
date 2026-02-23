interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "past" | "current" | "future";
}

interface TimelineVisualProps {
  events: TimelineEvent[];
}

export default function TimelineVisual({ events }: TimelineVisualProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[5px] top-1 bottom-1 w-px sm:left-[5px]" style={{ background: "linear-gradient(to bottom, #0033ff 0%, #e8e8e8 100%)" }} />

      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className="relative pl-10">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 flex items-center justify-center">
              {event.status === "past" && (
                <span className="block h-2.5 w-2.5" style={{ backgroundColor: "#0033ff", borderRadius: "2px" }} />
              )}
              {event.status === "current" && (
                <span className="relative flex h-3 w-3">
                  <span className="absolute -inset-1.5" style={{ backgroundColor: "rgba(0,51,255,0.1)", borderRadius: "2px" }} />
                  <span className="relative inline-flex h-3 w-3" style={{ backgroundColor: "#0033ff", borderRadius: "2px" }} />
                </span>
              )}
              {event.status === "future" && (
                <span className="block h-2.5 w-2.5 border-2 bg-white" style={{ borderColor: "#e8e8e8", borderRadius: "2px" }} />
              )}
            </div>

            {/* Content */}
            <div>
              <span
                className="text-sm font-medium"
                style={{
                  color: event.status === "future" ? "#c8cdd5" : "#0033ff",
                }}
              >
                {event.date}
              </span>
              <h3
                className="mt-1 text-lg font-semibold"
                style={{
                  color: event.status === "future" ? "#c8cdd5" : "#010f62",
                }}
              >
                {event.title}
              </h3>
              <p
                className="mt-1.5 text-base leading-relaxed"
                style={{
                  color: event.status === "future" ? "#c8cdd5" : "#62718d",
                }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
