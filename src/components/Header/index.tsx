import {Link} from '@solidjs/router';
import type {Component} from 'solid-js';

const Header : Component = () => {
  return (
    <div class="p-10 justify-center items-center text-4xl text-center font-bold bg-base m-5 xl:text-7xl sm:text-6xl xl:p-20 sm:p-20">
      <Link href="/">
      Âmago Raso
      </Link>
    </div>
  );
};

export default Header;
