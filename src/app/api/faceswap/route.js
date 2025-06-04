export default async function handler(req, res) {
  try {
    // Determine which endpoint to use based on the request
    const isMultiFaceSwap = req.body.multiple_faces === "true";
    const apiUrl = isMultiFaceSwap
      ? "http://147.93.62.9:8765/multifaceswap"
      : "http://147.93.62.9:8765/faceswap";

    // Prepare form data
    const formData = new FormData();

    // Append common fields
    formData.append("source", req.body.source);
    formData.append("target", req.body.target);

    // Append multi-face specific fields if needed
    if (isMultiFaceSwap) {
      formData.append("face_index", req.body.face_index || "0");
      formData.append("strength", req.body.strength || "0.7");
    }

    // Append video parameter if present
    if (req.body.video) {
      formData.append("video", req.body.video);
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "API request failed");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Face Swap Error:", error);
    res.status(500).json({
      error: error.message || "Failed to process face swap",
      details: error.details,
    });
  }
}
