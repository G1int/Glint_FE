export const imageUploader = async (format: string, image: string) => {
  //TODO: 테스트 중
  const formData = new FormData();

  formData.append(
    format,
    new Blob([JSON.stringify(format)], { type: "application/json" })
  );

  if (image) {
    formData.append("image", image);
  }
  console.log(formData);
  return formData;
};
