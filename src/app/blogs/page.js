// "use client"
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
  title: "blogs | Next Hero",
  description: "description",
};

const blogs = [
  {
    id: 1,
    year: 2016,
    title: "title 1",
  },
  {
    id: 2,
    year: 2017,
    title: "title 2",
  },
  {
    id: 3,
    year: 2018,
    title: "title 3",
  },
  {
    id: 4,
    year: 2019,
    title: "title 4",
  },
  {
    id: 5,
    year: 2020,
    title: "title 5",
  },
];

const BlogsPage = () => {
  // const router = useRouter()
  return (
    <div className="container mx-auto">
      <h1>Blogs Page</h1>
      {blogs.map(({ id, year, title }) => (
        <Link
          className="block border border-blue-500 my-2 p-2"
          href={{
            pathname: `/blogs/${year}/${id}`,
            query: {
              title: title,
            },
          }}
          key={id}
          // onClick={()=> router.push(`/blogs/${year}/${id}?title=${title}`)}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
