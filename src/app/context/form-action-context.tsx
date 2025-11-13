'use client';
import { createContext, ReactNode, useActionState, useContext } from 'react';
import { addArticle } from '../actions';
import { Article } from '#@/types/article';

const FormActionContext = createContext<{ formState: Article; formAction:(
  payload: FormData ) => void; isFormPending: boolean; }|null>(
  null
);

export function FormActionProvider (
  {
    children, currentIndex
  }: { children: ReactNode; currentIndex: number}
) {
  const [
    formState,
    formAction,
    isFormPending
  ] = useActionState(
    addArticle, {
      id         : currentIndex + 1,
      title      : '',
      author     : 'Juan Camilo Suarez Ramirez',
      date       : new Date(),
      description: '',
      content    : '',
      url        : null,
      urlToImage : '',
      source     : null
    }
  );

  return (
    <FormActionContext.Provider value={ {
      formState,
      formAction,
      isFormPending
    } }
    >
      {children}
    </FormActionContext.Provider>
  );
}

export const useFormActionContext = () => {
  const context = useContext(
    FormActionContext
  );

  if ( !context ) {
    throw new Error(
      'useFormActionContext must be used within an FormActionProvider'
    );
  }

  return context;
};