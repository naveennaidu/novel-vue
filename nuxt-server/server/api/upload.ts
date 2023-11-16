import { put } from "@vercel/blob";

export default defineLazyEventHandler(async () => {
  const BLOB_READ_WRITE_TOKEN = useRuntimeConfig().BLOB_READ_WRITE_TOKEN;
  if (!BLOB_READ_WRITE_TOKEN) {
    throw new Error(
      "Missing BLOB_READ_WRITE_TOKEN"
    );
  }

  return defineEventHandler(async (event) => {
    // Extract the `prompt` from the body of the request
    const body = event.node.req
    const file = body || "";
    const filename = event.headers.get("x-vercel-filename") || "file.txt";
    const contentType = event.headers.get("content-type") || "text/plain";
    const fileType = `.${contentType.split("/")[1]}`;

    // construct final filename based on content-type if not provided
    const finalName = filename.includes(fileType)
      ? filename
      : `${filename}${fileType}`;
    const blob = await put(finalName, file, {
      contentType,
      access: "public",
    });

    return blob;
  });
});
