import React, { type ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import { type SingleImageInputProps } from "./SingleImageInput.interface";
import { Cloud, RedBin } from "../../icons";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const FieldLabel = styled.label`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  padding-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Box = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f4f5f9;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border: 1px dashed #adb5bd;
  border-radius: 5px;
`;

const ImgWrapper = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  cursor: pointer;
  :hover {
    img {
      opacity: 0.3;
    }
    span {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  border-radius: 5px;
  opacity: 1;
  display: block;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  backface-visibility: hidden;
  object-fit: contain;
`;

const RemoveIconWrapper = styled.span`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(19, 39, 63, 0.752);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const RemoveIcon = styled(RedBin)``;

const ButtonWrapper = styled.div``;

export const SingleImageInput: React.FunctionComponent<
  SingleImageInputProps
> = ({ label, required, handleFile, buttonWidth, buttonHeight, value }) => {
  const { fileValue, urlValue } = value;
  const [file, setFile] = useState<File | null>(fileValue);
  const [urlFile, setUrlFile] = useState<string | undefined>(urlValue);

  useEffect(() => {
    setFile(fileValue);
    setUrlFile(urlValue);
  }, [fileValue, urlValue]);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  };

  const removeFile = () => {
    if (file ?? urlFile) {
      setFile(null);
      handleFile(null);
      setUrlFile(undefined);
    }
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null && event.target.files.length > 0) {
      const fileUploaded: File = event.target.files[0];
      setFile(fileUploaded);
      handleFile(fileUploaded);
    }
  };
  return (
    <>
      <Container>
        {label && (
          <FieldLabel>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </FieldLabel>
        )}

        <InputWrapper>
          <ButtonWrapper>
            {!file && !urlFile ? (
              <Box
                width={buttonWidth}
                height={buttonHeight}
                onClick={handleClick}
              >
                <Cloud />
              </Box>
            ) : (
              <ImgWrapper
                width={buttonWidth}
                height={buttonHeight}
                onClick={removeFile}
              >
                <Img
                  src={file ? URL.createObjectURL(file) : (urlFile as string)}
                />
                <RemoveIconWrapper>
                  <RemoveIcon />
                </RemoveIconWrapper>
              </ImgWrapper>
            )}
          </ButtonWrapper>

          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </InputWrapper>
      </Container>
    </>
  );
};
