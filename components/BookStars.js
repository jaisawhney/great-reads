import Star from "../public/icons/Star";

export default function BookStars(props) {
  // Displays the rating in stars
  return [1, 2, 3, 4, 5].map((star) => {
    if (star <= Math.floor(props.averageRating)) return <Star fill="full" />;
    return <Star />;
  });
}
