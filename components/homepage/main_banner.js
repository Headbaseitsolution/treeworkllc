import Image from "next/image";
import Link from "next/link";
export default function MainBanner() {
  return (
    <div className="bz-banner">
      <div className="y-middle">
        <h1 className="title">Cutting everything but corners for you.</h1>
      </div>
      <Link href="/" className="scroll-btn">
        <Image
          src="/images/scroll.png"
          alt="Float-image"
          className="shake-vertical"
          width={40}
          height={66}
        />
      </Link>
    </div>
  );
}
