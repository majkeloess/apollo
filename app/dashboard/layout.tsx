import NavbarDashboard from "@/components/NavbarDashboard";
import MenuDashboard from "@/components/Menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarDashboard />
      {children}
      <MenuDashboard />
    </div>
  );
}
