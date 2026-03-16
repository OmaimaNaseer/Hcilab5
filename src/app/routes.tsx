import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { MoodBoard } from "./components/MoodBoard";
import { HomeScreen } from "./components/HomeScreen";
import { CourseRegistration } from "./components/CourseRegistration";
import { CoursePerformance } from "./components/CoursePerformance";
import { Attendance } from "./components/Attendance";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: MoodBoard },
      { path: "home", Component: HomeScreen },
      { path: "registration", Component: CourseRegistration },
      { path: "performance", Component: CoursePerformance },
      { path: "attendance", Component: Attendance },
    ],
  },
]);
