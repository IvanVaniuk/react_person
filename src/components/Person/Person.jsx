export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partners = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {person?.age && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {partners}
        </p>
      ) : (
        'I am not married'
      )}
    </section>
  );
};
