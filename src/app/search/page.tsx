import { Input, ScrollShadow, Button } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";
import {
  recentSearches,
  popularGenres,
  madeForYou,
  recentlyPlayed,
} from "@/constants/search";
import ImageCard from "@/components/ImageCard";

const page = () => {
  return (
    <main>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-[#12061b] -z-10">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className="container mx-auto px-5">
        <div className="pt-20 pb-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">Search</h1>
            <Input
              isClearable
              placeholder="The Weekend"
              radius="full"
              color="secondary"
              classNames={{
                inputWrapper: [
                  "bg-primary",
                  "group-hover:bg-secondary",
                  "shadow-lg",
                  "group-data-[focus=true]:bg-primary",
                ],
                input: [
                  "text-neutral-200",
                  "placeholder:text-neutral-200/50",
                  "group-hover:text-primary",
                  "group-hover:placeholder:text-primary",
                  "group-data-[focus=true]:text-neutral-200",
                  "group-data-[focus=true]:placeholder:text-neutral-200/50",
                ],
                clearButton: [
                  "text-secondary",
                  "text-2xl",
                  "group-hover:text-primary",
                  "group-data-[focus=true]:text-secondary",
                ],
              }}
              size="lg"
              startContent={
                <BsSearch className="text-xl text-secondary mr-2 group-hover:text-primary group-data-[focus=true]:text-secondary" />
              }
            ></Input>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <h1 className="font-semibold text-2xl">Recent Searches</h1>
            <div className="flex flex-row flex-wrap gap-3 select-none">
              {recentSearches.map((item) => (
                <Button
                  key={item}
                  radius="full"
                  size="sm"
                  className="py-1.5 px-3.5 bg-primary cursor-pointer group hover:bg-secondary transition-all ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <h1 className="text-sm text-neutral-200 group-hover:text-primary font-medium">
                    {item}
                  </h1>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <h1 className="font-semibold text-2xl">Popular Genres</h1>
            <div className="flex flex-row flex-wrap gap-3 select-none">
              {popularGenres.map((item) => (
                <Button
                  key={item}
                  radius="full"
                  size="sm"
                  className="py-1.5 px-3.5 bg-primary cursor-pointer group hover:bg-secondary transition-all ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <h1 className="text-sm text-neutral-200 group-hover:text-primary font-medium">
                    {item}
                  </h1>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <h1 className="font-semibold text-2xl">Made For You</h1>
            <ScrollShadow
              orientation="horizontal"
              className="flex flex-row gap-5 snap-x"
            >
              {madeForYou.map((item, index) => (
                <ImageCard
                  title={item.title}
                  image={item.image}
                  key={index}
                ></ImageCard>
              ))}
            </ScrollShadow>
          </div>

          <div className="flex flex-col gap-5 mt-12">
            <h1 className="font-semibold text-2xl">Recently Played</h1>
            <ScrollShadow
              orientation="horizontal"
              className="flex flex-row gap-5 snap-x"
            >
              {recentlyPlayed.map((item, index) => (
                <ImageCard
                  title={item.title}
                  image={item.image}
                  key={index}
                ></ImageCard>
              ))}
            </ScrollShadow>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
