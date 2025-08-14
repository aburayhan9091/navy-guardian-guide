import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const blogPosts = [
  {
    id: 1,
    title: 'Naval Exercise 2024',
    description: 'Bangladesh Navy conducts major maritime exercise in Bay of Bengal.',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'New Ship Commissioning',
    description: 'BNS Bangabandhu officially commissioned into the Bangladesh Navy fleet.',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Training Academy Updates',
    description: 'Advanced maritime training programs launched for naval officers.',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'International Cooperation',
    description: 'Bangladesh Navy strengthens ties with allied maritime forces.',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: 'Maritime Security',
    description: 'Enhanced coastal security measures implemented nationwide.',
    image: '/placeholder.svg'
  }
];

const BlogCarousel = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Bangladesh Navy Blog
      </h2>
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="blog-swiper"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 bg-muted flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Blog Image</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .blog-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 20px;
        }
        .blog-swiper .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.5;
        }
        .blog-swiper .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default BlogCarousel;