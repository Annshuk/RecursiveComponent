import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const familyTree = {
  //Grandfather
  name: 'John',
  age: 90,
  sibling: [
    {
      name: 'Mary',
      age: 60,
    },
    {
      name: 'Jane',
      age: 60,
    },
    {
      name: 'Arthur',
      age: 60,
      sibling: [
        { name: 'Jr John', age: 10 },
        {
          name: 'Lily',
          age: 35,
        },
        {
          name: 'Billy',
          age: 37,
          sibling: [
            {
              name: 'Hank',
              age: 60,
            },
            {
              name: 'Henry',
              age: 57,
            },
          ],
        },
      ],
    },
  ],
};

const FamilyTree = ({ family }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const expand = () => {
    setIsVisible(!isVisible);
  };

  const exapndcol = isVisible ? '-' : '+';

  return (
    <>
      {family.sibling?.length ? (
        <button onClick={expand}>
          {family.name} {family.age} {family.sibling?.length ? exapndcol : ''}
        </button>
      ) : (
        <>
          {family.name} {family.age}
        </>
      )}
      {family?.sibling?.map(
        (child) =>
          isVisible && (
            <p style={{ paddingLeft: 20 }} key={child.name}>
              <FamilyTree family={child} />
            </p>
          )
      )}
    </>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FamilyTree family={familyTree} />
  </StrictMode>
);
