import css from "../styles/header.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import { useEffect, useState } from "react";
import TemporaryDrawer from "./Drawer";
import dynamic from 'next/dynamic';

const Header = () => {
  const [Order, setOrder] = useState("");
  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);

  const items = useStore((state) => state.cart.pizzas.length);

  return (
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Fudo</span>
      </div>

      {/* menu side */}
      <ul className={css.menu}>
        <li>
          <Link href="../">Home</Link>
        </li>
        <li>
          <Link href="#">Menu</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>

      {/* right side */}
      <div className={css.rightSide}>
        <Link href="/pizza/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2E2E2E" />
              {Order !== "" && <div className={css.badge}>1</div>}
            </div>
          </Link>
        )}
      </div>

      <div className={css.mobile_drawer}>
        <TemporaryDrawer />
      </div>
    </div>
  );
};

// Load BrowserRouter component on the client-side using dynamic import
const DynamicBrowserRouter = dynamic(() => import('react-router-dom').then(module => module.BrowserRouter), {
  ssr: false // Set ssr to false to only load on the client-side
});

const App = () => {
  return (
    <DynamicBrowserRouter>
      <Header />
    </DynamicBrowserRouter>
  );
};

export default App;
