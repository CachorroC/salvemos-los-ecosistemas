'use server';

import { articleCollection } from '#@/lib/connection/collections';
import { Article, ArticleWithId } from '#@/types/article';

export async function addComment(
  prevState: Article,
  queryData: FormData,
): Promise<Article> {
  const title = queryData.get(
    'title'
  );

  const content = queryData.get(
    'content'
  );

  const id = queryData.get(
    'id'
  );

  const author = queryData.get(
    'author'
  );

  const date = queryData.get(
    'date'
  );

  const description = queryData.get(
    'description'
  );

  const url = queryData.get(
    'url'
  );

  const urlToImage = queryData.get(
    'urlToImage'
  );

  const source = queryData.get(
    'source'
  );



  const inputForm : Article= {
    title      : `${ title }`,
    content    : `${ content }`,
    author     : `${ author }`,
    description: `${ description }`,
    urlToImage : `${ urlToImage }`,
    url        : url
      ? `${ url }`
      : null,
    id: parseInt(
      `${ id }`
    ),
    date: new Date(
      `${ date }`
    ),
    source: source
      ? {
          name: `${ source }`
        }
      : null
  };

  const collection = await articleCollection();

  try {
    const insertComment = await collection.insertOne(
      inputForm
    );

    if ( insertComment.acknowledged === false ) {
      console.log(
        `el insertOperation arrojó falso en la salida ${ insertComment.acknowledged }`,
      );
    }


    return {
      ...prevState,
      ...inputForm
    };

  } catch ( error ) {
    console.log(
      error
    );
  }


  return {
    ...prevState,
    ...inputForm
  };
}

export async function deleteComment(
  commentId: number
) {
  const collection = await articleCollection();

  const deleteCommentAction = await collection.deleteOne(
    {
      id: commentId
    }
  );

  if ( deleteCommentAction.acknowledged === false ) {
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
}

export async function editCommentBasic(
  queryData: ArticleWithId
) {
  const {
    id, _id, ...restQueryData
  } = queryData;

  console.log(
    _id
  );

  const collection = await articleCollection();

  const editDocument = await collection.updateOne(
    {
      id: id,
    },
    {
      $set: {
        ...restQueryData
      },
    },
  );

  console.log(
    editDocument.acknowledged
  );
  console.log(
    editDocument.modifiedCount
  );

  if ( editDocument.modifiedCount === 0 ) {
    return {
      inputForm: queryData,
      success  : false,
    };
  }

  return {
    inputForm: queryData,
    success  : true,
  };
}
