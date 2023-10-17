import Link from "next/link";
import { BsEmojiSunglasses } from "react-icons/bs";
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function Layout({ children }) {
  const { status } = useSession();
  const logOutHandler = () => {
    signOut();
  };
  return (
    <div className="container">
      <header>
        <p>Project Todo App</p>
        {status === "authenticated" ? (
          <button onClick={logOutHandler}>
            Logout
            <FiLogOut />
          </button>
        ) : (
          <ul>
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>

            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        )}
      </header>
      <div className="container--main">
        <aside>
          <p>
            Welcome <BsEmojiSunglasses />
          </p>
          <ul>
            <li>
              <VscListSelection />
              <Link href={"/"}>Todos</Link>
            </li>
            <li>
              <BiMessageSquareAdd />
              <Link href={"/add-todo"}>Add Todos</Link>
            </li>
            <li>
              <RxDashboard />
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Layout;
