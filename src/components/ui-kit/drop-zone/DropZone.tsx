import { FC, useCallback, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import styled from "styled-components";
// import { convertBytesToHumanReadable } from "../../../util/file-utils";
import { CloudUpload, Csv, File } from "../../icons";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { DropZoneFileTypes, DropZoneProps } from "./DropZone.interface";

const DropZoneWrapper = styled.div<{
  isDragReject?: boolean;
  isDragAccept?: boolean;
  error?: boolean;
  selectedFile?: boolean;
}>`
  display: flex;
  ${({ selectedFile }) =>
    selectedFile
      ? "justify-content: space-between; padding: 0 10px; cursor: default;"
      : "justify-content: center; flex-direction: column; cursor: pointer;"}
  align-items: center;
  height: 80px;
  border: 1px dashed #adb5bd;
  ${({ isDragReject, error }) =>
    (isDragReject ?? error) && "border: 1px dashed red;"}
  ${({ isDragAccept }) =>
    isDragAccept && "border: 1px dashed rgb(44, 209, 158);"}
  background-color: #f4f7f9;
  border-radius: 5px;
`;

const TextDragZone = styled(Typography)`
  font-size: 13px;
`;

const BlueSpan = styled.span`
  color: #027aff;
  font-weight: 500;
  text-decoration: none;
`;

const Img = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: #f4f7f9;
  object-fit: contain;
  margin-right: 15px;
`;

const ImageInformation = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const FileName = styled(Typography)`
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  background-color: transparent;
  color: #616161;
  margin-right: 10px;
  :hover {
    text-decoration: underline;
  }
`;

const FileIcon = styled(File)`
  margin: 0 20px 0 15px;
  scale: 3;
`;

export const DropZone: FC<DropZoneProps> = ({
  setFile,
  fileType = DropZoneFileTypes.ONLY_IMGS,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const acceptableFormats: Accept | undefined =
    fileType === DropZoneFileTypes.ONLY_CSV
      ? { "text/csv": [".csv"] }
      : fileType === DropZoneFileTypes.FOR_PAYMENT_ATTACHMENTS
      ? {
          "application/pdf": [".pdf"],
          "application/msword": [".doc"],
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            [".docx"],
          "application/vnd.ms-excel": [".xls"],
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
            ".xlsx",
          ],
          "application/rtf": [".rtf"],
          "text/csv": [".csv"],
          "text/plain": [".txt"],
          "image/jpg": [],
          "image/jpeg": [],
          "image/png": [],
          "image/JPG": [],
          "image/JPEG": [],
          "image/PNG": [],
          "image/gif": [],
          "image/GIF": [],
        }
      : fileType === DropZoneFileTypes.ONLY_IMGS
      ? {
          "image/jpg": [],
          "image/jpeg": [],
          "image/png": [],
          "image/JPG": [],
          "image/JPEG": [],
          "image/PNG": [],
          "image/gif": [],
          "image/GIF": [],
        }
      : undefined;

  const onResetClick = useCallback(() => {
    setFile(undefined);
    setSelectedFile(undefined);
  }, []);
  const onDrop = useCallback(async (acceptedFile: Array<File | undefined>) => {
    setFile(acceptedFile[0]);
    setSelectedFile(acceptedFile[0]);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
    fileRejections,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: acceptableFormats,
  });

  return (
    <div>
      {isDragReject || fileRejections.length ? (
        <DropZoneWrapper isDragReject {...getRootProps()}>
          <input {...getInputProps()} />
          <CloudUpload />
          <TextDragZone>
            {fileType === DropZoneFileTypes.ONLY_CSV
              ? "Only .csv files are accepted"
              : fileType === DropZoneFileTypes.ONLY_IMGS
              ? "Only .jpg, .jpeg, .gif and .png files are accepted"
              : fileType === DropZoneFileTypes.FOR_PAYMENT_ATTACHMENTS &&
                "Only the following formats are accepted: .pdf, .png, .gif, .jpg, .doc/docx, .xls/xlsx, .csv, .rtf, .txt"}
          </TextDragZone>
        </DropZoneWrapper>
      ) : isDragAccept ? (
        <DropZoneWrapper isDragAccept {...getRootProps()}>
          <input {...getInputProps()} />
          <CloudUpload />
          <TextDragZone variant={TypographyVariant.BODY2}>
            Drag files here or <BlueSpan>click to upload</BlueSpan>
          </TextDragZone>
        </DropZoneWrapper>
      ) : selectedFile ? (
        <DropZoneWrapper selectedFile>
          <ImageInformation>
            {fileType === DropZoneFileTypes.ONLY_CSV ? (
              <Csv />
            ) : fileType === DropZoneFileTypes.FOR_PAYMENT_ATTACHMENTS ? (
              <FileIcon />
            ) : (
              fileType === DropZoneFileTypes.ONLY_IMGS && (
                <Img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected file"
                />
              )
            )}
            <div>
              <FileName variant={TypographyVariant.BODY2} color="#757575">
                {selectedFile.name}
              </FileName>
              <Typography variant={TypographyVariant.BODY3} color="#757575">
                {selectedFile.size}
              </Typography>
            </div>
          </ImageInformation>
          <Button onClick={onResetClick}>Remove</Button>
        </DropZoneWrapper>
      ) : (
        <DropZoneWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          <CloudUpload />
          <TextDragZone variant={TypographyVariant.BODY2}>
            Drag files here or <BlueSpan>click to upload</BlueSpan>
          </TextDragZone>
        </DropZoneWrapper>
      )}
    </div>
  );
};
