const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("es-ES", {
    timeZone: "UTC",
  });
};

export { slugify, formatDate };
