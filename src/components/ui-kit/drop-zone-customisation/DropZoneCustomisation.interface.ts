export interface DropZoneCustomisationProps {
  setFile: (file?: File) => void;
  existingFileUrl?: string;
  uploadedFileState?: File;
  onRemoveExistingFileUrl: (val?: string) => void;
  disabled?: boolean;
}
