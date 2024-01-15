import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

type EventHandler = (args: any) => void;
type EventHandlers = Record<string, EventHandler>;

const useSocket = (serverUrl: string, eventHandlers: EventHandlers): Socket | undefined => {
  const socketRef = useRef<Socket>();

  useEffect(() => {
    socketRef.current = io(serverUrl);

    Object.entries(eventHandlers).forEach(([event, handler]) => {
      socketRef.current?.on(event, handler);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [serverUrl, eventHandlers]);

  return socketRef.current;
};

export default useSocket;
