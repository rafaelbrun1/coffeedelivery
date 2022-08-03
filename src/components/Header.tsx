import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { CarContext } from "../context/CarContext";

export function Header() {
  const { cartShopping } = useContext(CarContext);

  const quantityCartShopping = cartShopping!.reduce((accumulator, cur) => {
    return accumulator + cur.quantity;
  }, 0);

 
  return (
    <div className="flex h-[6.5rem] w-full">
      <div className="flex fixed bg-white h-[6.5rem] w-full items-center justify-around">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex gap-3 items-center">
          <span className="w-[8.9rem] h-[2.3rem] bg-[#EBE5F9] flex items-center justify-center rounded  gap-1 text-[#4B2995] p-2 text-sm font-normal">
            <MapPin color="#8047F8" weight="fill" />
            <span>Porto Alegre, RS</span>
          </span>

          <Link
            to="/checkout"
            className="h-[2.3rem] w-[2.3rem] bg-[#F1E9C9] flex items-center justify-center rounded"
          >
            <ShoppingCart color="#C47F17" weight="fill" size={20} />
            {cartShopping!.length > 0 ? (
              <span className="w-5 h-5 bg-[#C47F17] rounded-full flex justify-center items-center absolute mt-[-35px] mr-[-35px] text-xs text-white font-bold">
                {quantityCartShopping}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
}
