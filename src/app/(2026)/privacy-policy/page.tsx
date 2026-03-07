/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Freelances Journey',
  description: 'Politique de confidentialité du site Freelances Journey'
};

const PrivacyPolicy = (): ReactElement => (
  <div className='bg-light min-vh-100'>
    <div className='container py-5'>
      <nav className='mb-4'>
        <Link href='/' className='text-decoration-none'>
          &larr; Retour à l'accueil
        </Link>
      </nav>
      <article className='bg-white p-5 rounded shadow-sm'>
        <h1 className='mb-4'>Politique de confidentialité</h1>
        <p className='text-muted mb-5'>
          <em>Dernière mise à jour&nbsp;: 7 mars 2026</em>
        </p>

        <section className='mb-5'>
          <h2>Introduction et objet</h2>
          <p>
            La présente Politique de confidentialité a pour objet d'informer les utilisateurs du site{' '}
            <strong>freelances-journey.com</strong> sur la collecte et le traitement des données à caractère personnel.
          </p>
          <p>
            Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés n°78‑17 modifiée, l'Éditeur
            veille à ce que les données personnelles des utilisateurs soient traitées de manière loyale, transparente et
            sécurisée.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Données collectées</h2>
          <p>
            Le site <strong>freelances-journey.com</strong> ne collecte directement aucune donnée personnelle des utilisateurs.
          </p>
          <p>
            L'inscription à l'événement Freelances Journey s'effectue via une plateforme tierce de billetterie. Les données
            personnelles collectées lors de l'inscription (nom, adresse électronique, etc.) sont traitées par cette plateforme
            conformément à sa propre politique de confidentialité.
          </p>
          <p>
            L'Éditeur invite les utilisateurs à consulter la politique de confidentialité de la plateforme de billetterie avant
            de procéder à leur inscription.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Partage des informations avec l'organisateur</h2>
          <p>
            Lors de l'inscription via la plateforme de billetterie, le participant peut choisir de cocher une case intitulée{' '}
            <em>« Partager mes informations avec l'hôte de l'événement »</em> (ou formulation similaire).
          </p>
          <p>
            En cochant cette case, le participant autorise l'Éditeur à collecter et utiliser ses informations personnelles (nom,
            adresse électronique) aux fins suivantes&nbsp;:
          </p>
          <ul>
            <li>L'informer des prochaines éditions de Freelances Journey</li>
            <li>Lui transmettre des informations relatives à l'événement</li>
          </ul>
          <p>
            <strong>Droit de retrait&nbsp;:</strong> Le participant peut à tout moment demander à ne plus recevoir ces
            communications en contactant l'Éditeur à l'adresse{' '}
            <a href='mailto:ingenierie-logicielle@gavanier.com'>ingenierie-logicielle@gavanier.com</a>. L'Éditeur s'engage à
            retirer le participant de sa liste de diffusion dans les meilleurs délais.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Partage des informations avec les partenaires</h2>
          <p>
            Lors de l'inscription, le participant peut également choisir de cocher une case intitulée{' '}
            <em>« Partager mes informations avec les partenaires de l'événement »</em> (ou formulation similaire).
          </p>
          <p>
            En cochant cette case, le participant autorise l'Éditeur à transmettre ses informations personnelles (nom, adresse
            électronique) aux sponsors et partenaires officiels de Freelances Journey. Ces partenaires peuvent utiliser ces
            données pour&nbsp;:
          </p>
          <ul>
            <li>Présenter leurs services aux participants</li>
            <li>Proposer des offres en lien avec l'événement ou l'activité de freelance</li>
          </ul>
          <p>
            <strong>Liste des partenaires&nbsp;:</strong> Les partenaires susceptibles de recevoir ces informations sont les
            sponsors officiels de l'événement, dont la liste est disponible sur la page d'accueil du site dans la section «
            Sponsors ».
          </p>
          <p>
            <strong>Droit de retrait&nbsp;:</strong> Le participant peut à tout moment demander à ne plus être contacté par les
            partenaires en s'adressant directement à chaque partenaire concerné, ou en contactant l'Éditeur à l'adresse{' '}
            <a href='mailto:ingenierie-logicielle@gavanier.com'>ingenierie-logicielle@gavanier.com</a> pour obtenir la liste des
            partenaires ayant reçu ses informations.
          </p>
          <p>
            L'Éditeur s'engage à ne transmettre les données des participants qu'aux partenaires ayant signé un engagement de
            confidentialité et de respect du RGPD. Les données ne sont jamais vendues.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Finalité de la collecte</h2>
          <p>
            Le site <strong>freelances-journey.com</strong> ne collectant pas directement de données personnelles, aucune
            finalité de collecte n'est applicable au site lui-même.
          </p>
          <p>
            Les données collectées par la plateforme de billetterie tierce sont utilisées pour la gestion des inscriptions à
            l'événement Freelances Journey.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Cookies et traceurs</h2>
          <p>
            Le site <strong>freelances-journey.com</strong> n'utilise aucun cookie ni traceur à des fins statistiques,
            publicitaires ou de suivi.
          </p>
          <p>
            Seuls des cookies strictement nécessaires au fonctionnement technique du site pourraient être utilisés par le
            prestataire d'hébergement, mais aucune information personnelle n'est collectée ou conservée via ces cookies.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Liens vers des services tiers</h2>
          <p>
            Le site contient des liens vers des services tiers, notamment la plateforme de billetterie pour l'inscription à
            l'événement et les sites des sponsors et partenaires.
          </p>
          <p>
            L'Éditeur n'exerce aucun contrôle sur ces sites tiers et ne saurait être tenu responsable de leurs pratiques en
            matière de collecte et de traitement des données personnelles.
          </p>
          <p>
            Les utilisateurs sont invités à consulter les politiques de confidentialité respectives de ces services avant de
            leur transmettre des informations personnelles.
          </p>
        </section>

        <section className='mb-5'>
          <h2>Service OpenFeedback</h2>
          <p>
            Le site utilise le service <strong>OpenFeedback</strong> pour permettre aux participants de l'événement Freelances
            Journey de donner leur avis sur les conférences et ateliers.
          </p>
          <p>Lors de l'utilisation de ce service, les données suivantes peuvent être collectées par OpenFeedback&nbsp;:</p>
          <ul>
            <li>Les notes et commentaires laissés sur les sessions</li>
            <li>Les données techniques liées à la navigation (adresse IP, navigateur)</li>
          </ul>
          <p>
            OpenFeedback est un service tiers dont les serveurs peuvent être situés en dehors de l'Union européenne. L'Éditeur
            invite les utilisateurs à consulter la{' '}
            <a href='https://openfeedback.io/legal/privacy' target='_blank' rel='noreferrer'>
              politique de confidentialité d'OpenFeedback
            </a>{' '}
            avant d'utiliser ce service.
          </p>
          <p>L'utilisation du service OpenFeedback est facultative et n'est pas requise pour participer à l'événement.</p>
        </section>

        <section className='mb-5'>
          <h2>Droits des utilisateurs</h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, l'utilisateur dispose des droits suivants concernant ses
            données personnelles&nbsp;:
          </p>
          <ul>
            <li>
              <strong>Droit d'accès&nbsp;:</strong> obtenir la confirmation que ses données sont traitées et accéder aux
              informations collectées.
            </li>
            <li>
              <strong>Droit de rectification&nbsp;:</strong> corriger des données inexactes ou incomplètes.
            </li>
            <li>
              <strong>Droit de suppression&nbsp;:</strong> demander l'effacement des données personnelles.
            </li>
            <li>
              <strong>Droit d'opposition&nbsp;:</strong> s'opposer au traitement de ses données dans certaines situations.
            </li>
          </ul>
          <p>
            Pour exercer ces droits, l'utilisateur peut contacter l'Éditeur à l'adresse suivante&nbsp;:{' '}
            <a href='mailto:ingenierie-logicielle@gavanier.com'>ingenierie-logicielle@gavanier.com</a>.
          </p>
          <p>L'Éditeur répondra aux demandes dans les délais légaux prévus par le RGPD.</p>
        </section>

        <section className='mb-5'>
          <h2>Sécurité des données</h2>
          <p>
            L'Éditeur met en œuvre des mesures techniques et organisationnelles appropriées pour protéger le site et ses
            utilisateurs, notamment&nbsp;:
          </p>
          <ul>
            <li>l'utilisation de protocoles sécurisés (HTTPS)</li>
            <li>l'hébergement sur une infrastructure fiable et sécurisée</li>
          </ul>
        </section>

        <section className='mb-5'>
          <h2>Contact pour exercer ses droits</h2>
          <p>
            Pour toute question relative à la protection de vos données personnelles ou pour exercer vos droits (accès,
            rectification, suppression, opposition), vous pouvez contacter directement l'Éditeur à l'adresse suivante&nbsp;:
          </p>
          <p>
            Adresse électronique&nbsp;:{' '}
            <a href='mailto:ingenierie-logicielle@gavanier.com'>ingenierie-logicielle@gavanier.com</a>
          </p>
          <p>L'Éditeur répondra à toute demande dans les délais légaux prévus par le RGPD.</p>
        </section>

        <section className='mb-5'>
          <h2>Mise à jour de la Politique de confidentialité</h2>
          <p>
            L'Éditeur se réserve le droit de modifier à tout moment la présente Politique de confidentialité afin de l'adapter
            aux évolutions du site, des services, de la réglementation ou des recommandations de la CNIL.
          </p>
          <p>
            La date de dernière mise à jour sera précisée en haut de la page, et les utilisateurs sont invités à consulter
            régulièrement la politique pour prendre connaissance des éventuelles modifications.
          </p>
        </section>
      </article>
    </div>
  </div>
);

export default PrivacyPolicy;
