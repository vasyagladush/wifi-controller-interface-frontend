// import { ImageAttachmentApiType } from "../../../util/types";

export interface IImageUploaderProps {
  value?: { filesValue?: File[]; bucketUrlsValue?: any[] };
  onChange?: (fileArray: File[], imagesToDetach?: string[]) => void;
}
