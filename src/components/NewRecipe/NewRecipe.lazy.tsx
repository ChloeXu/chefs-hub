import React, { lazy, Suspense } from 'react';

const LazyNewRecipe = lazy(() => import('./NewRecipe'));

const NewRecipe = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNewRecipe {...props} />
  </Suspense>
);

export default NewRecipe;
