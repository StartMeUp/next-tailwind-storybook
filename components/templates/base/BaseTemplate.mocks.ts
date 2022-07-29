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

// import { FC, PropsWithChildren } from 'react';
// import styles from './BaseTemplate.module.css';

// export interface IBaseTemplate {
//   sampleTextProp: string;
// }

// const BaseTemplateWithChildren: FC<PropsWithChildren<IBaseTemplate>> = ({
//   sampleTextProp,
// }) => {
//   return <div className={styles.container}>{sampleTextProp}</div>;
// };

// export default BaseTemplateWithChildren;
