import { Container } from "@/components/ui/container";
import UserMenu from "./user-menu";

const Banner = () => {
  return (
    <div className="bg-gray-300 py-2">
      <Container className="flex justify-end">
        <UserMenu />
      </Container>
    </div>
  );
};

export default Banner;
