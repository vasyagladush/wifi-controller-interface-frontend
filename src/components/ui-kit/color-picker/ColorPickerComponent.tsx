import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TypographyVariant } from "../typography/Typography.interface";
import { Typography } from "../typography/Typography";
import ColorPicker, { ColorObject } from "react-pick-color";
import { Control, UseFormClearErrors, UseFormSetValue } from "react-hook-form";
import { TextFormInput } from "../../form-fields";

const Wrapper = styled.div<{ disabled?: boolean }>`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  ${({ disabled }) =>
    disabled && "pointer-events: none; div{ svg{ display: none; }}"}
`;

const ColorPickerWrapper = styled.div`
  position: absolute;
  left: calc(100% + 10px);
  bottom: 0;
  z-index: 1;
`;

interface ColorPickProps {
  label?: string | JSX.Element;
  currentColor?: string;
  setValue: UseFormSetValue<any>;
  name: string;
  disabled?: boolean;
  control: Control<any>;
  clearErrors: UseFormClearErrors<any>;
}

export const ColorPickerComponent: FC<ColorPickProps> = ({
  label,
  currentColor,
  name,
  disabled,
  control,
  setValue,
  clearErrors,
}) => {
  const [color, setColor] = useState(currentColor ?? "");
  const [pickerIsOpen, setPickerIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const rgbaConverter = (color: ColorObject) => {
    let r = color.rgb.r.toString(16);
    let g = color.rgb.g.toString(16);
    let b = color.rgb.b.toString(16);
    let a = Math.round(color.rgb.a * 255).toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;
    if (a.length === 1) a = "0" + a;

    return "#" + r + g + b + a;
  };

  // Handlers
  const onColorChange = (color: ColorObject) => {
    setColor(rgbaConverter(color));
    setValue(name, rgbaConverter(color));
  };

  const onRowClick = () => {
    setPickerIsOpen(true);
  };

  const onCrossClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setColor("");
    setValue(name, "");
    clearErrors(name);
  };
  // END Handlers

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      event.stopPropagation();
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setPickerIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setColor(currentColor ?? "");
  }, [currentColor]);

  return (
    <Wrapper ref={wrapperRef} disabled={disabled} onClick={onRowClick}>
      {typeof label === "string" ? (
        <Typography variant={TypographyVariant.HEADER3}>{label}</Typography>
      ) : (
        label
      )}
      <TextFormInput
        control={control}
        name={name}
        onBlur={() => {
          if (color.length > 2 && !color.includes("#")) {
            setValue(name, "#" + color);
          }
        }}
        disabled={disabled}
        colorInput
        clearColorInput={onCrossClick}
      />
      {pickerIsOpen && (
        <ColorPickerWrapper>
          <ColorPicker color={color} onChange={onColorChange} />
        </ColorPickerWrapper>
      )}
    </Wrapper>
  );
};
