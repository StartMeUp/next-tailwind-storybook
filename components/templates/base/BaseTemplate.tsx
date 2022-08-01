import { FC } from 'react';
// OPTIONAL: you can use css modules on top of tailwindCSS
//import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className="bg-black text-white rounded-lg flex content-center items-center p-8">
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
