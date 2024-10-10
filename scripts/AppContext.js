import {createContext, useState} from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [foods, setFoods] = useState(
        [
            {
                "id": 1,
                "name": "Big Mac",
                "vendor": "Hamburguer Aririu",
                "price": 32.90,
                "img": "https://www.minhareceita.com.br/app/uploads/2021/05/shutterstock_1489640750-1.jpg"
            },
            {
                "id": 2,
                "name": "HotDog",
                "vendor": "HotDog do Carlos",
                "price": 12.90,
                "img": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/31/istock-143175178-1iuy9pef5iz3q.jpg",
            },
            {
                "id": 3,
                "name": "Sorvete",
                "vendor": "Skimo",
                "price": 9.90,
                "img": "https://alphagel.com.br/wp-content/uploads/2021/04/308761-o-que-e-sorvete-de-massa-e-quais-as-diferencas-para-os-outros-1.jpg"
            },
            {
                "id": 4,
                "name": "Sushi",
                "vendor": "Hammada",
                "price": 41.99,
                "img": "https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/combinado-sashimi-e-sushi-28-pecas6258899a2d422.png"
            },
            {
                "id": 5,
                "name": "Bolo de Chocolate",
                "vendor": "Doce confeitaria",
                "price": 15.60,
                "img": "https://s2-receitas.glbimg.com/PIkmvyeAsop4w3kf9909E9tGoxo=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/1/N/aQD0fhQs2qW7qlFw0bTA/bolo-de-chocolate-facil.jpg"
            }

        ]
    );

    return <AppContext.Provider value={{cart, setCart, foods, setFoods}}>
        {children}
    </AppContext.Provider>;
}