import { FC, useCallback, useEffect, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import styled from "styled-components";
import { CloudUpload, Delete, File, ImageAddIcon } from "../../icons";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { DropZoneCustomisationProps } from "./DropZoneCustomisation.interface";

const Wrapper = styled.div<{ disabled?: boolean }>`
  width: 100%;
  ${({ disabled }) =>
    disabled && "pointer-events: none; div {background-color: #f4f5f9;}"}
`;

const DropZoneWrapper = styled.div<{
  isDragReject?: boolean;
  isDragAccept?: boolean;
  error?: boolean;
  selectedFile?: boolean;
}>`
  display: flex;
  align-items: center;
  min-height: 118px;
  max-height: 118px;
  border: 1px dashed #adb5bd;
  border-radius: 5px;
  background-color: #fbfcfd;
  transition: 0.5s ease;
  cursor: pointer;
  ${({ selectedFile }) =>
    selectedFile
      ? "justify-content: center; border: 1px solid #eee; :hover{background-color: rgba(19, 39, 63, 0.5); img{opacity: 0.3;} svg {display: inline;}"
      : "justify-content: center; flex-direction: column; "}

  /* box-sizing: border-box; */

  ${({ isDragReject, error }) =>
    (isDragReject ?? error) && "border: 1px dashed red;"}
  ${({ isDragAccept }) =>
    isDragAccept && "border: 1px dashed rgb(44, 209, 158);"}
  position: relative;
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
  object-fit: contain;
  max-height: 118px;
`;

const Button = styled(Delete)`
  position: absolute;
  top: 10px;
  right: 10px;
  fill: #f8f9fa;
`;

const ImageAddIconBtn = styled(ImageAddIcon)`
  display: none;
  position: absolute;
  top: calc(50% - 36px / 2);
  left: calc(50% - 36px / 2);
  color: #f8f9fa;
`;

export const DropZoneCustomisation: FC<DropZoneCustomisationProps> = ({
  setFile,
  existingFileUrl,
  uploadedFileState,
  onRemoveExistingFileUrl,
  disabled,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File>();

  useEffect(() => {
    !uploadedFileState && setUploadedFile(undefined);
  }, [uploadedFileState]);

  const acceptableFormats: Accept = {
    "image/jpg": [],
    "image/jpeg": [],
    "image/png": [],
    "image/JPG": [],
    "image/JPEG": [],
    "image/PNG": [],
    "image/gif": [],
    "image/GIF": [],
  };

  const onResetClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setFile(undefined);
    setUploadedFile(undefined);
  };

  const onRemoveExistingFile = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    onRemoveExistingFileUrl(undefined);
  };

  const onDrop = useCallback(async (acceptedFile: Array<File | undefined>) => {
    setFile(acceptedFile[0]);
    setUploadedFile(acceptedFile[0]);
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
    <Wrapper disabled={disabled}>
      {isDragReject || fileRejections.length ? (
        <DropZoneWrapper isDragReject {...getRootProps()}>
          <input {...getInputProps()} />
          <CloudUpload />
          <TextDragZone color="#8181A5">
            Only .jpg, .jpeg, .gif and .png files are accepted
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
      ) : uploadedFile ? (
        <DropZoneWrapper selectedFile {...getRootProps()}>
          <input {...getInputProps()} />
          <Img src={URL.createObjectURL(uploadedFile)} alt="Selected file" />
          <ImageAddIconBtn />
          <Button onClick={onResetClick}>Remove</Button>
        </DropZoneWrapper>
      ) : existingFileUrl ? (
        <DropZoneWrapper selectedFile {...getRootProps()}>
          <input {...getInputProps()} />
          <Img src={existingFileUrl} alt="Selected file" />
          <ImageAddIconBtn />
          <Button onClick={onRemoveExistingFile}>Remove</Button>
        </DropZoneWrapper>
      ) : (
        <DropZoneWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          <CloudUpload />
          <TextDragZone variant={TypographyVariant.BODY2} color="#8181A5">
            300x80px
          </TextDragZone>
          <TextDragZone variant={TypographyVariant.BODY2} color="#8181A5">
            PNG, GIF, JPG, jPEG
          </TextDragZone>
        </DropZoneWrapper>
      )}
    </Wrapper>
  );
};
