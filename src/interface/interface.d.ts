export interface InputComponentProps {
  title?: string,
  type: string,
  name: string,
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  title: string;
  onClick: () => void;
  type: string,
  disabled?: boolean;
  size?: string,
  className?: string
  // Add other button-related props as needed
}

export interface NavigationTabProps {
  title: string, 
  icon: string,
  tabActive?: boolean,
  onClick: (string) => void
}

interface FormData {
  alertName: string;
  exchange: string;
  multiPairCheck: boolean;
  pair: string[];
  trigger: string;
  date: Date | null;
  neverExpires: boolean;
  receiveEmailNotification: boolean;
  receiveTelegramNotification: boolean;
}
