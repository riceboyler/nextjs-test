import Banner from "./banner";
import NavHome from "./nav-home";

const Header = () => {
  return (
    <div className="flex flex-col border-b">
      <Banner />
      <NavHome />
    </div>
  );
};

export default Header;
