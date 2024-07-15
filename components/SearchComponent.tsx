import React from "react";
import SearchForm from "./SearchForm";

export default function SearchComponent() {
  return (
    <div className="flex-flex-col pt-10 mt-10 w-full p-4 py-10 item-start gap-x-2 rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5">
      <SearchForm />
    </div>
  );
}
