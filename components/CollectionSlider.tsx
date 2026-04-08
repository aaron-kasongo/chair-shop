'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { Collection } from '../lib/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CollectionSliderProps {
  collections: Collection[];
}

export default function CollectionSlider({ collections }: CollectionSliderProps) {
  return (
    <div className="swiper collectionSwiper relative pb-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        modules={[Navigation, Pagination]}
        className="relative"
      >
        {collections.map((collection) => (
          <SwiperSlide key={collection.id}>
            <Link href={`/collections/${collection.handle}`}>
              <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
                <div className="relative h-72">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-bold">{collection.name}</h3>
                    <p className="text-white/80 text-sm">{collection.description}</p>
                    <p className="text-white/90 text-xs mt-1">{collection.productCount} products</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="swiper-button-next !text-[#9C7B5C] !bg-white/80 !w-10 !h-10 !rounded-full hover:!bg-white hover:!text-[#4F3E2E] transition-all"></div>
      <div className="swiper-button-prev !text-[#9C7B5C] !bg-white/80 !w-10 !h-10 !rounded-full hover:!bg-white hover:!text-[#4F3E2E] transition-all"></div>
      <div className="swiper-pagination !bottom-0"></div>
    </div>
  );
}
