import LoginSignProvider from "./Login&SignUp";
import HomeProvider from "./Home";
import CartProvider from "./Cart";
import {ReactNode} from "react";

interface ProviderData {
    children: ReactNode;
}

const Providers = ({children}:ProviderData) => {
    return (
        <LoginSignProvider>
            <CartProvider>
                <HomeProvider>                
                    {children}
                </HomeProvider>
            </CartProvider>
        </LoginSignProvider>
    )
}

export default Providers