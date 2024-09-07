export const responsive = {
  desktop: {
    breakpoint: { max: 1550, min: 1415 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1415, min: 1120 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1120, min: 860},
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  smallerThanMobile: {
    breakpoint: { max: 860, min: 430 },
    items: 2,
    slidesToSlide: 2, 
  },
};
