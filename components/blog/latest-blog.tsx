import Button from "../ui/button";
import { Heading } from "../ui/heading";
import BlogCard from "./blog-card";
import { blogs } from "./dummyData";

const LatestBlog = () => {
  return (
    <div className="space-y-6 lg:space-y-15">
      <Heading as="h1" className="font-normal">
        <span className="bg-secondary-soft">Latest</span> Blogs
      </Heading>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>{" "}
      <Heading as="h1" className="font-normal">
        <span className="bg-secondary-soft ">All</span> Blogs
      </Heading>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Button variant="secondary" size="lg">
          See More
        </Button>
      </div>
    </div>
  );
};

export default LatestBlog;
