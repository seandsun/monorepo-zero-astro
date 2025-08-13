import { useEffect } from 'preact/hooks';

/*
Este componente no renderiza nada visible, solo agrega los listeners al DOM 
cuando se carga una pagina. Luego necesita ser hidratado para que los "clicks"
agregados puedan funcionar, dicha hidratación se hace mediante una directiva
de Astro llamada "client:load". 
Este componente es necesario porque al usar "ClientRouter" de 
"astro:transitions" este evita que el navegador recargue el DOM completo 
cuando se cambia de pagina, así que si se pone este script en el componente
Header solo se va a ejecutar una sola vez, por ende, cuando se navegue a otras
paginas los clicks ya no serán agregados en los botones del menú y no
funcionará.
*/

export default function MobileMenu() {
  useEffect(() => {
    const $modal = document.getElementById('menu-modal');
    const $openBtn = document.getElementById('open-btn');
    const $closeBtn = document.getElementById('close-btn');

    if ($openBtn && $closeBtn && $modal) {
      $openBtn.addEventListener('click', () => {
        $modal.classList.remove('hidden');
      });

      $closeBtn.addEventListener('click', () => {
        $modal.classList.add('hidden');
      });
    }

    // Limpieza al desmontar
    return () => {
      $openBtn?.removeEventListener('click', () => {});
      $closeBtn?.removeEventListener('click', () => {});
    };
  }, []);

  return null;
}
