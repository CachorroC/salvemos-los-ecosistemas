import { FormActionProvider } from '#@/app/context/form-action-context';
import { articleCollection } from '#@/lib/connection/collections';
import { ArticleForm } from './article-form';

export default async  function Page () {

  const collection = await articleCollection();

  const currentIndex = await collection.countDocuments();

  return (
    <FormActionProvider currentIndex={ currentIndex }>
      <ArticleForm />
    </FormActionProvider>
  );
}