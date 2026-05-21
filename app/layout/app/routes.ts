import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    
    layout("layouts/MainLayout.tsx",[
    index("routes/home.tsx"),
    route("about","layouts/about.tsx"),
    route("team","layouts/team.tsx"),
    route("Services","layouts/Services.tsx"),
    route("NewsLetter","layouts/Newsletter.tsx"),
    
    ])
    
] satisfies RouteConfig;
