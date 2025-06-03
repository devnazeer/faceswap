"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ChooseFile from "./ChooseFile";
import Icon from "./Icon";
import ButtonLabel from "./ButtonLabel";
import Images from "./Images";

function HeroSec({
  title,
  para,
  src,
  alt = "Preview",
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
  apiUrl,
  extraFields = {},
  isMulti = false,
}) {
  const [swap, setSwap] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sourceFile, setSourceFile] = useState(null);
  const [targetFile, setTargetFile] = useState(null);
  const [sourcePreview, setSourcePreview] = useState(null);
  const [targetPreview, setTargetPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // Clear previous state
    setError(null);
    setSwap(false);
    setResult(null);

    if (!file.type.match(/image\/(jpeg|png|jpg|webp)/)) {
      setError("Please upload a valid image file (JPEG, PNG, JPG, WEBP)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      setError("Image size should be less than 5MB");
      return;
    }

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
      setError("Please upload both source and target images");
      return;
    }

    const formData = new FormData();
    formData.append("source", sourceFile);
    formData.append("target", targetFile);

    // Append extra fields for multi-face swap
    if (isMulti) {
      Object.entries(extraFields).forEach(([key, value]) => {
        formData.append(key, String(value)); // Ensure all values are strings
      });
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to process images");
      }

      const data = await response.json();

      if (!data?.output_file) {
        throw new Error("Invalid response from server");
      }

      setResult(
        `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/assets/${
          data.output_file
        }`
      );
      setSwap(true);
    } catch (error) {
      console.error("Swap error:", error);
      setError(error.message || "An error occurred during face swap");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!result) return;

    try {
      const response = await fetch(result);
      if (!response.ok) throw new Error("Failed to fetch result");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `face-swap-${Date.now()}.jpg`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
      setError("Failed to download image");
    }
  };

  return (
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
          variant="body1"
          component="p"
          sx={{
            mb: "32px",
            color: "rgba(255, 255, 255, 0.8)",
            px: { xs: "16px", sm: "24px" },
            textAlign: "center",
          }}
        >
          {para}
        </Typography>

        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, md: 6, lg: 8 }}
            sx={{ borderRadius: "20px", overflow: "hidden" }}
          >
            {loading ? (
              <Box
                className="flex"
                sx={{
                  height: 400,
                  bgcolor: "rgba(0,0,0,0.2)",
                  borderRadius: "20px",
                }}
              >
                <Typography variant="h4" component="h4">
                  Processing images...
                </Typography>
              </Box>
            ) : (
              <>
                <Images
                  src={swap ? result : src}
                  width={800}
                  height={400}
                  sizes="(max-width: 799px) 100vw, 800px"
                  objectFit="contain"
                  borderRadius="20px"
                  alt={alt}
                />
                {swap && (
                  <Box mt={2} textAlign="center">
                    <ButtonLabel
                      onClick={handleDownload}
                      isIcon={true}
                      code="&#xf090;"
                      label="download"
                      btnText="Download"
                      sx={{
                        mx: "auto",
                        fontWeight: 400,
                        fontSize: { xs: "14px", sm: "16px" },
                        height: "48px",
                      }}
                    />
                  </Box>
                )}
              </>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Grid
              container
              spacing={2}
              sx={{ position: "relative" }}
              justifyContent="center"
            >
              <Grid
                size={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <ChooseFile
                  name="source"
                  para={uploadPara1}
                  code={code1}
                  label={label1}
                  onChange={(e) => handleFileChange(e, "source")}
                  preview={sourcePreview}
                  disabled={loading}
                />
              </Grid>
              <Grid size={6}>
                <ChooseFile
                  name="target"
                  para={uploadPara2}
                  code={code2}
                  label={label2}
                  onChange={(e) => handleFileChange(e, "target")}
                  preview={targetPreview}
                  disabled={loading}
                />
              </Grid>
              <Box
                className="flex"
                sx={{
                  background: "#1976d2",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Icon
                  code="&#xe941;"
                  label="arrow_right_alt"
                  sx={{ fontSize: "20px", color: "#fff" }}
                />
              </Box>
            </Grid>
            {error && (
              <Typography
                color="error"
                align="center"
                sx={{ mt: 1, fontSize: "14px" }}
              >
                {error}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                my: 3,
              }}
            >
              <ButtonLabel
                onClick={handleSwap}
                btnText={loading ? "Processing..." : btnText}
                isIcon={true}
                code={codeBtn}
                label={labelBtn}
                href={"#"}
                disabled={loading || !sourceFile || !targetFile}
                sx={{
                  mt: "20px",
                  textAlign: "center",
                  minWidth: 200,
                }}
              />
            </Box>
            <Typography
              variant="body2"
              component="p"
              align="center"
              sx={{
                background: "linear-gradient(to right, #818cf8, #1976d2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
                mb: 3,
              }}
            >
              {note}
            </Typography>
            <Box
              className="flex"
              sx={{
                p: "10px",
                mb: "4px",
                background: "#fff",
                width: "99px",
                height: "99px",
                maxWidth: "100%",
                borderRadius: "10px",
                mx: "auto",
              }}
            >
              <Images
                src="/home/qrCode.png"
                width={99}
                height={99}
                sizes="(max-width: 768px) 99px, 99px"
                objectFit="contain"
                alt="QR Code"
              />
            </Box>
            <Typography
              variant="caption"
              component="p"
              align="center"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "12px",
              }}
            >
              Scan to Download
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSec;
