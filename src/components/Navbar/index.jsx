import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionBtn from "./UserActionBtn";

export default function index() {
  return (
    <>
      <header className="bg-color-accent">
        <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
          <Link href={"/"} className="font-bold text-2xl">
            MYMANGALIST
          </Link>
          <InputSearch />
          <UserActionBtn />
        </div>
      </header>
    </>
  );
}
