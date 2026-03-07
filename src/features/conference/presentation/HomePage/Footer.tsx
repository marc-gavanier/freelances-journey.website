'use client';

import Link from 'next/link';
import { ReactElement } from 'react';
import { useTranslation } from '@/features/translation';
import { HomeTranslation } from './home.translation';

export const Footer = (): ReactElement => {
  const { footer: i18n }: HomeTranslation = useTranslation();

  return (
    <footer className='bg-dark text-light py-4'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <nav className='d-flex flex-wrap justify-content-center gap-5'>
              <Link href='/legal-notice' className='text-light text-decoration-none'>
                {i18n.legalNotice}
              </Link>
              <Link href='/terms-of-use' className='text-light text-decoration-none'>
                {i18n.termsOfUse}
              </Link>
              <Link href='/privacy-policy' className='text-light text-decoration-none'>
                {i18n.privacyPolicy}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
