import Link from "next/link";

const Pagination = ({ next, previous }: { next: string; previous: string }) => {
  const nextQuery = next?.split("&").slice(1).join("&");
  console.log(nextQuery);
  const previousQuery = previous?.split("&").slice(1).join("&");

  return (
    <div className="flex items-center gap-6 mx-auto my-10">
      <Link
        href={`/?${previousQuery}`}
        className={`bg-main px-4 py-2 rounded-md ${
          !previous ? "pointer-events-none" : ""
        }`}
      >
        Previous{" "}
      </Link>
      <Link
        href={`/?${nextQuery}`}
        className={`bg-main px-4 py-2 rounded-md ${
          !next ? "pointer-events-none" : ""
        }`}
      >
        Next{" "}
      </Link>
    </div>
  );
};

export default Pagination;
