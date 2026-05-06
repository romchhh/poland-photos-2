import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-white">
      <Image
        src="/image_2026-05-02_05-27-24.png"
        alt="Main page photo"
        fill
        priority
        className="object-contain"
      />
    </main>
  );
}
