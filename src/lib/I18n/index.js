import I18n from 'react-native-i18n';
import fr from './fr.json';

I18n.defaultLocale = 'fr';
I18n.fallbacks = true;

I18n.translations = {
  fr,
};

export default I18n;
