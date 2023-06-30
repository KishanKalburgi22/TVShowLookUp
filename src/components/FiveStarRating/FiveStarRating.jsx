import { Star, StarHalf, StarFill } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  const starList = [];

  const starFillCount = Math.floor(rating);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  if (hasHalfStar) {
    starList.push(<StarHalf key="half-star" />);
  }

  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<Star key={"empty-star" + i} />);
  }

  return <div>{starList}</div>;
}
