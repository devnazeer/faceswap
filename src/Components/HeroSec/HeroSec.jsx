// import { Box, Container, Grid, Typography } from "@mui/material";
// import Image from "next/image";
// import React, { use } from "react";
// import ChooseFile from "../ChooseFile/ChooseFile";
// import Icon from "../Icon/Icon";
// import ButtonLabel from "../ButtonLabel/ButtonLabel";
// import { useState } from "react";

// function HeroSec({
//   title,
//   para,
//   src,
//   alt,
//   uploadPara1,
//   uploadPara2,
//   code1,
//   label1,
//   code2,
//   label2,
//   codeBtn,
//   labelBtn,
//   btnText,
//   note,
//   apiUrl, // ✅ New: API endpoint to call (passed from parent)
// }) {
//   const [swap, setSwap] = useState(false);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [sourceFile, setSourceFile] = useState(null);
//   const [targetFile, setTargetFile] = useState(null);
//   const [sourcePreview, setSourcePreview] = useState(null);
//   const [targetPreview, setTargetPreview] = useState(null);

//   const handleFileChange = (e, type) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const imageUrl = URL.createObjectURL(file);

//     if (type === "source") {
//       setSourceFile(file);
//       setSourcePreview(imageUrl);
//     } else {
//       setTargetFile(file);
//       setTargetPreview(imageUrl);
//     }
//   };

//   const handleSwap = async () => {
//     if (!sourceFile || !targetFile) {
//       alert("Please upload both source and target images.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("source", sourceFile);
//     formData.append("target", targetFile);

//     try {
//       setLoading(true);
//       const res = await fetch(apiUrl, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (res.ok && data.output_file) {
//         const baseApi = process.env.NEXT_PUBLIC_API_BASE_URL;
//         setResult(`${baseApi}/assets/${data.output_file}`);
//         setSwap(true);
//       } else {
//         alert(data.message || "Swap failed.");
//       }
//     } catch (error) {
//       console.error("Swap failed:", error);
//       setLoading(false);
//       alert("Swap failed. Try again.");
//     }
//   };
//   return (
//     <>
//       <Box
//         component="section"
//         sx={{
//           width: "100%",
//           backgroundImage:
//             "linear-gradient(to bottom right, #111827, #000000, #1f2937cc)",
//           py: "64px",
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             variant="h1"
//             component="h1"
//             align="center"
//             sx={{ mb: "16px" }}
//           >
//             {title}
//           </Typography>
//           <Typography
//             variant="p"
//             component="p"
//             sx={{ mb: "32px", color: "#fffc", px: { xs: "16px", sm: "24px" } }}
//             align="center"
//           >
//             {para}
//           </Typography>
//           <Grid container spacing={"24px"}>
//             {/* image result */}
//             <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//               <Image
//                 src={swap ? result : src}
//                 width={800}
//                 height={400}
//                 alt={alt || "Preview"}
//                 style={{
//                   objectFit: "contain",
//                   maxWidth: "100%",
//                   height: "auto",
//                   aspectRatio: "800/400",
//                   borderRadius: "20px",
//                 }}
//                 priority
//               />
//             </Grid>
//             <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//               <Grid
//                 container
//                 spacing={"10px"}
//                 sx={{ position: "relative" }}
//                 justifyContent={"center"}
//               >
//                 <Grid
//                   size={{ xs: 6, md: 6, lg: 6 }}
//                   sx={{ display: "flex", justifyContent: "flex-end" }}
//                 >
//                   <ChooseFile
//                     name="source"
//                     para={uploadPara1}
//                     code={code1}
//                     label={label1}
//                     onChange={(e) => handleFileChange(e, "source")}
//                     preview={sourcePreview}
//                   />
//                 </Grid>
//                 <Grid size={{ xs: 6, md: 6, lg: 6 }}>
//                   <ChooseFile
//                     name="target"
//                     para={uploadPara2}
//                     code={code2}
//                     label={label2}
//                     onChange={(e) => handleFileChange(e, "target")}
//                     preview={targetPreview}
//                   />
//                 </Grid>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     background: "#0891b2",
//                     borderRadius: "50%",
//                     width: "32px",
//                     height: "32px",
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                   }}
//                 >
//                   <Icon
//                     code="&#xe941;"
//                     label={"arrow_right_alt"}
//                     sx={{ fontSize: "20px !important", color: "#fff" }}
//                   />
//                 </Box>
//               </Grid>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   width: "100%",
//                   // background: "red",
//                   mb: "24px",
//                 }}
//               >
//                 <ButtonLabel
//                   onClick={handleSwap}
//                   btnText={loading ? "Swapping..." : btnText}
//                   isIcon={true}
//                   code={codeBtn}
//                   label={labelBtn}
//                   sx={{ mt: "20px", textAlign: "center" }}
//                 />
//               </Box>
//               <Typography
//                 variant="p"
//                 component="p"
//                 align="center"
//                 sx={{
//                   background: "linear-gradient(to right,#818cf8, #0891b2)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   fontWeight: "600",
//                   mb: "24px",
//                 }}
//               >
//                 {note}
//               </Typography>
//               <Box
//                 sx={{
//                   p: "8px",
//                   mb: "4px",
//                   background: "#fff",
//                   width: "115px",
//                   height: "115px",
//                   display: "flex",
//                   justifyContent: "center",
//                   boxSizing: "border-box",
//                   borderRadius: "10px",
//                   textAlign: "center",
//                   mx: "auto",
//                 }}
//               >
//                 <Image
//                   src={"/home/qrCode.png"}
//                   width={99}
//                   height={99}
//                   style={{
//                     maxWidth: "100%",
//                     // width: "100%",
//                     height: "100%",
//                     maxHeight: "300px",
//                     objectFit: "contain",
//                     objectPosition: "center",
//                   }}
//                   alt="qr code"
//                 />
//               </Box>
//               <Typography
//                 variant="p"
//                 component="p"
//                 align="center"
//                 sx={{
//                   color: "#fff9",
//                   fontSize: "12px",
//                 }}
//               >
//                 Scan to Download
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// }

