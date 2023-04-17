//CORE
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Engine
import { pages } from "@/engine/config/routes";

//PARTS
import Layout from "@/ui/containers/Layout";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {pages.map(page =>
                        <Route
                            path={page.path}
                            element={page.element}
                            key={page.element}
                        />)}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
