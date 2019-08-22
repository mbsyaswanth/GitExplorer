import React, {Component} from 'react';

import {Language} from './styledComponents';

class LanguageSelect extends Component {
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
