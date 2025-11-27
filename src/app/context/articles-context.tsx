'use client';

import { Article } from '#@/types/article';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

const ArticlesContext = createContext<{ articlesState: Article[]; setArticlesState: Dispatch<SetStateAction<Article[]>>; }|null>(
  null
);

export function ArticlesProvider (
  {
    children, initialArticles
  }: { children: ReactNode; initialArticles: Article[]; }
) {
  const [
    articlesState,
    setArticlesState
  ] = useState(
    initialArticles
  );

  return (
    <ArticlesContext.Provider value={{
      articlesState,
      setArticlesState
    }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticlesContext () {
  const context  = useContext(
    ArticlesContext
  );

  if ( context === null ) {
    throw new Error(
      'useArticlesContext  must be used inside a ArticlesProvider',
    );
  }

  return context;
}