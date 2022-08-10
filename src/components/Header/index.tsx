import {Link} from '@solidjs/router';
import type {Component} from 'solid-js';

const Header : Component = () => {
  return (
    <div class="flex flex-col">
      <div class="p-10 justify-center items-center text-4xl text-center font-bold bg-base m-5 xl:text-7xl sm:text-6xl xl:p-20 sm:p-20">
        <Link href="/">
      Âmago Raso
        </Link>
      </div>
      <div class="flex gap-3 my-2 mx-5 bg-base p-3 px-10 justify-between">
        <Link href="/">Home</Link>
        <Link href="/lucky">Sorte</Link>
        <Link href="/about">Sobre</Link>

      </div>
    </div>
  );
};

export default Header;
