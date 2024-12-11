import AdminNavbar from "@/components/AdminOnboarding/AdminNavbar";

import { Outlet } from "react-router-dom";




const AdminOnboardingLayout = () => {
    return (
      <div>
        <AdminNavbar />
        <main className="p-4 py-1">
        <Outlet /> 
        </main>
      </div>
    );
  };
  
export default AdminOnboardingLayout;