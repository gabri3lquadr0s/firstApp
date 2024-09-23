import {createContext, useState} from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [foods, setFoods] = useState(
        [
            {
                "id": 1,
                "name": "Big Mac",
                "vendor": "Hamburguer massa",
                "price": 32.90,
                "img": ""
            },
            {
                "id": 2,
                "name": "HotDog",
                "vendor": "Auaua",
                "price": 12.90,
                "img": "",
            }
        ]
    );

    return <AppContext.Provider value={{cart, setCart, foods, setFoods}}>
        {children}
    </AppContext.Provider>;
}