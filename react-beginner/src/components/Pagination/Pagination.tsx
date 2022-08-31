import * as React from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';

import { Button } from 'components/Button/Button';
import { ButtonAppearance } from 'components/Button/button.types';
import {
  PagesContainer,
  PaginationContainer
} from 'components/Pagination/pagination.styled';
import { getSections } from 'components/Pagination/pagination.utils';

export function Pagination({
  totalPages,
  currentPage,
  setCurrentPage
}: {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}) {
  const sections = getSections(currentPage, totalPages);
  return (
    <PaginationContainer>
      <Button
        appearance={ButtonAppearance.Secondary}
        iconBefore={faArrowLeft}
        text="Prev"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      <PagesContainer>
        {sections.start.map((page) => (
          <Button
            key={page}
            appearance={ButtonAppearance.Secondary}
            text={page}
            disabled={page === currentPage}
            onClick={() => setCurrentPage(page)}
          />
        ))}
        {sections.hasDelimiter && (
          <Button
            appearance={ButtonAppearance.Secondary}
            iconBefore={faEllipsis}
          />
        )}
        {sections.end &&
          sections.end.map((page) => (
            <Button
              key={page}
              appearance={ButtonAppearance.Secondary}
              text={page}
              onClick={() => setCurrentPage(page)}
              disabled={page === currentPage}
            />
          ))}
      </PagesContainer>
      <Button
        appearance={ButtonAppearance.Secondary}
        iconAfter={faArrowRight}
        text="Next"
        disabled={currentPage >= totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </PaginationContainer>
  );
}
