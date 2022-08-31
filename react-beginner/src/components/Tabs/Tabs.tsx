import { TabItem, TabsContainer } from 'components/Tabs/tabs.styled';
import { TabsProps } from 'components/Tabs/tabs.types';

export function Tabs({ activeTab, tabs, onTabItemClick }: TabsProps) {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          onClick={!tab.isDisabled ? () => onTabItemClick(tab) : undefined}
          isActive={activeTab === tab.id}
          isDisabled={tab.isDisabled}
        >
          {tab.value}
        </TabItem>
      ))}
    </TabsContainer>
  );
}
