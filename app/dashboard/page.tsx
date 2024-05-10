import Feed from "@/components/Feed";
import MenuDashboard from "@/components/Menu";
import NavbarDashboard from "@/components/NavbarDashboard";
export default function Page() {
  return (
    <div>
      <NavbarDashboard />
      <Feed />
      <MenuDashboard />
    </div>
  );
}
