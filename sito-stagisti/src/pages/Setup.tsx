import file from '../texts/Setup.json'
import Step from '../components/Step'

const Setup = () => {

  let counter = 0;

  return (
    file.map((step) => {
      return <>
        <Step title={step.title} body={step.body} counter={++counter} />
      </>
    })
  );
};

export default Setup;
