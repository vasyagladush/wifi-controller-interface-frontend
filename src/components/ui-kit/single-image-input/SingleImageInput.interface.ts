export interface SingleImageInputProps {
  label?: string;
  required?: boolean;
  handleFile: (file: File | null) => void;
  buttonWidth: number;
  buttonHeight: number;
  value: { fileValue: File | null; urlValue?: string | undefined };
}
