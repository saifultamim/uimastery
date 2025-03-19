import Button from "@/features/button/Button";
import Hero from "@/features/hero/Hero";
import {
  HeroContent,
  HeroDescription,
  HeroSubTitle,
  HeroTitle,
} from "@/features/hero/HeroContent";
import { Input } from "@/features/input/Input";
import banner from "@/public/images/about/banner.webp";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto mt-6">
      {/* <Button type="button" className="" variant="outline" size="lg">
        submit
      </Button> */}
      {/* <Input
        className="text-md placeholder:text-yellow-600 placeholder:text-md text-red-600"
        placeholder="Enter your name"
      /> */}

      {/* <Hero
        className="w-full h-[350px] md:h-[400px] lg:h-[98vh]  bg-cover bg-center"
        backgroundImage={banner}
      >
        <HeroContent className="border border-black text-white ">
          <HeroTitle className="">this is title</HeroTitle>
          <HeroSubTitle className="">this is sub title</HeroSubTitle>
          <HeroDescription className="">this is description</HeroDescription>
        </HeroContent>
      </Hero> */}
    </div>
  );
}
