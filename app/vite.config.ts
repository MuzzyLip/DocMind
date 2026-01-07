import { defineConfig } from "vite";
import path from "node:path";
import electron from "vite-plugin-electron/simple";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";

export default defineConfig({
    plugins: [
        react(),
        electron({
            main: {
                entry: "electron/main.ts",
                vite: {
                    build: {
                        minify: isProd,
                    },
                },
            },
            preload: {
                input: path.join(__dirname, "electron/preload.ts"),
            },
            renderer: isTest ? undefined : {},
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        port: 4000,
    },
});
