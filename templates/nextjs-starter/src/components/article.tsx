import type {FunctionComponent, PropsWithChildren} from 'react';

interface HeroProps {
  href: string;
  ariaLabel: string;
  title: string;
}

export const Article: FunctionComponent<PropsWithChildren<HeroProps>> = ({
  href,
  ariaLabel,
  children,
  title
}) => {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target="_blank"
      aria-label={ariaLabel}
      className="group flex flex-col py-3 px-4 border-black dark:border-lavender-blue-500 dark:hover:border-white border-[3px] rounded bg-white dark:bg-black dark:text-white transition-all shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_#7888FF] dark:hover:shadow-[8px_8px_0px_#fff] hover:bg-lavender-blue-200 dark:hover:bg-black active:bg-lavender-blue-400 dark:active:bg-black active:shadow-none active:translate-x-[8px] active:translate-y-[8px]">
      <h4 className="sm:text-lg break-words font-extrabold mb-1 dark:text-lavender-blue-500 group-hover:dark:text-white">
        {title}
      </h4>

      <p className="mb-2">{children}</p>
    </a>
  );
};
