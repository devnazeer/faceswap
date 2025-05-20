// // ✅ File: src/app/[locale]/api/faceswap/faceswap.js

// import { writeFile, mkdir } from "fs/promises";
// import path from "path";
// import { NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";
// import fs from "fs";

// // export const dynamic = "force-dynamic";

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const source = formData.get("source");
//     const target = formData.get("target");

//     if (!source || !target) {
//       return NextResponse.json(
//         { message: "Both source and target files are required." },
//         { status: 400 }
//       );
//     }

//     const sourceName = `${uuidv4()}_source.png`;
//     const targetName = `${uuidv4()}_target.png`;
//     const outputName = `${uuidv4()}_output.png`;

//     const uploadDir = path.join(process.cwd(), "public", "uploads");

//     if (!fs.existsSync(uploadDir)) {
//       await mkdir(uploadDir, { recursive: true });
//     }

//     const sourcePath = path.join(uploadDir, sourceName);
//     const targetPath = path.join(uploadDir, targetName);
//     const outputPath = path.join(uploadDir, outputName);

//     const saveFile = async (file, filePath) => {
//       const buffer = Buffer.from(await file.arrayBuffer());
//       await writeFile(filePath, buffer);
//     };

//     await saveFile(source, sourcePath);
//     await saveFile(target, targetPath);

//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     await writeFile(outputPath, Buffer.from(await source.arrayBuffer()));

//     // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     // const outputFileUrl = `${baseUrl}/assets/${outputName}`;

//     return NextResponse.json({
//       message: "Face swap completed successfully",
//       output_file: `/uploads/${outputName}`,
//     });
//   } catch (error) {
//     console.error("FaceSwap API Error:", error);
//     return NextResponse.json(
//       { message: "Internal server error." },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const source = formData.get("source");
//     const target = formData.get("target");

//     // Optional: handle additional fields like face_index
//     const faceIndex = formData.get("face_index");
//     const mode = formData.get("mode");

//     if (!source || !target) {
//       return NextResponse.json(
//         { message: "Both source and target files are required." },
//         { status: 400 }
//       );
//     }

//     const sourceName = `${uuidv4()}_source.png`;
//     const targetName = `${uuidv4()}_target.png`;
//     const outputName = `${uuidv4()}_output.png`;

//     const uploadDir = path.join(process.cwd(), "public", "uploads");

//     if (!fs.existsSync(uploadDir)) {
//       await mkdir(uploadDir, { recursive: true });
//     }

//     const sourcePath = path.join(uploadDir, sourceName);
//     const targetPath = path.join(uploadDir, targetName);
//     const outputPath = path.join(uploadDir, outputName);

//     const saveFile = async (file, filePath) => {
//       const buffer = Buffer.from(await file.arrayBuffer());
//       await writeFile(filePath, buffer);
//     };

//     await saveFile(source, sourcePath);
//     await saveFile(target, targetPath);

//     // Simulate processing - replace with real face swap logic
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     await writeFile(outputPath, Buffer.from(await source.arrayBuffer()));

//     return NextResponse.json({
//       message: "Face swap completed successfully",
//       output_file: `/uploads/${outputName}`,
//       meta: {
//         faceIndex,
//         mode,
//       },
//     });
//   } catch (error) {
//     console.error("FaceSwap API Error:", error);
//     return NextResponse.json(
//       { message: "Internal server error." },
//       { status: 500 }
//     );
//   }
// }

// pages/api/faceswap.js (or app/api/faceswap/route.js for App Router)
export default async function handler(req, res) {
  const response = await fetch("http://147.93.62.9:8765/faceswap", {
    method: "POST",
    headers: req.headers,
    body: req.body,
  });
  const data = await response.json();
  res.status(200).json(data);
}
