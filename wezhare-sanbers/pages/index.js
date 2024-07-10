import Header from "@/components/header";
import Footer from "@/components/header/footer";
import { useRequireAuth } from "@/lib/middleware";
import HomePage from "./homePage";

export default function Home() {
  useRequireAuth();
  return (
   <div>
    <Header/>
    <HomePage/>
    <Footer/>
   </div>
  );
}
