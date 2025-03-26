"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const images = [
  "/images/home/home_gallery/home_gallery_1.png",
  "/images/home/home2.png",
  "/images/home/home_gallery/home_gallery_2.png",
  "/images/home/home_gallery/home_gallery_3.png",
  "/images/home/home_gallery/home_gallery_1.png",
  "/images/home/home_gallery/home_gallery_2.png",
  "/images/home/home_gallery/home_gallery_3.png",
  "/images/home/home_gallery/home_gallery_1.png",
  "/images/home/home2.png",
  "/images/home/home_gallery/home_gallery_2.png",
  "/images/home/home_gallery/home_gallery_3.png",
  "/images/home/home_gallery/home_gallery_2.png",
  "/images/home/home2.png",
  "/images/home/home_gallery/home_gallery_3.png",
  "/images/home/home_gallery/home_gallery_1.png",
  "/images/home/home_gallery/home_gallery_2.png",
  "/images/home/home_gallery/home_gallery_3.png",
  "/images/home/home2.png",
  "/images/home/home_gallery/home_gallery_2.png",
  "/images/home/home_gallery/home_gallery_3.png",
  "/images/home/home_gallery/home_gallery_1.png",
  "/images/home/home_gallery/home_gallery_2.png",
  "/images/home/home_gallery/home_gallery_3.png",
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (isModalOpen) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "Escape") closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, currentIndex]);

  const openModal = (index: any) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const displayedImages = () => {
    const endIndex = (currentIndex + 3) % images.length;
    if (endIndex > currentIndex || endIndex === 0) {
      return images.slice(currentIndex, currentIndex + 3);
    } else {
      return [...images.slice(currentIndex), ...images.slice(0, endIndex)];
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#ededed]  w-11/12 md:w-9/12 lg:w-9/12 mx-auto mt-24 mb-6">
      <p className="text-[35px] md:text-[60px] lg:text-[60px] regularBrush mb-9">
        Photo Gallery
      </p>

      <div className="w-full  overflow-hidden relative">
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            images.length < 3 ? "justify-center" : ""
          }`}
        >
          {displayedImages().map((image, index) => (
            <div key={index} className="w-1/3 object-cover cursor-pointer">
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-full"
                onClick={() =>
                  openModal((currentIndex + index) % images.length)
                }
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevImage}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full  hover:opacity-100 ${
            images.length < 3 && "hidden"
          }`}
        >
          <IoIosArrowRoundBack className="text-md md:text-2xl lg:text-2xl" />
        </button>
        <button
          onClick={nextImage}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full  hover:opacity-100 ${
            images.length < 3 && "hidden"
          }`}
        >
          <IoIosArrowRoundForward className="text-md md:text-2xl lg:text-2xl" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative flex flex-col items-center w-full h-full justify-center bg-gray-500 py-6 ">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-3xl font-bold z-50 bg-gray-800 rounded-md"
            >
              <MdOutlineClose className="text-white" />
            </button>
            <p className="absolute top-2 left-2 text-white text-sm bg-gray-800 bg-opacity-70 px-2 py-1 rounded">
              {currentIndex + 1} / {images.length}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white  px-3 py-2 rounded-lg opacity-70 hover:opacity-100 z-50"
            >
              <IoIosArrowRoundBack className="text-2xl" />
            </button>

            <div className="p-4 rounded-lg ">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg opacity-70 hover:opacity-100 z-50"
            >
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
      )}

      <div className="w-full grid justify-between grid-cols-3 mt-8 gap-2 md:gap-4 lg:gap-4">
        <div>
          {images?.slice(0, Math.ceil(images.length / 3)).map((image, idx) => (
            <div key={idx}>
              <Image
                src={image}
                alt="images"
                width={250}
                height={250}
                className="w-full mx-auto rounded-lg mb-2 md:mb-4 lg:mb-4"
                onClick={() => openModal(idx)}
              />
            </div>
          ))}
        </div>

        <div>
          {images
            ?.slice(
              Math.ceil(images.length / 3),
              Math.ceil((images.length / 3) * 2)
            )
            .map((image, idx) => (
              <div key={idx}>
                <Image
                  src={image}
                  alt="images"
                  width={250}
                  height={250}
                  className="w-full mx-auto rounded-lg mb-2 md:mb-4 lg:mb-4"
                  onClick={() => openModal(Math.ceil(images.length / 3) + idx)}
                />
              </div>
            ))}
        </div>

        <div>
          {images
            ?.slice(Math.ceil((images.length / 3) * 2), images.length)
            .map((image, idx) => (
              <div key={idx}>
                <Image
                  src={image}
                  alt="images"
                  width={250}
                  height={250}
                  className="w-full mx-auto rounded-lg mb-2 md:mb-4 lg:mb-4"
                  onClick={() =>
                    openModal(Math.ceil((images.length / 3) * 2) + idx)
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
