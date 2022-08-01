import { IBaseTemplate } from './BaseTemplate';

const base: IBaseTemplate = {
  sampleTextProp: 'Hello World',
};

const altBase: IBaseTemplate = {
  sampleTextProp: 'Hello ALT World',
};

export const mockBaseTemplateProps = {
  base,
  altBase,
};
