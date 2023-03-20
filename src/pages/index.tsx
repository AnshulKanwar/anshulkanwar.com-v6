import Hero from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anshul Kanwar</title>
        <meta name="description" content="Anshul Kanwar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#171618"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="antialiased bg-gradient-radial text-violet pb-40">
        <div className="max-w-3xl mx-auto">
          <Hero />
        </div>
      </main>
    </>
  );
}
