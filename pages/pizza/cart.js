import Image from "next/image";
import Layout from "../../components/Layout";
import css from "../../styles/cart.module.css";
import { useStore } from "../../store/store";
import { urlFor } from "../../lib/client";
import  toast,{Toaster} from "react-hot-toast";

export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state)=>state.removePizza)
  const handleRemove=(i)=>{
    removePizza(i);
    toast.error("Item Removed");
  }
  return (
    <Layout>
      <div className={css.container}>

        {/* details */}
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={css.tbody}>
              {CartData.pizzas.length > 0 &&
                CartData.pizzas.map((pizza, i) => {
                  const src = urlFor(pizza.image).url();
                  return (
                    <tr key={i}>
                      <td className={css.imageTd}>
                        <Image
                          loader={() => src}
                          src={src}
                          objectFit="cover"
                          width={85}
                          height={85}
                          alt=""
                        />
                      </td>

                      <td>{pizza.name}</td>
                      <td>
                        {pizza.size === 0
                          ? "Small"
                          : pizza.size === 1
                          ? "Medium"
                          : "Large"}
                      </td>
                      <td>{pizza.price}</td>
                      <td>{pizza.quantity}</td>
                      <td>{pizza.price * pizza.quantity}</td>
                      <td style={{color:"var(--themeRed)",cursor:"pointer"}} onClick={()=>handleRemove(i)}>x</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>


         {/* summary */}
        <div className={css.cart}></div>
      </div>
      <Toaster/>
    </Layout>
  );
}
