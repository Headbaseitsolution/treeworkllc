import Image from "next/Image";
import BreadcrumbBlogs from "../components/blog_breadcrumb";
export default function pageno({ newsposts }) {
  return (
    <>
      <div>
        <div>
          <BreadcrumbBlogs />
        </div>
        <div className="container pt100 pb100">
          <Image
            src={newsposts.jetpack_featured_media_url}
            width={1440}
            height={700}
            alt="thumbnail"
          ></Image>
          <h2>{newsposts.title.rendered}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: newsposts.content.rendered }}
          ></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://techcrunch.com/wp-json/wp/v2/posts");
  const newsposts = await res.json();

  const paths = newsposts.map((post) => {
    return {
      params: {
        pageno: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.pageno;
  const res = await fetch(`https://techcrunch.com/wp-json/wp/v2/posts/${id}`);
  const newsposts = await res.json();
  return { props: { newsposts } };
}
