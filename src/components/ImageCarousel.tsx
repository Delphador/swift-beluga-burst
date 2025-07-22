"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Импортируем ваши изображения
import image1 from "@/assets/carousel-images/image1.jpg";
import image2 from "@/assets/carousel-images/image2.jpg";
import image3 from "@/assets/carousel-images/image3.jpg";
import image4 from "@/assets/carousel-images/image4.jpg";

const images = [
  { src: image1, alt: "HeLLisiuM Photo 1" },
  { src: image2, alt: "HeLLisiuM Photo 2" },
  { src: image3, alt: "HeLLisiuM Photo 3" },
  { src: image4, alt: "HeLLisiuM Photo 4" },
];

const ImageCarousel = () => {
  return (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;