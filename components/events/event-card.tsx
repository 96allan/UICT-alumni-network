import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import type { Event } from "@/lib/events-data"
import { useState } from "react"

interface EventCardProps {
  event: Event;
  isAdmin?: boolean; // New prop to check if user is an admin
}

export function EventCard({ event, isAdmin = false }: EventCardProps) {
  const [manualDate, setManualDate] = useState(event.date);
  const [manualTime, setManualTime] = useState(event.time);

  const typeColors = {
    virtual: "bg-blue-100 text-blue-800",
    "in-person": "bg-green-100 text-green-800",
    hybrid: "bg-purple-100 text-purple-800",
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualTime(e.target.value);
  };

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute top-3 left-3">
          <Badge className={typeColors[event.type]}>{event.type}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary">{event.category}</Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-foreground line-clamp-2">{event.title}</h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{event.description}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            {isAdmin ? (
              <input
                type="date"
                value={manualDate}
                onChange={handleDateChange}
                className="border rounded p-1 text-sm"
              />
            ) : (
              <span>{formatDate(manualDate)}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            {isAdmin ? (
              <input
                type="time"
                value={manualTime}
                onChange={handleTimeChange}
                className="border rounded p-1 text-sm"
              />
            ) : (
              <span>{manualTime}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border bg-secondary/20 px-5 py-4">
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  );
}