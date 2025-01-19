import { ReactElement, ReactNode } from 'react';
import { LANGUAGE_SETTINGS } from '@/features/language';
import { availableTranslations } from './AvailableTranslations';
import { Translation } from './Translation';

/* eslint-disable react/display-name */
export const Translate =
  <T extends object>(WrappedComponent: (props: T) => ReactNode, page: string) =>
  async (props: T): Promise<ReactElement> => (
    <Translation translation={await availableTranslations(page)[LANGUAGE_SETTINGS.defaultLanguage]!()} page={page}>
      <WrappedComponent {...props}></WrappedComponent>
    </Translation>
  );
