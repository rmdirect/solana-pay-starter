import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Apoth Shop</title>
      <meta name="title" content="Apoth Shop: Solana Pay" />
      <meta name="description" content="Resources for Your Apothecary!" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://twitter.com/RachBuilds" />
      <meta property="og:title" content="Apoth Shop: Solana Pay" />
      <meta property="og:description" content="Resources for Your Apothecary!" />
      <meta property="og:image" content="https://i.postimg.cc/hvDkbq2j/metaimg.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://twitter.com/RachBuilds" />
      <meta property="twitter:title" content="Apoth Shop: Solana Pay" />
      <meta property="twitter:description" content="Resources for Your Apothecary!" />
      <meta property="twitter:image" content="https://i.postimg.cc/hvDkbq2j/metaimg.png" />
    </Head>
  );
};
