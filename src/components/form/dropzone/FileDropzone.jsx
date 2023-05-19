import styled from "@emotion/styled";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropBox = styled.div`
  border-radius: 10px;
  border: 1px dashed gray;
  background-color: ${(props) => props.theme.color.grayBackgr};
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 13px;
  color: rgb(84, 84, 84);
  text-align: center;
  line-height: 20px;
`;

/**
 * @title 파일 드롭존(react dropzone)
 * @desc 파일 20개, 50MB 까지 허용
 */
const FileDropzone = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files

    // 폼데이터 구성
    const formData = new FormData();
    /*     const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    }; */
    formData.append("file", acceptedFiles);

    /*   await axios.post("/api/image/upload", formData, config).then((res) => {
      console.log(res);
    }); */
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // 파일 제한 개수
    maxFiles: 20,
    // 파일 제한 크기
    maxSize: 1000000 * 50,
    // 파일업로드
    onDrop,
  });

  // 업로드된 파일 목록
  //const filename = acceptedFiles[0]?.name;

  // 업로드한 파일 목록 (임시)

  return (
    <DropBox {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>이제 이미지를 놓아주세요!</Text>
      ) : (
        <Text>
          + 여기에 파일을 드래그 하거나, <br />
          클릭하여 업로드 하세요.
        </Text>
      )}
    </DropBox>
  );
};

export default FileDropzone;
