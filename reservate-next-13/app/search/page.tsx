import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

const prisma = new PrismaClient();

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

const fetchRestaurants = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    price: true,
    slug: true,
    location: true,
  };
  if (!city) return prisma.restaurant.findMany({ select: select });
  return prisma.restaurant.findMany({
    select: select,
    where: { location: { name: { equals: city.toLowerCase() } } },
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurants(searchParams.city);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={location} cuisines={cuisine} />
        <div className="w-5/6">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>sorry... no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
