import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeIMG from "../../assets/coffeeimg.png";

export function Marketing() {
  return (
    <div className="w-full h-[34rem] bg-opacity-5 flex justify-center items-center gap-14 flex-wrap md:mb-4 mb-56 ">
      <div className="flex flex-col flex-wrap   ">
        <div className="flex flex-col md:gap-16 gap-8 justify-center items-center ">
          <div className="flex flex-col w-[36.75rem] gap-4 items-center ">
            <strong className="font-['Baloo_2'] text-5xl w-[24rem] md:w-full">
              
              Encontre o café perfeito para qualquer hora do dia
            </strong>
            <span className="md:text-xl w-[24rem] md:w-full">
              
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>

          <div className="flex flex-col items-start w-[20rem] p-0 md:flex-row md:items-center md:w-full  md:gap-10 gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-[#574F4D] text-base">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#C47F17]">
                  <ShoppingCart color="white" weight="fill" />
                </span>
                <span> Compra simples e segura</span>
              </div>
              <div className="flex items-center gap-3 text-[#574F4D] text-base">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#DBAC2C]">
                  <Timer color="white" weight="fill" />
                </span>
                <span> Entrega rápida e rastreável</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-[#574F4D] text-base">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#574F4D]">
                  <Package color="white" weight="fill" />
                </span>
                <span> Embalagem mantém o café intacto</span>
              </div>
              <div className="flex items-center gap-3 text-[#574F4D] text-base">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#8047F8]">
                  <Coffee color="white" weight="fill" />
                </span>
                <span> O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <img src={coffeIMG}/>
      </div>
    </div>
  );
}
