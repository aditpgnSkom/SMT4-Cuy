import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      <h1>Welcome, {user.name}</h1>
      <Image src={user.image} alt="user image" width={250} height={250} />
    </div>
  );
};

export default page;
