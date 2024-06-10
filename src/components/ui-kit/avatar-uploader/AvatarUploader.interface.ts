export interface AvatarUploaderProps {
  handleFile: (file: File | null, avatarUrl?: string) => void;
  value: { fileValue: File | null; urlValue?: string };
  disabled?: boolean;
}
