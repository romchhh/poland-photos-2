import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Image
        src="/image_2026-05-02_05-27-24.png"
        alt="Import & Export solutions"
        width={1098}
        height={717}
        sizes="100vw"
        priority
        className="h-auto w-full"
      />

      <div className="w-full px-4 py-6 flex justify-center">
        <a
          href="mailto:euhelpprivate@gmail.com"
          className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          Contact us
        </a>
      </div>
    </main>
  );
}
