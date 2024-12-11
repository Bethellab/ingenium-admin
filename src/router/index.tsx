import { createBrowserRouter } from "react-router-dom";








import ForgotPasswordForm from "@/components/SignIn/ForgotPassword";
import AdminOnboarding from "@/components/SignIn/AdminOnboarding";
import AdminLoginForm from "@/components/SignIn/LoginForm/AdminLogin";
import AdminOnboardingLayout from "@/pages/admin-onboarding";
import Overview from "@/components/AdminOnboarding/Overview";
import Courses from '../components/AdminOnboarding/Courses'
import UploadVideo from "@/components/AdminOnboarding/Courses/UploadVideo";
import Analytics from "@/components/AdminOnboarding/Courses/Analytics";
import Affiliates from "@/components/AdminOnboarding/Affiliates";
import AddNewAffiliate from "@/components/AdminOnboarding/Affiliates/AddNewAffiliate";
import AffiliateList from "@/components/AdminOnboarding/Affiliates/AffiliateList/AffliateList";





const router = createBrowserRouter([





  { path: "/admin-onboarding", element: <AdminOnboarding /> },
  { path: "/", element: <AdminLoginForm /> },
  { path: "/forgotpassword", element: <ForgotPasswordForm /> },






  {
    element: <AdminOnboardingLayout />,
    children: [
      { path: "/overview", element: <Overview /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/analytics", element: <Analytics /> },
      { path: "/courses/uploadvideo", element: <UploadVideo /> },
      { path: "/affiliaties", element: <Affiliates /> },
      { path: "/addnewaffiliate", element: <AddNewAffiliate /> },
      { path: "/affiliatelist", element: <AffiliateList /> },
    ]
  }





]);

export { router }; 
