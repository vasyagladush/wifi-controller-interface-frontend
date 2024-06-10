import React, {
  type ChangeEvent,
  type FC,
  type SyntheticEvent,
  useState,
  useEffect,
} from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { type IImageUploaderProps } from "./ImageUploader.interface";
// import { convertBytesToHumanReadable } from "../../../util/file-utils";
import { Delete } from "../../icons";
// import { ImageAttachmentApiType } from "../../../util/types";

const ContainerBox = styled.div`
  /* display: flex; */
  /* width: 730px; */
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin-top: 20px;
`;

const ThumbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Thumb = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  margin-right: 24px;
  position: relative;
`;

const ImgCover = styled.div`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
`;

const AddImageButton = styled.div`
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  background-color: #dbe3eb;
  cursor: pointer;
`;

const Filename = styled.div`
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 500;
  color: #2a3b89;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 7px 0;
`;

const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 22px;
  background-color: #dbe3eb;
  border-radius: 5px;
  font-size: 12px;
  color: #495b6c;
  margin-bottom: 4px;
`;

const Plus = styled.div`
  font-size: 50px;
  color: #495b6c;
  font-weight: 600;
`;

const StyledDelete = styled(Delete)`
  z-index: 9;
  cursor: pointer;
  position: absolute;
  fill: #ef6355;
`;

export const ImageUploader: FC<IImageUploaderProps> = ({ onChange, value }) => {
  const [combinedArray, setCombinedArray] = useState([
    ...(value?.bucketUrlsValue ?? []),
    ...(value?.filesValue ?? []),
  ]);

  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [imagesToDetach, setImagesToDetach] = useState<string[]>([]);

  const [imageDimensions, setImageDimensions] = useState<string[]>([]);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [dropzoneShown, setDropzoneShown] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  useEffect(() => {
    setCombinedArray([
      ...(value?.bucketUrlsValue ?? []),
      ...(value?.filesValue ?? []),
    ]);
    setImagesToDetach([]);
  }, [value?.bucketUrlsValue]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 10,
    onDrop: (acceptedFiles) => {
      const result = [...combinedArray, ...acceptedFiles];

      const fileArray: File[] = [];
      result.forEach((item) => {
        if (item instanceof File) {
          fileArray.push(item);
        }
      });

      setCombinedArray(result);
      setImageURLs(fileArray.map((f) => URL.createObjectURL(f)));

      onChange?.(fileArray, imagesToDetach);
      setDropzoneShown(false);
    },
    onDragEnter: () => {
      setDropzoneShown(true);
    },
    onDragLeave: () => {
      setDropzoneShown(false);
    },
  });

  const onAddImageClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  };

  const onFileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null && event.target.files.length > 0) {
      const fileArray = Array.from(event.target.files);
      const buffer = [...combinedArray, ...fileArray];
      if (buffer.length > 10) alert("Too many files selected");

      const resultArray: File[] = [];
      buffer.forEach((item) => {
        if (item instanceof File) {
          resultArray.push(item);
        }
      });

      const urlList = resultArray.map((f) => URL.createObjectURL(f));
      setImageURLs(urlList);

      setCombinedArray(buffer);
      onChange?.(resultArray, imagesToDetach);
    }
  };

  const onDimensionsUpdate =
    (index: number, url?: string) =>
    (event: SyntheticEvent<HTMLImageElement>) => {
      const updated = [...imageDimensions];
      updated[
        index
      ] = `${event.currentTarget.naturalWidth}x${event.currentTarget.naturalHeight}`;
      setImageDimensions(updated);
    };

  const onHoverImage = (index: number) => () => {
    setHoverIndex(index);
  };

  const onHoverStop = () => {
    setHoverIndex(null);
  };

  const onImageRemove = (index: number) => () => {
    const copyFiles = [...combinedArray];
    const copyDimensions = [...imageDimensions];
    const copyUrls = [...imageURLs];
    copyFiles.splice(index, 1);
    copyDimensions.splice(index, 1);

    const resultArray: File[] = [];
    copyFiles.forEach((item) => {
      if (item instanceof File) {
        resultArray.push(item);
      }
    });

    copyUrls.splice(
      index -
        (value?.bucketUrlsValue
          ? value.bucketUrlsValue.length - imagesToDetach.length
          : 0),
      1
    );
    setImageURLs(copyUrls);
    setCombinedArray(copyFiles);
    setImageDimensions(copyDimensions);

    onChange?.(resultArray, imagesToDetach);
  };

  const onEditingImageRemove = (index: number) => {
    const copyFiles = [...combinedArray];
    const copyImagesToDetach = [
      ...imagesToDetach,
      (copyFiles[index] as any)._id,
    ];
    setImagesToDetach(copyImagesToDetach);
    const copyDimensions = [...imageDimensions];
    copyFiles.splice(index, 1);
    copyDimensions.splice(index, 1);
    setCombinedArray(copyFiles);
    setImageDimensions(copyDimensions);

    const resultArray: File[] = [];
    copyFiles.forEach((item) => {
      if (item instanceof File) {
        resultArray.push(item);
      }
    });
    onChange?.(resultArray, copyImagesToDetach);
  };

  useEffect(() => {
    return () => {
      imageURLs.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [combinedArray]);

  return (
    <ContainerBox key="wrapper" {...getRootProps()}>
      {!dropzoneShown ? (
        <ThumbContainer
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
        >
          {combinedArray.map((img, index) => {
            if (img instanceof File) {
              return (
                <React.Fragment key={img.name}>
                  <Thumb
                    onMouseEnter={onHoverImage(index)}
                    onMouseLeave={onHoverStop}
                  >
                    <Img
                      src={
                        imageURLs[
                          index -
                            (value?.bucketUrlsValue
                              ? value.bucketUrlsValue.length -
                                imagesToDetach.length
                              : 0)
                        ]
                      }
                      onLoad={onDimensionsUpdate(index)}
                    />
                    {hoverIndex === index && (
                      <ImgCover
                        onClick={(event: React.MouseEvent) => {
                          event.stopPropagation();
                        }}
                      >
                        <StyledDelete
                          height={22}
                          width={22}
                          onClick={onImageRemove(index)}
                        />
                      </ImgCover>
                    )}
                    <Filename key={img.name}>{img.name}</Filename>
                    <Pill>{img.size}</Pill>
                    <Pill>{imageDimensions[index]}</Pill>
                  </Thumb>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={img._id}>
                  <Thumb
                    onMouseEnter={onHoverImage(index)}
                    onMouseLeave={onHoverStop}
                  >
                    <Img src={img.url} onLoad={onDimensionsUpdate(index)} />
                    {hoverIndex === index && (
                      <ImgCover
                        onClick={(event: React.MouseEvent) => {
                          event.stopPropagation();
                        }}
                      >
                        <StyledDelete
                          height={22}
                          width={22}
                          onClick={() => {
                            onEditingImageRemove(index);
                          }}
                        />
                      </ImgCover>
                    )}
                  </Thumb>
                </React.Fragment>
              );
            }
          })}
          {combinedArray.length < 10 && (
            <AddImageButton onClick={onAddImageClick}>
              <Plus>+</Plus>
            </AddImageButton>
          )}
        </ThumbContainer>
      ) : (
        <Container key="inputContainer" {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="dropzone-content">Release to drop the images here</p>
        </Container>
      )}
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={hiddenFileInput}
        onChange={onFileInputChange}
        style={{ display: "none" }}
        multiple
      />
    </ContainerBox>
  );
};
