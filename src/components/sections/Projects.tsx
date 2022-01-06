import React from 'react';
import {
  Page_strapi_portfolio_data_attributes_projects_data,
  Page_strapi_portfolio_data_attributes_projects_data_attributes,
} from '../../graphql/Page';
import { Image, DividerHeading } from '../other';

export interface ProjectInterface
  extends Page_strapi_portfolio_data_attributes_projects_data_attributes {}

export const projectText = 'Hi! I would like to participate in this project.';
export const mailTo = (subject?: string, message?: string) => {
  return `mailto:contact@linusbrannstrom.dev?subject=${subject || ''}&body=${message || ''}`;
};

const Project: React.FC<ProjectInterface> = ({ title, description, link, image }) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {image.data?.attributes && <Image {...(image.data.attributes as unknown as UploadFile)} />}
      <p>{description}</p>
      {link && (
        <p>
          {`${image.data?.attributes?.caption} `}
          <a href={link.url}>{link.text}</a>
        </p>
      )}
    </div>
  );
};

export interface ProjectProps extends ComponentInterface {
  items: Page_strapi_portfolio_data_attributes_projects_data[];
}

export const Projects: React.FC<ProjectProps> = ({ title, items }) => {
  return (
    <div>
      <div id={'projects'} />
      <DividerHeading text={title || ''} />

      <div>
        {items.map((project, index) => {
          return project.attributes && <Project key={`project-${index}`} {...project.attributes} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
