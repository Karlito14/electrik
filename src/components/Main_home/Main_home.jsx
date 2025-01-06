import { AssetList } from '../AssetList/AssetList';
import { Form } from '@components/Form/Form';
import style from './style.module.scss';

export const Main_home = () => {
  return (
    <main className={style.main} id='prestations'>
      <section className={style.section}>
        <h2 className={style.title}>
          Pour une installation, une remise aux normes ou un dépannage en
          électricité générale
        </h2>
        <p className={style.text}>
          Faites appel à <span>Electrik</span> pour votre devis d’électricité :
          Nous sommes expert dans le domaine de l’électricité domestique et
          chantier depuis 2012.
          <br />
          L’entreprise d’électriciens spécialiste de{' '}
          <strong>l’installation</strong>, du <strong>dépannage</strong> et de
          la <strong>remise aux normes</strong> de vos installations électriques
          : points lumineux, radiateurs électriques, tableaux électriques,
          prises…
        </p>
      </section>
      <div className={style.separator}></div>
      <section className={style.section_job}>
        <h2 className={style.title}>Nos Atouts</h2>
        <AssetList />
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
};
