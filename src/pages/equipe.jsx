import Menu from "@/components/Menu";
import Head from "next/head";
import { NextScript } from "next/document";

export default function Equipe() {
  return (
    <>
      <Head>
      <title>Next.js Jhonatan</title>
      <meta name="description" content="Primeira página" />
      </Head>
      <h1>Olá Next.js!</h1>
      <Menu />
      
      <main>
        <h2>Equipe</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eveniet
          veniam nostrum expedita impedit distinctio eligendi adipisci, corrupti
          consectetur nisi, dolore praesentium sunt? Quasi impedit dicta rerum,
          cumque accusamus eaque?
        </p>
      </main>
    </>
  );
}
