export enum DropZoneFileTypes {
  ONLY_CSV = "only_csv",
  ONLY_IMGS = "only_imgs",
  FOR_PAYMENT_ATTACHMENTS = "for_payments_attachments",
  // Expand if needed
}

export interface DropZoneProps {
  setFile: (file?: File) => void;
  fileType?: DropZoneFileTypes;
}
