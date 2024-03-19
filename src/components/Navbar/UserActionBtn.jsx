import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionBtn = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link
          href="/users/dashboard"
          className="text-color-primary py-1 hover:text-color-secondary"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-accent py-1 px-6 inline-block rounded hover:bg-color-primary hover:text-color-dark transition-all"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionBtn;
