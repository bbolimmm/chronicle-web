// @flow

// $FlowFixMe
import { Box } from 'lattice-ui-kit';

import SurveyButtons from './SurveyButtons';

type Props = {
  noApps :boolean;
  isFinalStep :boolean;
  isNextButtonDisabled :boolean;
  isSubmitting :boolean;
  nextButtonText :string;
  step :number;
}
const HourlySurveyInstructions = (props :Props) => {
  const {
    isFinalStep,
    isNextButtonDisabled,
    isSubmitting,
    nextButtonText,
    step,
    noApps
  } = props;

  if (noApps) {
    return (
      <Box textAlign="center">
        No apps found. Please try refreshing page.
      </Box>
    );
  }
  return (
    <Box>
      <Box mb="20px">
        Please complete this short survey to let us know which of the apps
        used in the last 24 hours were used by the child enrolled in our study. The
        survey will refer to this child as &quot;your child&quot;.
      </Box>
      <Box>
        For instructions at each step please click on 3 dots to the top-right of the app.
      </Box>
      <SurveyButtons
          step={step}
          isFinalStep={isFinalStep}
          isSubmitting={isSubmitting}
          nextButtonText={nextButtonText}
          isNextButtonDisabled={isNextButtonDisabled} />
    </Box>
  );
};

export default HourlySurveyInstructions;
