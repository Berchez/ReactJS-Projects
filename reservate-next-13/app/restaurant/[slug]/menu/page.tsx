import Header from '../components/Header';
import RestaurantNavBar from '../components/RestauratNavbar';
import MenuComponent from '../components/Menu';

export default function Menu() {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <MenuComponent />
        </div>
      </div>
    </>
  );
}
