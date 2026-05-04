'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { cn } from '@/lib/utils';

type HeroParallaxProduct = {
  title: string;
  thumbnail: string;
  shortDescription?: string;
};

type HeroParallaxProps<TProduct extends HeroParallaxProduct> = {
  products: TProduct[];
  title?: string;
  subtitle?: string;
  className?: string;
  headerClassName?: string;
  onProductSelect?: (product: TProduct) => void;
};

export const HeroParallax = <TProduct extends HeroParallaxProduct,>({
  products,
  title = 'The Ultimate development studio',
  subtitle = 'We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products.',
  className,
  headerClassName,
  onProductSelect,
}: HeroParallaxProps<TProduct>) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div ref={ref} className={cn('h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]', className)}>
      <Header title={title} subtitle={subtitle} className={headerClassName} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} onSelect={onProductSelect} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} onSelect={onProductSelect} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} onSelect={onProductSelect} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ title, subtitle, className }: { title: string; subtitle: string; className?: string }) => {
  return (
    <div className={cn('max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0', className)}>
      <h1 className="text-2xl md:text-7xl font-bold">{title}</h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-400">{subtitle}</p>
    </div>
  );
};

export const ProductCard = <TProduct extends HeroParallaxProduct,>({
  product,
  translate,
  onSelect,
}: {
  product: TProduct;
  translate: MotionValue<number>;
  onSelect?: (product: TProduct) => void;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <button type="button" onClick={() => onSelect?.(product)} className="block h-full w-full cursor-pointer text-left group-hover/product:shadow-2xl" aria-label={`View ${product.title} project details`}>
        <img src={product.thumbnail} height="600" width="600" className="object-cover object-left-top absolute h-full w-full inset-0" alt={product.title} />
      </button>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 text-white pointer-events-none">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        {product.shortDescription ? <p className="mt-1 text-sm text-zinc-200">{product.shortDescription}</p> : null}
      </div>
    </motion.div>
  );
};
