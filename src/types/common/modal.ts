export interface Modal {
  isOpen: boolean;
  title?: string;
  content: React.ReactNode;
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  mode?: "center" | "bottom";
}
