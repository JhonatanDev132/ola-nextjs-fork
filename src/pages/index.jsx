import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Next.js Jhonatan</title>
      <meta name="description" content="Primeira página" />
    </Head>

      <h1>Olá Next.js!</h1>
      <Menu />
      <main>
        <h2>Bem-vindo ao Next.js</h2>
        <h3>Página Inicial</h3>
      </main>
    </>
  );
}
