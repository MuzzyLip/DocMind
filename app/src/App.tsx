import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { eventBus, GlobalToastEvent } from "./utils/eventBus";
import { AppRoutes } from "./routes";

function App() {
    useEffect(() => {
        const handleGlobalToast = ({ message, options }: GlobalToastEvent) =>
            toast(message, options);
        eventBus.on("global-toast", handleGlobalToast);
        return () => {
            eventBus.off("global-toast", handleGlobalToast);
        };
    }, []);
    return <AppRoutes />;
}

export default App;
