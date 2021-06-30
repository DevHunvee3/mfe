import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./apps/marketing-app";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

const generateClassName = createGenerateClassName({
    productionPrefix: "_co_",
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};
export default App;
