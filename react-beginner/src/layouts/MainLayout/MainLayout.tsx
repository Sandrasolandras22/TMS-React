import * as React from 'react';

import { Outlet } from 'react-router-dom';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { SidePanel } from 'components/SidePanel/SidePanel';
import {
  ContentContainer,
  PageContainer
} from 'layouts/MainLayout/layout.styled';

export function MainLayout() {
  const [isSidePanelOpen, setSidePanelState] = React.useState(false);

  const toggleSidePanel = React.useCallback(
    () => setSidePanelState((prev) => !prev),
    []
  );
  return (
    <PageContainer>
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        onClickOutside={toggleSidePanel}
      />
      <Header
        isSidePanelOpen={isSidePanelOpen}
        toggleSidePanel={toggleSidePanel}
      />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
