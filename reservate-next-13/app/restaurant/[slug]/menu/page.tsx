import RestaurantNavBar from '../components/RestauratNavbar';
import MenuComponent from '../components/Menu';

export default function Menu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <MenuComponent />
      </div>
    </>
  );
}
