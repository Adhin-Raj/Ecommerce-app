// import { ImageSourcePropType } from "react-native";
// import { axiosInstance } from "./axios";
// const CLOUD_NAME = "dkoyh69in"; // use constants or expo env
// const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

// const uploadImage = async (imageUri) => {
//   const formData = new FormData();

//   formData.append("file", {

//     uri: imageUri,
//     type: "image/jpeg",
//     name: "upload.jpg",
//   });

//   formData.append("upload_preset", "products");

//   const response = await fetch(url, {
//     method: "POST",
//     body: formData,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   const response = await axiosInstance.post(
//     url,
//     {
//       formData,
//     },
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );

//   return response.data;
// };

// export default uploadImage;
