import React from "react"
import PathConstants from "./pathContants"

const Overview = React.lazy(() => import("../pages/Overview"))
const Analytics = React.lazy(() => import("../pages/Analytics"))

const routes = [
    { path: PathConstants.OVERVIEW, element: <Overview /> },
    { path: PathConstants.ANALYTICS, element: <Analytics /> },
]
export default routes
