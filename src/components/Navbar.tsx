import Link from "next/link";
import Menu from "./Menu";
import Search from "./Search";
import { revalidatePath } from "next/cache";

const Navbar = () => {
  revalidatePath("/");

  return (
    <div className="relative flex justify-between items-center gap-4 lg:gap-20 px-2 md:px-8 h-20">
      <h1>
        {" "}
        <Link
          href={"/"}
          className="font-bold text-cyan-400 text-lg lg:text-2xl"
        >
          ZGames
        </Link>
      </h1>
      <Search />
      <Menu />
    </div>
  );
};

export default Navbar;
