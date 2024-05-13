import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";
export async function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <Button type="submit" variant="secondary" className="flex flex-row gap-2">
        Login with <IconBrandGoogle />
      </Button>
    </form>
  );
}
