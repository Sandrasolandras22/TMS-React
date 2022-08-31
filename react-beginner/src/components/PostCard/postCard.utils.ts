import { format, parseISO } from 'date-fns';

export const getFormattedDate = (date: string): string =>
  format(parseISO(date), 'MMMM d, yyyy');
