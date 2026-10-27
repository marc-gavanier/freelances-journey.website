'use client';

import Link from 'next/link';
import { FormEvent, ReactElement, useState } from 'react';

const WEB3FORMS_ACCESS_KEY = '31a2c316-20f9-4cd4-8b7b-ed903a60af3d';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage = (): ReactElement => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className='bg-light min-vh-100'>
      <div className='container py-5'>
        <nav className='mb-4'>
          <Link href='/' className='text-decoration-none'>
            &larr; Retour &agrave; l&apos;accueil
          </Link>
        </nav>
        <article className='bg-white p-5 rounded shadow-sm'>
          <h1 className='mb-3'>Contactez-nous</h1>
          <p className='text-muted mb-4'>
            Vous souhaitez devenir sponsor, proposer un partenariat, faire part d&apos;un besoin en freelances ou simplement
            nous poser une question&nbsp;?
            <br />
            Remplissez ce formulaire, l&apos;&eacute;quipe de Freelances Journey vous r&eacute;pondra dans les plus brefs
            d&eacute;lais.
          </p>

          {status === 'success' ? (
            <div className='alert alert-success' role='alert'>
              Merci pour votre message&nbsp;! Nous avons bien re&ccedil;u votre demande et nous reviendrons vers vous dans les
              plus brefs d&eacute;lais.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type='hidden' name='subject' value='Nouveau message - Freelances Journey' />

              <div className='mb-3'>
                <label htmlFor='company' className='form-label'>
                  Nom / structure <span className='text-danger'>*</span>
                </label>
                <input type='text' className='form-control' id='company' name='company' required />
              </div>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Votre email <span className='text-danger'>*</span>
                </label>
                <input type='email' className='form-control' id='email' name='email' required />
              </div>

              <div className='mb-3'>
                <label htmlFor='phone' className='form-label'>
                  T&eacute;l&eacute;phone
                </label>
                <input type='tel' className='form-control' id='phone' name='phone' />
              </div>

              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>
                  Votre message <span className='text-danger'>*</span>
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  rows={5}
                  required
                  placeholder='Sponsoring, partenariat, besoin en freelances, question...'
                />
              </div>

              {status === 'error' && (
                <div className='alert alert-danger mb-3' role='alert'>
                  Une erreur est survenue lors de l&apos;envoi du formulaire. Veuillez r&eacute;essayer plus tard.
                </div>
              )}

              <button type='submit' className='btn btn-primary' disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          )}
        </article>
      </div>
    </div>
  );
};

export default ContactPage;
