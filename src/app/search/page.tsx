"use client";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <>
    <Header/>
    <div className="container py-5">
      <h1>Search Results for: {query}</h1>
     <h1>No categories found</h1>
    </div>
    </>
  );
}
