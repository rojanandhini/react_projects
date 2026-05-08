import HomeLayout from "../Layout/homeLayout";
import NewsNarticles from "./newsNarticles";

const HomeSelector = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // If logged in, just show the news. If not, show the full home page.
  return isLoggedIn ? <NewsNarticles /> : <HomeLayout />;
};
export default HomeSelector;