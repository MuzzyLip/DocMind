import { ToastOptions } from "react-toastify";
import { Remitter, RemitterListener } from "remitter";

export interface GlobalToastEvent {
    message: string;
    options?: ToastOptions;
}

export interface EventTypes {
    "global-toast": GlobalToastEvent;
}

export class EventBus {
    private static instance: EventBus;
    private emitter: Remitter<EventTypes>;

    private constructor() {
        this.emitter = new Remitter<EventTypes>();
    }

    public static getInstance(): EventBus {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }

    public on<K extends keyof EventTypes>(
        event: K,
        callback: RemitterListener<EventTypes, K>,
    ): () => void {
        return this.emitter.on(event, callback);
    }

    public emit<K extends keyof EventTypes>(event: K, data: EventTypes[K]): void {
        this.emitter.emit(event, data);
    }

    public off<K extends keyof EventTypes>(
        event: K,
        callback: RemitterListener<EventTypes, K>,
    ): void {
        this.emitter.off(event, callback);
    }

    public once<K extends keyof EventTypes>(
        event: K,
        callback: RemitterListener<EventTypes, K>,
    ): () => void {
        return this.emitter.once(event, callback);
    }
}

export const eventBus = EventBus.getInstance();