// export default HeroSec;

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { use } from "react";
import ChooseFile from "../ChooseFile/ChooseFile";
import Icon from "../Icon/Icon";
import ButtonLabel from "../ButtonLabel/ButtonLabel";
import { useState } from "react";

function HeroSec({
  title,
  para,
  src,
  alt,
  uploadPara1,
  uploadPara2,
  code1,
  label1,
  code2,
  label2,
  codeBtn,
  labelBtn,
  btnText,
  note,
  apiUrl, // ✅ New: API endpoint to call (passed from parent)
  extraFields = {},
}) {
  const [swap, setSwap] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sourceFile, setSourceFile] = useState(null);
  const [targetFile, setTargetFile] = useState(null);
  const [sourcePreview, setSourcePreview] = useState(null);
  const [targetPreview, setTargetPreview] = useState(null);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);

    if (type === "source") {
      setSourceFile(file);
      setSourcePreview(imageUrl);
    } else {
      setTargetFile(file);
      setTargetPreview(imageUrl);
    }
  };

  const handleSwap = async () => {
    if (!sourceFile || !targetFile) {
      alert("Please upload both source and target images.");
      return;
    }

    const formData = new FormData();
    formData.append("source", sourceFile);
    formData.append("target", targetFile);

    // Append extra fields (used for multifaceswap)
    Object.entries(extraFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      setLoading(true);
      const res = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok && data.output_file) {
        const baseApi = process.env.NEXT_PUBLIC_API_BASE_URL;
        setResult(`${baseApi}/assets/${data.output_file}`);
        setSwap(true);
      } else {
        alert(data.message || "Swap failed.");
      }
    } catch (error) {
      console.error("Swap failed:", error);
      setLoading(false);
      alert("Swap failed. Try again.");
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(result, { mode: "cors" });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "face-swap-result.jpg"); // set desired filename
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert("Failed to download image.");
      console.error(err);
    }
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundImage:
            "linear-gradient(to bottom right, #111827, #000000, #1f2937cc)",
          py: "64px",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{ mb: "16px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ mb: "32px", color: "#fffc", px: { xs: "16px", sm: "24px" } }}
            align="center"
          >
            {para}
          </Typography>
          <Grid container spacing={"24px"}>
            {/* image result */}
            <Grid size={{ xs: 12, md: 6, lg: 8 }}>
              <Image
                src={swap ? result : src}
                width={800}
                height={400}
                alt={alt || "Preview"}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "auto",
                  aspectRatio: "800/400",
                  borderRadius: "20px",
                }}
                priority
              />
              {swap && (
                <Box mt={2} textAlign="center" sx={{ width: "100%" }}>
                  <ButtonLabel
                    onClick={handleDownload}
                    target={"blank"}
                    isIcon={true}
                    code="&#xf090;"
                    label={"download"}
                    btnText={"Download Result"}
                    sx={{
                      mx: "auto",
                      padding: {
                        xs: "12px 18px !important",
                        sm: "12px 24px !important",
                      },
                      fontWeight: "400 !important",
                      fontSize: {
                        xs: "14px !important",
                        sm: "16px !important",
                      },
                      textAlign: "center",
                      height: "48px",
                    }}
                  />
                </Box>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <Grid
                container
                spacing={"10px"}
                sx={{ position: "relative" }}
                justifyContent={"center"}
              >
                <Grid
                  size={{ xs: 6, md: 6, lg: 6 }}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <ChooseFile
                    name="source"
                    para={uploadPara1}
                    code={code1}
                    label={label1}
                    onChange={(e) => handleFileChange(e, "source")}
                    preview={sourcePreview}
                  />
                </Grid>
                <Grid size={{ xs: 6, md: 6, lg: 6 }}>
                  <ChooseFile
                    name="target"
                    para={uploadPara2}
                    code={code2}
                    label={label2}
                    onChange={(e) => handleFileChange(e, "target")}
                    preview={targetPreview}
                  />
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0891b2",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Icon
                    code="&#xe941;"
                    label={"arrow_right_alt"}
                    sx={{ fontSize: "20px !important", color: "#fff" }}
                  />
                </Box>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  // background: "red",
                  mb: "24px",
                }}
              >
                <ButtonLabel
                  onClick={handleSwap}
                  btnText={loading ? "Swapping..." : btnText}
                  isIcon={true}
                  code={codeBtn}
                  label={labelBtn}
                  sx={{ mt: "20px", textAlign: "center" }}
                />
              </Box>
              <Typography
                variant="p"
                component="p"
                align="center"
                sx={{
                  background: "linear-gradient(to right,#818cf8, #0891b2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "600",
                  mb: "24px",
                }}
              >
                {note}
              </Typography>
              <Box
                sx={{
                  p: "8px",
                  mb: "4px",
                  background: "#fff",
                  width: "115px",
                  height: "115px",
                  display: "flex",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                  textAlign: "center",
                  mx: "auto",
                }}
              >
                <Image
                  src={"/home/qrCode.png"}
                  width={99}
                  height={99}
                  style={{
                    maxWidth: "100%",
                    // width: "100%",
                    height: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  alt="qr code"
                />
              </Box>
              <Typography
                variant="p"
                component="p"
                align="center"
                sx={{
                  color: "#fff9",
                  fontSize: "12px",
                }}
              >
                Scan to Download
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HeroSec;
