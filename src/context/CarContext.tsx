import { createContext, ReactNode, useEffect, useState } from "react";
import Americano from "../assets/Type=Americano.png";
import Árabe from "../assets/Type=Árabe.png";
import CafécomLeite from "../assets/Type=Café com Leite.png";
import CaféGelado from "../assets/Type=Café Gelado.png";
import Capuccino from "../assets/Type=Capuccino.png";
import ChocolateQuente from "../assets/Type=Chocolate Quente.png";
import Cubano from "../assets/Type=Cubano.png";
import ExpressoCremoso from "../assets/Type=Expresso Cremoso.png";
import Expresso from "../assets/Type=Expresso.png";
import Havaiano from "../assets/Type=Havaiano.png";
import Irlandês from "../assets/Type=Irlandês.png";
import Latte from "../assets/Type=Latte.png";
import Macchiato from "../assets/Type=Macchiato.png";
import Mochaccino from "../assets/Type=Mochaccino.png";
import { useNavigate } from "react-router-dom";

interface CoffeesTypeProps {
  id: number;
  img: string;
  type: string[];
  name: string;
  description: string;
  price: string;
}

interface CartShoppingProps {
  id: number;
  quantity: number;
}

interface SuccesProps {
  city: string;
  street: string;
  numberHouse: string;
}

interface CarContextTypes {
  CoffeesType: CoffeesTypeProps[];
  cartShopping: CartShoppingProps[];
  addToCartShopping: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  controlledIncrementQuantity: (id: number) => void;
  controlledDecrementQuantity: (id: number) => void;
  onSubmitform: (e: React.FormEvent<HTMLFormElement>) => void;
  itemsForm: SuccesProps;
  radioHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  payment: String;
}

export const CarContext = createContext({} as CarContextTypes);

interface ChildrenProps {
  children: ReactNode;
}

export function CarContextProvider({ children }: ChildrenProps) {
  const CoffeesType = [
    {
      id: 1,
      img: Expresso,
      type: ["TRADICIONAL"],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "9,90",
    },
    {
      id: 2,
      img: Americano,
      type: ["TRADICIONAL"],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "9,90",
    },
    {
      id: 3,
      img: ExpressoCremoso,
      type: ["TRADICIONAL"],
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "9,90",
    },
    {
      id: 4,
      img: CaféGelado,
      type: ["TRADICIONAL", "GELADO"],
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: "9,90",
    },
    {
      id: 5,
      img: CafécomLeite,
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: "9,90",
    },
    {
      id: 6,
      img: Latte,
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: "9,90",
    },
    {
      id: 7,
      img: Capuccino,
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: "9,90",
    },
    {
      id: 8,
      img: Macchiato,
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: "9,90",
    },
    {
      id: 9,
      img: Mochaccino,
      type: ["TRADICIONAL", "COM LEITE"],
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: "9,90",
    },
    {
      id: 10,
      img: ChocolateQuente,
      type: ["ESPECIAL", "COM LEITE"],
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "9,90",
    },
    {
      id: 11,
      img: Cubano,
      type: ["ESPECIAL", "ALCÓOLICO", "GELADO"],
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "9,90",
    },
    {
      id: 12,
      img: Havaiano,
      type: ["ESPECIAL"],
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "9,90",
    },
    {
      id: 13,
      img: Árabe,
      type: ["ESPECIAL"],
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: "9,90",
    },
    {
      id: 14,
      img: Irlandês,
      type: ["ESPECIAL", "ALCOÓLICO"],
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "9,90",
    },
  ];

  const [itemsForm, setItemsForm] = useState<SuccesProps>({
    city: "",
    numberHouse: "",
    street: "",
  });

  const [payment, setPayment] = useState<String>("");

  const [cartShopping, setCartShopping] = useState<CartShoppingProps[]>(() => {
  const data = window.localStorage.getItem('@desafio-ignite02-1.0.0')
  if (data !== null) { 
    return JSON.parse(data)
  } else { 
    []
  }
}

  );

  function incrementQuantity(id: number) {
    let number = document.getElementById(`Product_${id}`) as HTMLInputElement;
    number.stepUp();
  }

  function decrementQuantity(id: number) {
    let number = document.getElementById(`Product_${id}`) as HTMLInputElement;
    number.stepDown();
  }

  function removeItemFromCart(id: number) {
    const withoutSelectedOne = cartShopping.filter(
      (element) => element.id !== id
    );
    setCartShopping(withoutSelectedOne);
  }

  function addToCartShopping(id: number) {
    const number = document.getElementById(`Product_${id}`) as HTMLInputElement;
    const numberVal = number.value;
    const sameId = CoffeesType.find((element) => element.id === id);

    
    if (cartShopping !== undefined) { 
    if (cartShopping.filter((item) => item.id === sameId?.id).length > 0) {
      setCartShopping((state) =>
        state!.map((element) => {
          if (element.id === id) {
            return {
              ...element,
              quantity: element.quantity + Number(numberVal),
            };
          }
          return element;
        })
      );
    } else {
      setCartShopping((state) => [
        ...state!,
        { id: sameId!.id, quantity: Number(numberVal) },
      ]);
    }
  }

    number.value = "1";
  }

  function controlledIncrementQuantity(id: number) {
    setCartShopping((state) =>
      state!.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 };
        }
        return element;
      })
    );
  }

  function controlledDecrementQuantity(id: number) {
    setCartShopping((state) =>
      state!.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            quantity: element.quantity > 1 ? element.quantity - 1 : 1,
          };
        }
        return element;
      })
    );
  }
  let navigate = useNavigate();
  function onSubmitform(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let cityL = document.getElementById("cidade") as HTMLInputElement;
    let numberHouseL = document.getElementById(
      "numberHouse"
    ) as HTMLInputElement;
    let streetL = document.getElementById("street") as HTMLInputElement;

    setItemsForm({
      city: cityL.value,
      numberHouse: numberHouseL.value,
      street: streetL.value,
    });

    navigate("/success");
    setCartShopping([]);
  }

  function radioHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPayment(event.target.value);
  }

  useEffect(() => {
    window.localStorage.setItem('@desafio-ignite02-1.0.0', JSON.stringify(cartShopping) )
  }, [cartShopping])

  useEffect(() => {
    if (!cartShopping) { 
      localStorage.clear()
    }
  }, [])


  return (
    <CarContext.Provider
      value={{
        CoffeesType,
        cartShopping,
        addToCartShopping,
        incrementQuantity,
        decrementQuantity,
        removeItemFromCart,
        controlledIncrementQuantity,
        controlledDecrementQuantity,
        onSubmitform,
        itemsForm,
        radioHandler,
        payment,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}
