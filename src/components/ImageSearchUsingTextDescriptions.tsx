import { useSearchParams } from "react-router";
import ImageSearch from "./ImageSearch";

export default function ImageSearchUsingTextDescriptions() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "*";
  const filter = searchParams.get("filter") || false;
  return (
    <ImageSearch
      searchParameters={{
        q: query,
        query_by: "embedding",
        per_page: 25,
        vector_query: `embedding:([], distance_threshold: 2, k: 100)`,
        exclude_fields: "embedding, out_of", // reduce ~98.5% of bytes transferred over network
        filter_by: `${filter === "true" ? `title:${query}` : ""}`,
      }}
      key={query} // unmount the old instance and mount new one when query changes
    />
  );
}
