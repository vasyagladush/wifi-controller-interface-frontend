import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { AvatarUploaderProps } from "./AvatarUploader.interface";
import styled from "styled-components";
import { UploadPictureButton } from "../button";
import { CrossGrey, EmptyAvatar } from "../../icons";

const Container = styled.div`
  position: relative;
  width: 107px;
  height: 100px;
`;

const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
`;

const EmptyFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #dbe3eb;
`;

const UploadAvatarButton = styled(UploadPictureButton)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const Img = styled.img`
  border-radius: 50%;
  opacity: 1;
  display: block;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  backface-visibility: hidden;
  object-fit: cover;
`;

const CrossGreyButton = styled(CrossGrey)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  scale: 0.7;
`;

export const AvatarUploader: FC<AvatarUploaderProps> = ({
  value,
  handleFile,
  disabled,
}) => {
  const { fileValue, urlValue } = value;
  const [file, setFile] = useState<File | null>(fileValue);
  const [urlFile, setUrlFile] = useState<string | undefined>(urlValue);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // Handlers
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  };

  const handleRemoveFile = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    setFile(null);
    handleFile(null, undefined);
    setUrlFile(undefined);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null && event.target.files.length > 0) {
      const fileUploaded: File = event.target.files[0];
      setFile(fileUploaded);
      handleFile(fileUploaded);
    }
  };
  // END Handlers

  useEffect(() => {
    setFile(fileValue);
    setUrlFile(urlValue);
  }, [fileValue, urlValue]);

  return (
    <Container>
      {(file ?? urlFile) && !disabled && (
        <CrossGreyButton onClick={handleRemoveFile} />
      )}
      <ImgWrapper>
        {!file && !urlFile ? (
          <EmptyFile>
            <EmptyAvatar />
          </EmptyFile>
        ) : (
          <Img src={file ? URL.createObjectURL(file) : (urlFile as string)} />
        )}
      </ImgWrapper>
      <UploadAvatarButton onClick={handleClick} disabled={disabled} />
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ visibility: "hidden" }}
      />
    </Container>
  );
};
