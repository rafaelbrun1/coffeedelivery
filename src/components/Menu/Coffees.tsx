import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CarContext } from "../../context/CarContext";

export function Coffees() {
  const { CoffeesType, incrementQuantity, decrementQuantity, addToCartShopping } = useContext(CarContext);

  return (
    <div className="flex flex-col max-w-[70rem] mt-24 items-center md:items-start md:mt-8 ">
      <strong className="font-['Baloo_2'] font-extrabold text-3xl text-[#403937]">
        {" "}
        Nossos cafés
      </strong>

      <div className="mt-14 flex md:justify-start justify-center gap-8 flex-wrap ">
        {CoffeesType.map((coffee) => {
          return (
            <div
              key={coffee.id}
              className="flex flex-col items-center w-64 h-[19.375rem] bg-[#F3F2F2] rounded-tr-3xl rounded-bl-3xl p-5 text-center gap-4"
            >
              <div className="mt-[-2.5rem]">
                <img src={coffee.img} alt="" />
              </div>

                <div className="flex gap-1"> 
                {coffee.type.map(element => <span key={element} className="rounded py-1 px-2 bg-[#F1E9C9] text-[#C47F17] font-bold text-xs mt-3">
                {element}
                </span>
  )}
                </div>
              
              <strong className="font-['Baloo_2'] font-bold text-xl">
                {coffee.name}
              </strong>
              <span className="text-sm font-normal text-[#8D8686]">
                {" "}
                {coffee.description}
              </span>

              <div className="flex items-center gap-6">
                <div className="font-['Baloo_2] text-[#574F4D]">
                  <span className="text-sm">R$</span>
                  <span className=" font-bold text-2xl">{coffee.price}</span>
                </div>

                <span className="flex items-center justfiy-center p-2 gap-2 w-[5.5rem] bg-[#E6E5E5] rounded-md">
                  <button onClick={() => decrementQuantity(coffee.id)}>
                    <Minus color="#8047F8" />
                  </button>
                  <input
                    type="number"
                    id={`Product_${coffee.id}`}
                    readOnly
                    defaultValue={1}
                    min={1}
                    className="w-7 outline-none text-center  bg-[#E6E5E5] "
                  />
                  <button onClick={() => incrementQuantity(coffee.id)}>
                    <Plus color="#8047F8" weight="bold" />
                  </button>
                </span>
                <button 
                onClick={() => addToCartShopping(coffee.id)}
                className="w-9 h-9 rounded bg-[#4B2995] p-2 flex items-center justify-center">
                  <ShoppingCart color="white" weight="fill" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
