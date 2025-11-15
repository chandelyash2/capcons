import Button from "../ui/button";
import { Heading } from "../ui/heading";
import BlogCard from "./blog-card";
import { allBlogs, blogs } from "./dummyData";

const LatestBlog = () => {
  return (
    <div className="space-y-6 lg:space-y-15">
      <Heading as="h2" className="font-normal">
        <span className="bg-secondary-soft">Latest</span> Blogs
      </Heading>
      <div className="grid grid-cols-2 gap-4 lg:flex flex-wrap justify-between">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>{" "}
      <Heading as="h2" className="font-normal">
        <span className="bg-secondary-soft ">All</span> Blogs
      </Heading>
      <div className="grid grid-cols-2 gap-2 lg:flex flex-wrap justify-between">
        {allBlogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Button variant="primary" size="md">
          See More
        </Button>
      </div>
    </div>
  );
};

export default LatestBlog;
