import Menu from "@/components/Menu";
import Head from "next/head";

export default function Servicos() {
  return (
    <>

    <Head>
      <title>Next.js Jhonatan</title>
      <meta name="description" content="Primeira página" />
    </Head>

      <h1>Olá Next.js!</h1>
      <Menu />
      <main>
        <h2>Serviços</h2>
        <ol>
          <li>Bla bla bla</li>
          <li>Bla bla bla</li>
          <li>Bla bla bla</li>
        </ol>
      </main>
    </>
  );
}
