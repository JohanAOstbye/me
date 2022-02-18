import Head from 'next/head';

const Customhead = () => {
  return (
    <Head>
      <title>Johan August Østbye</title>
      <meta name='description' content='Generated by Johan August Østbye' />
      <link rel='icon' href='/favicon/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#3ca753'
      />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/mstile-144x144.png'
      />
      <meta name='theme-color' content='#ffffff'></meta>
    </Head>
  );
};

export default Customhead;