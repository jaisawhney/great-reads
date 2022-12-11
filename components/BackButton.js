import BackArrow from "./icons/BackArrow";
import classNames from "classnames";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className={classNames("cursor-pointer h-min w-min mt-6")}>
      <BackArrow />
    </div>
  );
}
