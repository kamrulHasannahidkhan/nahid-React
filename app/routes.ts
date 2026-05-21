import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    
    layout("layout/MainLayout.tsx",[
    index("routes/home.tsx"),
    route("about","layout/about.tsx"),
    route("team","layout/team.tsx"),
    route("Services","layout/Services.tsx"),
    route("NewsLetter","layout/Newsletter.tsx"),
    
    ])
    
] satisfies RouteConfig;
