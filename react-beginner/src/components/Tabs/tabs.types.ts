export interface Tab {
  id: string;
  value: string;
  isDisabled?: boolean;
}

export interface TabsProps {
  activeTab: string;
  tabs: Tab[];
  onTabItemClick: (tab: Tab) => void;
}

export interface TabItemProps {
  isActive: boolean;
  isDisabled?: boolean;
}
