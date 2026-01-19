"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRef, useState } from "react";

const Categories = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoDuration, setVideoDuration] = useState<number>(0);

  const handleLoadedMetadata = () => {
    const el = videoRef.current;
    if (!el) return;
    if (Number.isFinite(el.duration)) setVideoDuration(el.duration);
  };

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;

    const duration = videoDuration || el.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;

    const cutSecondsFromEnd = 6;
    if (el.currentTime >= Math.max(0, duration - cutSecondsFromEnd)) {
      el.currentTime = 0;
      void el.play();
    }
  };

  const handleEnded = () => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = 0;
    void el.play();
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
              Servicios
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Construcción y carpintería
              a tu medida.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              Todo lo que tiene que ver con construcción y carpintería: cocinas, clósets y más.
            </p>
            <Link href="/properties" className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
              Ver proyectos
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/residential-homes">
                <video
                  ref={videoRef}
                  className="w-full h-[280px] sm:h-[320px] lg:h-[340px] object-cover object-center scale-[1.05]"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedMetadata={handleLoadedMetadata}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                  aria-label="Video de construcción y carpintería"
                >
                  <source src="/images/categories/ferrary-cucina-carpinteria%20(11).mp4" type="video/mp4" />
                </video>
              </Link>
              <Link href="/residential-homes" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    ¿Por qué elegir Ferrary Cucinas?
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    25 años de experiencia, materiales de primera y cumplimiento en cada entrega.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/luxury-villa">
                <Image
                  src="/images/categories/ferrary-cucina-carpinteria%20(17).jpeg"
                  alt="cocinas"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/luxury-villa" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Cocinas integrales
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Diseños modernos, materiales de calidad e instalación profesional.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/appartment">
                <Image
                  src="/images/categories/ferrary-cucina-carpinteria%20(39).jpeg"
                  alt="carpinteria"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/appartment" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Carpintería general
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Puertas, muebles, centros de entretenimiento y más.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="/office-spaces">
                <Image
                  src="/images/categories/ferrary-cucina-carpinteria oficinas(4).jpeg"
                  alt="office"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </Link>
              <Link href="/office-spaces" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500">
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl">
                    Muebles para oficina
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Escritorios, archivadores y soluciones a medida para tu negocio.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
