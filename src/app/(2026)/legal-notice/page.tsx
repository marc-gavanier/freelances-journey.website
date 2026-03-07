/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Mentions légales - Freelances Journey',
  description: 'Mentions légales du site Freelances Journey'
};

const LegalNotice = (): ReactElement => (
  <div className='bg-light min-vh-100'>
    <div className='container py-5'>
      <nav className='mb-4'>
        <Link href='/' className='text-decoration-none'>
          &larr; Retour à l'accueil
        </Link>
      </nav>
      <article className='bg-white p-5 rounded shadow-sm'>
        <h1 className='mb-5'>Mentions légales</h1>

        <section className='mb-5'>
          <h2>Identification de l'éditeur et du responsable de publication</h2>
          <p>
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), le site{' '}
            <strong>freelances-journey.com</strong> est édité par&nbsp;:
          </p>
          <ul>
            <li>
              <strong>Raison sociale&nbsp;:</strong> Gavanier Ingénierie Logicielle, EURL
            </li>
            <li>
              <strong>Capital social&nbsp;:</strong> 5 000 €
            </li>
            <li>
              <strong>Adresse du siège social&nbsp;:</strong> 229 rue Saint-Honoré, 75001 Paris, France
            </li>
            <li>
              <strong>RCS&nbsp;:</strong> Paris n°910 040 591
            </li>
            <li>
              <strong>Directeur de la publication&nbsp;:</strong> Marc Gavanier, en qualité de gérant
            </li>
            <li>
              <strong>Adresse électronique&nbsp;:</strong>{' '}
              <a href='mailto:ingenierie-logicielle@gavanier.com'>ingenierie-logicielle@gavanier.com</a>
            </li>
            <li>
              <strong>Téléphone&nbsp;:</strong> <a href='tel:+33651831221'>+33 6 51 83 12 21</a>
            </li>
          </ul>
        </section>

        <section className='mb-5'>
          <h2>Hébergeur du site</h2>
          <p>
            Le site <strong>freelances-journey.com</strong> est hébergé par&nbsp;:
          </p>
          <ul>
            <li>
              <strong>Nom légal&nbsp;:</strong> GitHub, Inc.
            </li>
            <li>
              <strong>Adresse&nbsp;:</strong> 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA
            </li>
            <li>
              <strong>Support&nbsp;:</strong>{' '}
              <a href='https://support.github.com' target='_blank' rel='noreferrer'>
                https://support.github.com
              </a>
            </li>
          </ul>
          <p>
            L'Éditeur ne peut être tenu responsable du contenu, de la disponibilité ou du fonctionnement des services de
            l'hébergeur.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Droit à l'image et crédits photographiques</h2>
          <p>
            Les photographies des conférenciers, organisateurs et participants publiées sur le site{' '}
            <strong>freelances-journey.com</strong> sont diffusées avec le consentement préalable des personnes concernées,
            conformément à l'article 9 du Code civil et au Règlement Général sur la Protection des Données (RGPD).
          </p>
          <p>
            Toute personne figurant sur une photographie publiée sur le site peut exercer son droit de retrait à tout moment en
            contactant l'Éditeur à l'adresse suivante&nbsp;:{' '}
            <a href='mailto:ingenierie-logicielle@gavanier.com'>ingenierie-logicielle@gavanier.com</a>.
          </p>
          <p>
            L'Éditeur s'engage à retirer toute photographie dans les meilleurs délais à compter de la réception de la demande.
          </p>
        </section>
      </article>
    </div>
  </div>
);

export default LegalNotice;
