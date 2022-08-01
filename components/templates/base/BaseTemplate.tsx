import { FC } from 'react';
// OPTIONAL: you can use css modules on top of tailwindCSS
//import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
  tlwStyle?: string | Record<string, string>;
}

const BaseTemplate: FC<IBaseTemplate> = ({ sampleTextProp, tlwStyle }) => {
  return (
    <div
      className={`rounded-lg flex content-center items-center p-8 ${
        tlwStyle && tlwStyle
      }`}
    >
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;

// import { FC, PropsWithChildren } from 'react';
// import styles from './BaseTemplate.module.css';

// export interface IBaseTemplate {
//   sampleTextProp: string;
// }

// const BaseTemplateWithChildren: FC<PropsWithChildren<IBaseTemplate>> = ({
//   sampleTextProp, tlwStyle
// }) => {
//   return <div className={`rounded-lg flex content-center items-center p-8 ${
//        tlwStyle && tlwStyle
//      }`}>{sampleTextProp}</div>;
// };

// export default BaseTemplateWithChildren;
