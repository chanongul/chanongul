import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
}: SanityFetchProps): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, { cache: "no-cache" });
}
