'use client';
import NewsList from '#@/components/NewsList';
import { useArticlesContext } from '../context/articles-context';


export default function Page () {

  const {
    articlesState
  } = useArticlesContext();

  return (
    <NewsList articles={ articlesState} />
  );
}