import { Header } from "../Header";
import motoboySVG from "../../assets/Illustration.svg";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { CarContext } from "../../context/CarContext";
import { useContext } from "react";

export function Success() {

  const {itemsForm, payment} = useContext(CarContext)
  
  return (
    <>
      <Header />
      <div className="flex gap-12  mt-20 flex-wrap">
        <div className="flex-1  flex flex-col items-center justify-center">
          <div className="flex md:w-[32rem] w-[20rem] flex-col">
            <strong className="font-['Baloo_2'] text-[#C47F17] text-3xl">
              Uhu! Pedido confirmado
            </strong>
            <span className="font-normal text-xl">
              {" "}
              Agora é só aguardar que logo o café chegará até você
            </span>
          </div>

          <div className="border p-10 gap-8 flex md:w-[32rem] w-[20rem] h-[17rem] flex-col mt-10 rounded-bl-[36px] rounded-tr-[36px] border-[#8047F8] ">
            <div className="flex items-center gap-3 ">
              <div>
                <span className="w-8 h-8 bg-[#8047F8] rounded-full flex items-center justify-center">
                  <MapPin color="white" weight="fill" />
                </span>
              </div>
              <div className="flex flex-col">
                <span>
                  Entrega em{" "}
                  <b className="font-bold text-[#574F4D]">
                    {" "}
                    Rua {itemsForm.street}, {itemsForm.numberHouse}{" "}
                  </b>{" "}
                </span>
                  <span> {itemsForm.city} - Porto Alegre</span>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <div>
                <span className="w-8 h-8 bg-[#DBAC2C] rounded-full flex items-center justify-center">
                  <Clock color="white" weight="fill" />
                </span>
              </div>
              <div className="flex flex-col">
                <span>Previsão de entrega </span>
                <span className="font-bold text-[#574F4D]">
                  20 min - 30 min
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <div>
                <span className="w-8 h-8 bg-[#C47F17] rounded-full flex items-center justify-center">
                  <CurrencyDollar color="white" weight="fill" />
                </span>
              </div>
              <div className="flex flex-col">
                <span>Pagamento na entrega </span>
                <span className="font-bold text-[#574F4D]">
                  {payment}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:flex items-center justify-center hidden lg:visible">
          <img src={motoboySVG} alt="" />
        </div>
      </div>
    </>
  );
}
