// "use client";

// import { useState } from "react";

// const Filter = () => {
//   const [orderBy, setOrderBy] = useState("");
//   const [platform, setPlatform] = useState("");

//   return (
//     <div className="flex gap-4 py-3">
//       <select
//         className="bg-main p-2 rounded-md"
//         value={orderBy}
//         onChange={(e) => setOrderBy(e.target.value)}
//       >
//         <option value={"Relevance"}>Order by: Relevance</option>
//         <option value={"Date added"}>Order by: Date added</option>
//         <option value={"Name"}>Order by: Name</option>
//         <option value={"Release date"}>Order by: Release date</option>
//         <option value={"Popularity"}>Order by: Popularity</option>
//         <option value={"Average rating"}>Order by: Average rating</option>
//       </select>

//       <select
//         className="bg-main p-2 rounded-md"
//         value={platform}
//         onChange={(e) => setPlatform(e.target.value)}
//       >
//         <option value={"PC"}>PC</option>
//         <option value={"PlayStation"}>PlayStation</option>
//         <option value={"Xbox"}>Xbox</option>
//         <option value={"iOS"}>iOS</option>
//         <option value={"Android"}>Android</option>
//         <option value={"Apple Macintosh"}>Apple Macintosh</option>
//         <option value={"Linux"}>Linux</option>
//         <option value={"Nintendo"}>Nintendo</option>
//       </select>
//       <select
//         className="bg-main p-2 rounded-md"
//         value={platform}
//         onChange={(e) => setPlatform(e.target.value)}
//       >
//         <option value={"PC"}>PC</option>
//         <option value={"PlayStation"}>PlayStation</option>
//         <option value={"Xbox"}>Xbox</option>
//         <option value={"iOS"}>iOS</option>
//         <option value={"Android"}>Android</option>
//         <option value={"Apple Macintosh"}>Apple Macintosh</option>
//         <option value={"Linux"}>Linux</option>
//         <option value={"Nintendo"}>Nintendo</option>
//       </select>
//     </div>
//   );
// };

// export default Filter;
"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";
import { SelectSeparator } from "@radix-ui/react-select";
import { useState } from "react";

export function Filter() {
  const [orderBy, setOrderBy] = useState("");
  const [platform, setPlatform] = useState("");
  console.log(orderBy, platform);
  return (
    <div className="flex gap-4 my-5">
      <Select onValueChange={setOrderBy} value={orderBy}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Order by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Order by</SelectLabel>
            <SelectItem value="date">Date added</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="popularity">Popularity</SelectItem>
            <SelectItem value="rating">Average rating</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <Button
            className="mt-2 px-2 w-full"
            variant="secondary"
            size="sm"
            onClick={(e) => {
              setOrderBy("");
            }}
          >
            Clear
          </Button>
        </SelectContent>
      </Select>
      <Select onValueChange={setPlatform} value={platform}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Platforms" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Platforms</SelectLabel>
            <SelectItem value="pc">PC</SelectItem>
            <SelectItem value="playstation">Playstation</SelectItem>
            <SelectItem value="xbox">Xbox</SelectItem>
            <SelectItem value="nintendo">Nintendo</SelectItem>
            <SelectItem value="ios">iOS</SelectItem>
            <SelectItem value="android">Android</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <Button
            className="mt-2 px-2 w-full"
            variant="secondary"
            size="sm"
            onClick={(e) => {
              setPlatform("");
            }}
          >
            Clear
          </Button>
        </SelectContent>
      </Select>
    </div>
  );
}
