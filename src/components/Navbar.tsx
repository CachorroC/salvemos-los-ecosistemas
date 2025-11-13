'use client';
import { useNavigationContext } from '#@/app/context/navigation-context';
import styles from '#@/styles/layout.module.css';
import { Route } from 'next';
import { DrawerMenuButton } from './nav-buttons';
import { NavLink } from './NavLink';
import { Suspense } from 'react';
import { Drawer } from './Drawer';
import { Loader } from './main-loader';

const categories = [
  'business',
  'entertainment',
  'sports',
  'technology',
  'science',
];

export default function Navbar() {


  const {
    isNavOpen
  } = useNavigationContext();

  return (
    <div className={styles.header}>
      <DrawerMenuButton />
      <NavLink
        key={'home'}
        iconLabel={'home'}
        textLabel={'Inicio'}
        hrefLabel={'/' as Route}
      />
      {isNavOpen && (
        <Suspense fallback={<Loader />}>
          <Drawer>
            <DrawerMenuButton />

            <NavLink
              iconLabel={'contact_support'}
              textLabel={'contacto'}
              hrefLabel={'/articulos'}
            />

            <NavLink
              iconLabel={'contact_support'}
              textLabel={'n8uevo articulo'}
              hrefLabel={'/articulos/nuevo'}
            />
            {categories.map(
              (
                cat
              ) => {
                return (
                  <NavLink key={ cat } iconLabel={ '' } textLabel={ cat } hrefLabel={ `/category/${ cat }` } />
                );
              }
            )}
          </Drawer>
        </Suspense>
      )}
    </div>
  );

}
