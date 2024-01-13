import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image'
const Navbar = () => {

  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);
  const router =useRouter();
  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const click=()=>{
    router.push('/');
  }
  return (
    <nav className={styles.navbar}>
      <div>
      
      
      </div>
      <Image className={styles.logo} onClick={click} src={"/logo1.png"} width={200} height={300} alt=""/>
      
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <p>Cart ({getItemsCount()})</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;