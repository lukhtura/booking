// Engine
import { paths } from "@/engine/config/paths";

//PAGES
import Main from "@/ui/pages/Main";
import Hotels from "@/ui/pages/Hotels";
import About from "@/ui/pages/About";

export const pages = [
    {
        path: paths.main,
        element: <Main />
    },
    {
        path: paths.hotels,
        element: <Hotels />
    },
    {
        path: paths.about,
        element: <About />
    }
];