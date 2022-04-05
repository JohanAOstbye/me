import IconLinks from '../elements/IconLinks';

const Footer = () => {
  return (
    <footer className='h-[15vh] w-full bg-stone-100'>
      <div className='container flex flex-col flex-wrap items-center justify-center px-4 pt-8 mx-auto sm:flex-row sm:justify-between'>
        <div className='flex flex-wrap justify-center'>
          From Juan with Love&hearts;
        </div>
        <IconLinks className='flex justify-center mt-2 lg:mt-0' />
      </div>
    </footer>
  );
};

export default Footer;
