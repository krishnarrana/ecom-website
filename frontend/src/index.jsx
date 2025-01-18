import { createRoot } from "react-dom/client";
import React from "react";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./app";
import HomeScreen from "./screens/HomeScreen";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} path='/' element={<HomeScreen />} />
        </Route>

    )
);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
