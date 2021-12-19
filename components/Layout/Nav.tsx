import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import logo from '../../public/Logo_color.svg';
import { MenuIcon } from '../icons/MenuIcon';

const sidebar = {
  open: () => ({
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className='min-w-6xl flex justify-between mx-auto p-3'
    >
      <div className='h-8 w-10'>
        <Image src={logo} alt='Logo' />
      </div>
      <ul className='sm:flex flex-col sm:flex-row hidden'>
        <li className=''></li>
        <li>home</li>
        <li>work</li>
        <li>about</li>
      </ul>
      <MenuIcon toggle={() => toggleOpen()} className='w-8 h-8 sm:hidden' />
    </motion.nav>
  );
};

export default Nav;
