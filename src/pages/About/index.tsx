import type {Component} from 'solid-js';
import Blog from '@src/layouts/Blog';
import {Link} from '@solidjs/router';

const About : Component = () => {
  return (
    <Blog>
      <div class="bg-base min-h-fit m-5 p-5 px-8">
        <Link href={`/about`}>
          <div class="text-2xl cursor-pointer hover:text-subtext1 hover:underline xl:text-5xl sm:text-4xl">
            Sobre
          </div>
        </Link>
        <div class="py-5 whitespace-pre-line">
          {
            ` Muita gente acha que me conhece, mas como podem?
          Nem eu me conheço, eu não faço ideia de quem sou.
          Não sei se algum dia vou conseguir saber, creio que não.
          Enquanto eu não descubro quem sou, me banho.
          Me banho de emoções, lagrimas, sorrisos e alegrias.
          Escrevo porque sei que mesmo que eu nunca saiba quem sou.
          Vou conseguir saber quem eu queria ser.
            `
          }
        </div>
      </div>
    </Blog>
  );
};

export default About;
