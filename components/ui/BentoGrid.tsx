import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
} : {
    className?: string;
    children: React.ReactNode;
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
} : {
    className?: string;
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    header: React.ReactNode;
    icon: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(113,145,164,1) 28%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      }}
      >

      <div className={`${id === 1} && 'flex justify-center h-full`}>
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
        </div>
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div
          className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-purple-500">
          {title}
        </div>
        <div
          className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>)
  );
};
