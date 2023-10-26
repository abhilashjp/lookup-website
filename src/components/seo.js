import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Streamline VAT ID Validation Worldwide with Lookuptax. Access a single API for hassle-free validation in over 100 countries. Ensure accuracy and compliance effortlessly.',
  author = 'Lookuptax, Inc',
  meta,
  title = 'Easiest way to do Tax ID validation across the globe',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Streamline VAT ID Validation Worldwide with Lookuptax. Access a single API for hassle-free validation in over 100 countries. Ensure accuracy and compliance effortlessly.`,
};
