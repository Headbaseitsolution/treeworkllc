import styles from "../styles/Home.module.css";
import Image from "next/Image";
import Link from "next/link";
import BreadcrumbBlogs from "../components/blog_breadcrumb";
export default function Blog({ newsposts }) {
  return (
    <>
      <div>
        <div>
          <BreadcrumbBlogs />
        </div>
        <div className="container pt100 pb100">
          <div className={styles.blogblock}>
            {newsposts.slice(0, 6).map((post) => (
              <div key={post.id} className={styles.blogcontent}>
                <Image
                  src={post.jetpack_featured_media_url}
                  width={600}
                  height={400}
                  alt="thumbnail"
                ></Image>
                <Link href={`${post.id}`} className={styles.blogcolumn}>
                  <div
                    className={styles.blogtitile}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://techcrunch.com/wp-json/wp/v2/posts");
  const newsposts = await res.json();
  return { props: { newsposts } };
}
