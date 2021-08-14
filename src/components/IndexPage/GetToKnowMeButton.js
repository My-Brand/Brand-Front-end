import React, { Fragment } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { message } from '../../utils/message';
import {
  GetToKnowButton,
  ButtonCircle,
  CircleAndText,
  ButtonNextIcons,
  IndexButtonText
} from '../../views/IndexPage/styles';

const GetToKnowMeButton = () => (
  <Fragment>
    <GetToKnowButton className="text_32 fontwe600 blue pointer">
      <CircleAndText>
        <ButtonCircle />{' '}
        <IndexButtonText className="text_24">{message.buttons.index}</IndexButtonText>
      </CircleAndText>

      <ButtonNextIcons>
        <NavigateNextIcon className="animate_index_button text_32" />
        <NavigateNextIcon
          style={{ marginLeft: '-12px' }}
          className="animate_index_button text_32"
        />
      </ButtonNextIcons>
    </GetToKnowButton>
  </Fragment>
);

export default GetToKnowMeButton;
