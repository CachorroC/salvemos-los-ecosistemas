'use client';
import { useNavigationContext } from '#@/app/context/navigation-context';
import styles from '#@/styles/layout.module.css';
import { Route } from 'next';
import { DrawerMenuButton } from './nav-buttons';
import { NavLink } from './NavLink';
import { Suspense } from 'react';
import { Drawer } from './Drawer';
import { Loader } from './main-loader';
import { useArticlesContext } from '#@/app/context/articles-context';

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

  const {
    articlesState
  } = useArticlesContext();

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
              iconLabel={'contextual_token'}
              textLabel={'Artículos'}
              hrefLabel={'/articulos' as Route}
            />
            <NavLink iconLabel={ 'water' } textLabel={ 'Vicachá' } hrefLabel={ '/articulos/vicacha' as Route } />

            <NavLink
              iconLabel={'contextual_token_add'}
              textLabel={'Nuevo Articulo'}
              hrefLabel={'/articulos/nuevo' as Route}
            />
            { articlesState.map(
              (
                article
              ) => {
                return ( <NavLink key={ article.id } iconLabel={ 'article' } textLabel={ article.title } hrefLabel={ `/articulos/${ article.id }` as Route} /> );
              }
            )}
            {categories.map(
              (
                cat
              ) => {
                return (
                  <NavLink key={ cat } iconLabel={ 'news' } textLabel={ cat } hrefLabel={ `/category/${ cat }` } />
                );
              }
            )}
          </Drawer>
        </Suspense>
      )}
    </div>
  );

}
