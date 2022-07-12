import Image from "next/image";
import Link from "next/link";
export default function OurServices() {
  return (
    <div className="service pt100 pb100">
      <div className="container">
        <div className="heading2">
          <h2 className="">Tree Care and Removal Services</h2>
          <p>Virginia Beach, Chesapeake, Norfolk</p>
        </div>
        <div className="services-list">
          <div className="service-left-image">
            <div className="service-block-1">
              <Image
                width={720}
                height={435}
                alt="services1"
                src="/images/service-img-1.jpg"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="service-block-2">
              <h3 className="mb15">Tree Removal</h3>
              <div className="service-content">
                <p>
                  We specialize in the latest safety technique for tree removal.
                  We have experience dealing with decaying and dead trees that
                  can be&nbsp;
                  <Link href="/">
                    <a>dangerous to remove</a>
                  </Link>
                  . Our experience in the industry, as well as&nbsp;
                  <Link href="/">
                    <a>our strict safety standards</a>
                  </Link>
                  , ensures that&nbsp;
                  <Link href="/">
                    <a>tree removals</a>
                  </Link>
                  &nbsp; go smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="service-right-image">
            <div className="service-block-2">
              <h3 className="mb15">Pruning/Trimming</h3>
              <div className="service-content">
                <p>
                  Pruning refers to removing certain parts of a tree for a
                  variety of reasons. Sometimes pruning is required to
                  maintain&nbsp;
                  <Link href="/">
                    <a>tree health</a>
                  </Link>
                  , by removing dead or dying branches. Or pruning may be used
                  to remove branches that are too close to power lines or your
                  home. Pruning is an excellent way to deal with a tree issue
                  without removing the whole tree.
                </p>
              </div>
            </div>
            <div className="service-block-4">
              <Image
                width={720}
                height={435}
                alt="services1"
                src="/images/service-img-2.jpg"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
          <div className="service-left-image">
            <div className="service-block-1">
              <Image
                width={720}
                height={435}
                alt="services1"
                src="/images/service-img-3.jpg"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="service-block-2">
              <h3 className="mb15">Stump Grinding and Removal</h3>
              <div className="service-content">
                <p>
                  A stump on your property can be an eyesore, an annoying
                  obstacle, and the roots can damage paved areas near the stump.
                  Insects and pests may also nest in a decaying&nbsp;
                  <Link href="/">
                    <a>tree stump</a>
                  </Link>
                  .&nbsp;
                  <Link href="/">
                    <a>Stump grinding</a>
                  </Link>
                  &nbsp; is a process where the stump is completely removed by
                  grinding it down.&nbsp;
                  <Link href="/">
                    <a>Stump grinding</a>
                  </Link>
                  &nbsp; is one of the most common tree service requests we
                  receive, and we have the professional equipment to quickly and
                  easily&nbsp;
                  <Link href="/">
                    <a>remove tree stumps</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="service-right-image">
            <div className="service-block-2">
              <h3 className="mb15">Lot Clearing</h3>
              <div className="service-content">
                <p>
                  If you&apos;re looking to start a new construction project,
                  then you&apos;ll need to clear the land which you&apos;ll
                  build on. Our high quality equipment and well trained staff
                  can get any&nbsp;
                  <Link href="/">
                    <a>lot cleared</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="service-block-4">
              <Image
                width={720}
                height={435}
                alt="services1"
                src="/images/service-img-4.jpg"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
          <div className="service-left-image">
            <div className="service-block-1">
              <Image
                width={720}
                height={435}
                alt="services1"
                src="/images/service-img-5.jpg"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="service-block-2">
              <h3 className="mb15">General Tree Care</h3>
              <div className="service-content">
                <p>
                  We diagnose and help maintain the trees on your property.
                  It&apos;s important that you get the health of any trees on
                  your property checked out every few years especially if
                  it&apos;s a mature tree that shows any signs of decay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
