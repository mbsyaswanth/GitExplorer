import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Actions} from 'react-native-router-flux';

import {Language} from './styledComponents';

import translate from '../../../utils/language.utils';
import {refreshUserScene} from '../../../utils/navigation';

@observer
class LanguageSelect extends Component {
  componentDidUpdate() {
    refreshUserScene();
  }

  render() {
    const {selectedLanguageName, setLanguageName} = this.props.store;
    return (
      <Language
        selectedValue={selectedLanguageName}
        onValueChange={language => setLanguageName(language)}>
        <Language.Item label="English" value="en" />
        <Language.Item label="తెలుగు" value="tel" />
        <Language.Item label="हिंदी" value="hi" />
      </Language>
    );
  }
}

export default LanguageSelect;
