import Link from "next/link";
import Menu from "./Menu";
import Search from "./Search";
import { revalidatePath } from "next/cache";

const Navbar = () => {
  revalidatePath("/");

  return (
    <div className="relative flex justify-between items-center gap-20 px-4 md:px-8 lg:px-16 h-20">
      <h1>
        {" "}
        <Link href={"/"} className="font-bold text-2xl text-cyan-400">
          ZGames
        </Link>
      </h1>
      <Search />
      <Menu />
    </div>
  );
};

export default Navbar;
