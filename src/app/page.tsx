"use client";
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { KanbanBoard, KanbanCard, KanbanCards, KanbanHeader, KanbanProvider } from '@/components/management/Kanban';

const columns = [
  { id: "planned-col", name: "Planned", color: "#6B7280" },
  { id: "in-progress-col", name: "In Progress", color: "#F59E0B" },
  { id: "done-col", name: "Done", color: "#10B981" },
];

const users = [
  {
    id: "user-1",
    name: "Alice Johnson",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: "user-2",
    name: "Bob Smith",
    image: "https://i.pravatar.cc/100?img=2",
  },
];

const exampleFeatures = [
  {
    id: "task-1",
    name: "Reinvent revolutionary platforms",
    column: "planned-col",
    startAt: new Date("2024-03-01"),
    endAt: new Date("2024-03-15"),
    owner: users[0],
  },
  {
    id: "task-2",
    name: "Streamline end-to-end solutions",
    column: "planned-col",
    startAt: new Date("2024-03-16"),
    endAt: new Date("2024-04-01"),
    owner: users[1],
  },
  {
    id: "task-3",
    name: "Optimize mission-critical deliverables",
    column: "planned-col",
    startAt: new Date("2024-04-02"),
    endAt: new Date("2024-04-20"),
    owner: users[0],
  },
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export default function Home() {
  const [features, setFeatures] = useState(exampleFeatures);

  return (
    <KanbanProvider
      columns={columns}
      data={features}
      onDataChange={setFeatures}
    >
      {(column) => (
        <KanbanBoard id={column.id} key={column.id}>
          <KanbanHeader>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: column.color }}
              />
              <span>{column.name}</span>
            </div>
          </KanbanHeader>
          <KanbanCards id={column.id}>
            {(feature: (typeof features)[number]) => (
              <KanbanCard
                column={column.id}
                id={feature.id}
                key={feature.id}
                name={feature.name}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="m-0 flex-1 font-medium text-sm">
                      {feature.name}
                    </p>
                  </div>
                  {feature.owner && (
                    <Avatar className="h-4 w-4 shrink-0">
                      <AvatarImage src={feature.owner.image} />
                      <AvatarFallback>
                        {feature.owner.name?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <p className="m-0 text-muted-foreground text-xs">
                  {shortDateFormatter.format(feature.startAt)} -{' '}
                  {dateFormatter.format(feature.endAt)}
                </p>
              </KanbanCard>
            )}
          </KanbanCards>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
}
