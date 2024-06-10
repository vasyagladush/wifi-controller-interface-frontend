import React, { useState, KeyboardEvent, FC } from "react";
import { Tag } from "../tags/Tag";
import styled from "styled-components";
import { Typography } from "..";
import { TypographyVariant } from "../typography/Typography.interface";
import { ITagInput } from "./TagInput.interface";

const CustomInput = styled.input`
  display: flex;
  width: 100%;
  height: 33px;
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 250;
  color: #556CB1;
  margin-bottom: 10px;
`;
const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
`;
export const TagInput: FC<ITagInput> = () => {
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value, e.key);
    if (e.key === "Enter") {
      if (e.currentTarget.value.length > 0) {
        setTags([...tags, e.currentTarget.value]);
        e.currentTarget.value = "";
      }
    }
  };

  const removeTag = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  return (
    <>
      <Typography
        variant={TypographyVariant.HEADER3}
        style={{ color: "#556CB1", marginBottom: 10, marginTop: 10 }}
      >
        Tags
      </Typography>
      <CustomInput onKeyDown={addTag} />
      <TagBox>
        {tags.map((tag, index) => {
          return (
            <Tag
              onClick={() => {
                removeTag(tag);
              }}
              text={tag}
              key={index}
            />
          );
        })}
      </TagBox>
    </>
  );
};
