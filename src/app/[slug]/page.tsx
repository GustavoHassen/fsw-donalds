import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{slug: string}>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params
  const restaurant = await getRestaurantBySlug(slug)

  if(!restaurant) {
    return notFound()
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image priority src={restaurant.avatarImageUrl} alt={restaurant.name} width={82} height={82}/>
        <h2 className="font-semibold">
          {restaurant.name}
        </h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Welcome!</h3>
        <p className="opacity-55">
          Choose the way you prefer to enjoy your meal. We&apos;re here to offer you our best service in every detail!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          buttonText="Dine in"
          imageAlt="to dine in"
          imageUrl="/dine_in.png"
        />
        <ConsumptionMethodOption
          buttonText="Take away"
          imageAlt="to take away"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
  );
}

export default RestaurantPage;