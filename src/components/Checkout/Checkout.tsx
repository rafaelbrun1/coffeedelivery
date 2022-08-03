import { Header } from "../Header";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { CarContext } from "../../context/CarContext";
import { FormEvent, useContext } from "react";
import { Link , useLinkClickHandler} from "react-router-dom";

interface EqualItemsProps {
  id: number;
  img: string;
  type: string[];
  name: string;
  description: string;
  price: string;
  quantity: number;
}
export function Checkout() {
  const {
    CoffeesType,
    cartShopping,
    removeItemFromCart,
    controlledIncrementQuantity,
    controlledDecrementQuantity,
    onSubmitform,
    radioHandler,
    
  } = useContext(CarContext);

  const equalItems: EqualItemsProps[] = [];

  cartShopping!.map((element) => {
    CoffeesType.map((item) => {
      if (element.id === item.id) {
        equalItems.push({ ...item, quantity: element.quantity });
      }
    });
  });

  const formattedPrice = equalItems.map(
    (item) => Number(item.price.replace(",", ".")) * item.quantity
  );
  const totalPrice = formattedPrice.reduce((acc, cur) => acc + cur, 0);
  const delivery = equalItems.length === 0 ? 0 : 3.5;
  const totalwithDelivery = totalPrice + delivery;

  

  return (
    <>
      <Header />

      <div className="flex w-full items-start justify-center   gap-8">
        <form onSubmit={onSubmitform} className="flex md:items-start items-center justify-center flex-wrap gap-8 ">
          <div className="flex flex-col w-[24rem] md:w-[40rem] gap-3">
            <strong className="font-['Baloo_2'] text-[#403937]">
              {" "}
              Complete seu pedido
            </strong>

            <div className="flex flex-col  gap-8 p-10 bg-[#F3F2F2]  rounded-md">
              <div className="flex gap-2 items-start">
                <div className=" mt-[0.15rem]">
                  {" "}
                  <MapPin color="#C47F17" />{" "}
                </div>
                <div className="flex flex-col">
                  <span className="text-base text-[#403937]">
                    Endereço de entrega
                  </span>
                  <span className="text-sm text-[#574F4D]">
                    {" "}
                    Informe o endereço onde deseja receber seu pedido
                  </span>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-4">
                  <input
                    type="number"
                    minLength={8}
                    
                    required
                    placeholder="CEP"
                    className="p-3 w-52 rounded bg-[#E6E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-[#8D8686] outline-none border border-transparent focus:border-[#C47F17]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Rua"
                    id="street"
                    className="p-3 rounded bg-[#E6E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-[#8D8686] outline-none border border-transparent focus:border-[#C47F17]"
                  />
                  <div className="flex flex-wrap gap-3">
                    <input
                      type="number"
                      required
                      id="numberHouse"
                      placeholder="Número"
                      className="p-3 rounded bg-[#E6E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-[#8D8686] outline-none border border-transparent focus:border-[#C47F17]"
                    />
                    <input
                      type="text"
                      placeholder="Complemento"
                      className="p-3 flex-1 rounded bg-[#E6E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-[#8D8686] outline-none border border-transparent focus:border-[#C47F17]"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Bairro"
                      className="p-3 rounded bg-[#E6E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-[#8D8686] outline-none border border-transparent focus:border-[#C47F17]"
                    />
                    <input
                      type="text"
                      required
                      id="cidade"
                      placeholder="Cidade"
                      className="p-3 flex-1 rounded bg-[#E6E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-[#8D8686] outline-none border border-transparent focus:border-[#C47F17]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="UF"
                      maxLength={2}
                      className="p-3 w-14 rounded bg-[#E6E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-[#8D8686] outline-none border border-transparent focus:border-[#C47F17]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F2F2] flex  flex-col gap-8 p-10 rounded-md">
              <div className="flex gap-2 items-start">
                <div className=" mt-[0.15rem]">
                  {" "}
                  <CurrencyDollar color="#8047F8" />{" "}
                </div>
                <div className="flex flex-col">
                  <span className="text-base text-[#403937]">Pagamento</span>
                  <span className="text-sm text-[#574F4D]">
                    {" "}
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </div>

              <div className="flex gap-3 flex-col md:flex-row items-center">
                <div>
                  <input
                    type="radio"
                    required
                    name="payment"
                    id="creditcard"
                    className="hidden peer"
                    onChange={radioHandler}
                    value="Cartão de Crédito"
                  />
                  <label
                    htmlFor="creditcard"
                    className="flex gap-3 cursor-pointer transition-colors border border-transparent bg-[#E6E5E5] p-4 rounded-md peer-checked:bg-[#EBE5F9] peer-checked:border peer-checked:border-[#8047F8]"
                  >
                    <CreditCard color="#8047F8" />
                    <span className="font-normal text-xs text-[#574F4D]">
                      {" "}
                      CARTÃO DE CRÉDITO
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="payment"
                    id="debitcard"
                    className="hidden peer"
                    onChange={radioHandler}
                    value="Cartão de Débito"
                    required
                  />
                  <label
                    htmlFor="debitcard"
                    className="flex gap-3 cursor-pointer transition-colors border border-transparent bg-[#E6E5E5] p-4 rounded-md peer-checked:bg-[#EBE5F9] peer-checked:border peer-checked:border-[#8047F8]"
                  >
                    <Bank color="#8047F8" />
                    <span className="font-normal text-xs text-[#574F4D]">
                      {" "}
                      CARTÃO DE DÉBITO
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="payment"
                    id="money"
                    className="hidden peer"
                    onChange={radioHandler}
                    value="Dinheiro"
                    required
                  />
                  <label
                    htmlFor="money"
                    className="flex gap-3 cursor-pointer transition-colors border border-transparent bg-[#E6E5E5] p-4 rounded-md peer-checked:bg-[#EBE5F9] peer-checked:border peer-checked:border-[#8047F8]"
                  >
                    <Money color="#8047F8" />
                    <span className="font-normal text-xs text-[#574F4D] flex-1">
                      {" "}
                      DINHEIRO
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="flex flex-col md:items-start items-center gap-3 ">
              <strong className="font-['Baloo_2'] text-[#403937]">
                {" "}
                Cafés selecionados
              </strong>
              <div className="flex flex-col gap-8 p-10 bg-[#F3F2F2] rounded-md md:w-[28rem] w-[24rem] ">
                {cartShopping!.map((item) => {
                  const findEqualId = CoffeesType.find(
                    (coffee) => coffee.id === item.id
                  );
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between p-4 border-b-2 border-[#E6E5E5]"
                    >
                      <div className="flex gap-5">
                        <div>
                          <img src={findEqualId?.img} />
                        </div>

                        <div className="flex flex-col gap-2">
                          <span className="text-base font-normal">
                            {findEqualId?.name}
                          </span>
                          <div className="flex gap-2 items-center">
                            <span className="flex items-center justfiy-center p-2 gap-2 w-[5.5rem] h-8 bg-[#E6E5E5] rounded-md">
                              <button
                                onClick={() =>
                                  controlledDecrementQuantity(findEqualId!.id)
                                }
                                type="button"
                              >
                                <Minus color="#8047F8" />
                              </button>
                              <input
                                type="number"
                                readOnly
                                value={item.quantity}
                                min={1}
                                className="w-7 outline-none text-center  bg-[#E6E5E5] "
                              />
                              <button
                                onClick={() =>
                                  controlledIncrementQuantity(findEqualId!.id)
                                }
                                type="button"
                              >
                                <Plus color="#8047F8" weight="bold" />
                              </button>
                            </span>

                            <span className="flex items-center justfiy-center p-2 gap-2 h-8 w-[5.5rem] bg-[#E6E5E5] rounded-md">
                              <button
                                type="button"
                                onClick={() =>
                                  removeItemFromCart(findEqualId!.id)
                                }
                                className="flex justify-center items-center gap-1"
                              >
                                <Trash color="#8047F8" />
                                <span className="font-normal text-xs text-[#574F4D]">
                                  REMOVER
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="font-bold text-base">
                        {findEqualId?.price}
                      </span>
                    </div>
                  );
                })}

                <div className="flex flex-col p-2 gap-3">
                  <div className="flex justify-between font-normal text-[#574F4D] text-sm">
                    <span>Total de itens</span>{" "}
                    <span>
                      R${String(totalPrice.toFixed(2)).replace(".", ",")}
                    </span>
                  </div>
                  <div className="flex justify-between font-normal text-[#574F4D] text-sm">
                    <span>Entrega</span>{" "}
                    <span>R${delivery.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between text-[#403937] font-bold text-xl">
                    <span>Total</span>{" "}
                    <span>
                      R${String(totalwithDelivery.toFixed(2)).replace(".", ",")}
                    </span>
                  </div>
                </div>
                  
                <button
                  type="submit"
                  disabled={cartShopping?.length === 0}
                  className="bg-[#DBAC2C] py-3 px-2 w-full flex items-center justify-center rounded-md cursor-pointer disabled:opacity-60"
                >
                  
                  <span className="text-white font-bold text-sm">
                    CONFIRMAR PEDIDO
                  </span>
                 
                </button>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
