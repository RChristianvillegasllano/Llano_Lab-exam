import { createContext, useState, useContext, ReactNode } from 'react';

export interface EventItem {
  id: string;
  title: string;
  location: string;
  date: string;
  isOffline: boolean;
  organizer: string;
  eventImage: string;
}

interface EventContextType {
  registeredEvents: EventItem[];
  joinEvent: (event: EventItem) => void;
  leaveEvent: (eventId: string) => void;
  isJoined: (eventId: string) => boolean;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [registeredEvents, setRegisteredEvents] = useState<EventItem[]>([]);

  const joinEvent = (event: EventItem) => {
    if (!registeredEvents.find(e => e.id === event.id)) {
      setRegisteredEvents([...registeredEvents, event]);
    }
  };

  const leaveEvent = (eventId: string) => {
    setRegisteredEvents(registeredEvents.filter(e => e.id !== eventId));
  };

  const isJoined = (eventId: string) => {
    return registeredEvents.some(e => e.id === eventId);
  };

  return (
    <EventContext.Provider value={{ registeredEvents, joinEvent, leaveEvent, isJoined }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
}
