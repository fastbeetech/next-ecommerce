import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import NoSSR from './NoSSR';
import useMobile from '../hooks/useMobile';

const menus = [
  { id: 1, text: 'Home', link: '/home' },
  { id: 2, text: 'Store', link: '/store' },
  { id: 3, text: 'Trending', link: '/trending' },
  { id: 4, text: 'About', link: '/About' },
];

const MobileMenu = () => {
  const { open, setOpen } = useMobile();
  return (
    <>
      {open && (
        <motion.div
          className="sm:inline-block lg:hidden w-full absolute top-[4rem] h-screen bg-white p-3"
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
        >
          <NoSSR>
            <MdClose
              className="ml-auto text-[2rem] text-gray-500"
              onClick={() => setOpen(false)}
            />
            <div className="flex flex-col gap-y-4">
              {menus.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.link}
                  className="hover:bg-black/10 p-3 text-black"
                >
                  <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {menu.text}
                  </motion.a>
                </Link>
              ))}
            </div>
          </NoSSR>
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
