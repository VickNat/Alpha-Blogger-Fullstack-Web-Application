"use client"
import LandingSection from "@/components/LandingSection";
import LatestPostSection from "@/components/LatestPostSection";
import Image from "next/image";
import BackgroundImageSection from "@/components/BackgroundImageSection";
import EditorPickSection from "@/components/EditorPickSection";

export default function Home() {

  return (
    <main className="md:py-8 dark:bg-darkPrimary flex flex-col gap-y-14">
      <LandingSection />
      <LatestPostSection />
      {/* <BackgroundImageSection /> */}
      <EditorPickSection />
    </main>
  );
}
