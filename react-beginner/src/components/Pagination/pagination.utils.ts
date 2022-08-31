export const getSections = (currentPage: number, totalPages: number) => {
  if (totalPages <= 5) {
    return {
      start: new Array(totalPages).fill(1).map((_, i) => i + 1),
      hasDelimiter: false,
      end: null
    };
  }
  if (currentPage > totalPages - 5) {
    return {
      start: new Array(5)
        .fill(1)
        .map((_, i) => totalPages - i)
        .reverse(),
      hasDelimiter: false,
      end: null
    };
  }
  return {
    start: new Array(3).fill(1).map((_, i) => currentPage + i),
    hasDelimiter: true,
    end: [totalPages]
  };
};
