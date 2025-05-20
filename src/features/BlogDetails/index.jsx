"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography, List, ListItem } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const BlogDetailPage = ({ slug, locale }) => {
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const blog = t(`blogDetails.${slug}`, { returnObjects: true });

  if (!blog) return <p>Blog not found.</p>;

  const renderContent = (block) => {
    switch (block.type) {
      case "paragraph":
        return (
          <Typography
            key={block.prefix || block.text}
            variant="body1"
            sx={{ color: "#4b5563", mb: "5px" }}
          >
            {block.prefix && <strong>{block.prefix} </strong>}
            {Array.isArray(block.text)
              ? block.text.map((part, i) =>
                  typeof part === "string" ? (
                    part
                  ) : (
                    <strong key={i}>{part.bold}</strong>
                  )
                )
              : block.text}
            {block.suffix && <strong> {block.suffix}</strong>}
          </Typography>
        );
      case "heading":
        return (
          <Typography
            key={block.text}
            variant="h2"
            sx={{
              color: "#4b5563",
              mb: "5px",
              fontSize: { xs: "16px", sm: "16px" },
            }}
          >
            <strong>{block.text}</strong>
          </Typography>
        );
      case "list":
        return (
          <List key={block.items?.join()} sx={{ p: 0 }}>
            {block.items?.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  listStyle: "none",
                  color: "#4b5563",
                  mb: "5px",
                  fontSize: "16px",
                  p: 0,
                }}
              >
                {block.strongPrefix && <strong>{block.strongPrefix} </strong>}
                {item}
                {block.strongSuffix && <strong> {block.strongSuffix}</strong>}
              </ListItem>
            ))}
          </List>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ py: "32px" }}>
      <Container maxWidth="lg">
        {blog.image && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mb: "24px",
            }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              style={{
                borderRadius: "8px",
                objectFit: "contain",
                height: "auto",
                maxWidth: "100%",
                aspectRatio: "1024 / 576",
              }}
              width={1024}
              height={576}
            />
          </Box>
        )}
      </Container>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          sx={{ color: "#000 ", pt: "24px", mb: "16px" }}
        >
          {blog.title}
        </Typography>
        <Typography variant="caption" sx={{ color: "#4b5563", mb: "16px" }}>
          {blog.date}
        </Typography>
        <Typography variant="body1" sx={{ color: "#4b5563", mb: "5px" }}>
          {blog.fullDescription}
        </Typography>
        {blog.content.map((block, index) => (
          <React.Fragment key={index}>{renderContent(block)}</React.Fragment>
        ))}
      </Container>
    </Box>
  );
};

export default BlogDetailPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Box, Container, Typography } from "@mui/material";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import Loading from "@/app/Loading/Loading";

// const BlogDetailPage = () => {
//   const params = useParams(); // Get dynamic route params
//   const { slug, locale } = params;

//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!slug || !locale) return;

//     const fetchBlogDetail = async () => {
//       try {
//         const res = await fetch(
//           `https://swapinfo.xyz/wp-json/wp/v2/posts?slug=${slug}&lang=${locale}&_embed`
//         );
//         const data = await res.json();
//         if (data.length > 0) {
//           const post = data[0];
//           setBlog({
//             title: post.title.rendered,
//             content: post.content.rendered,
//             date: new Date(post.date).toLocaleDateString(locale),
//             image:
//               post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
//           });
//         } else {
//           setBlog(null);
//         }
//       } catch (error) {
//         console.error("Failed to fetch blog post", error);
//         setBlog(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogDetail();
//   }, [slug, locale]);

//   if (loading) return <Loading />;
//   if (!blog) return <p>Blog not found.</p>;

//   return (
//     <Box sx={{ py: "32px" }}>
//       <Container maxWidth="lg">
//         {blog.image && (
//           <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               width={1024}
//               height={576}
//               style={{
//                 borderRadius: "8px",
//                 objectFit: "cover",
//                 width: "100%",
//                 height: "auto",
//               }}
//             />
//           </Box>
//         )}
//       </Container>
//       <Container maxWidth="md">
//         {blog.title && (
//           <Typography variant="h1" component="h1" sx={{ mb: 2, color: "#000" }}>
//             {blog.title}
//           </Typography>
//         )}
//         {blog.date && (
//           <Typography
//             variant="caption"
//             sx={{ color: "#4b5563", mb: 2, display: "block" }}
//           >
//             {blog.date}
//           </Typography>
//         )}
//         <div
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//           style={{ color: "#4b5563" }}
//         />
//       </Container>
//     </Box>
//   );
// };

// export default BlogDetailPage;
