import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset relative">
        <div className="absolute w-full h-full left-0 bg-black-2 opacity-60 "></div>
        <div className="">
          <Image
            src="/icons/hero-bg1.jpg"
            alt="image"
            width={1500}
            height={1500}
            className="w-full object-cover !h-screen "
          />
        </div>
      </div>
    </main>
  );
}
