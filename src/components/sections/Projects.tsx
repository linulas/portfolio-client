import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import {
  Page_strapi_portfolio_data_attributes_projects_data,
  Page_strapi_portfolio_data_attributes_projects_data_attributes,
  Page_strapi_portfolio_data_attributes_projects_data_attributes_image,
} from '../../graphql/Page';
import { useIntersection } from '../../helpers';
import { Image, DividerHeading } from '../other';

export interface ProjectInterface
  extends Page_strapi_portfolio_data_attributes_projects_data_attributes {
  id: number;
  imagePos: 'left' | 'right';
  currentProject: CurrentProject;
  setCurrentProject: React.Dispatch<React.SetStateAction<CurrentProject>>;
  imageHeight: number;
  last?: boolean;
}

type CurrentProject = { isInView: boolean; id: number };

export const projectText = 'Hi! I would like to participate in this project.';
export const mailTo = (subject?: string, message?: string) => {
  return `mailto:contact@linusbrannstrom.dev?subject=${subject || ''}&body=${message || ''}`;
};

const Project: React.FC<ProjectInterface> = ({
  id,
  title,
  description,
  link,
  image,
  imagePos,
  currentProject,
  setCurrentProject,
  imageHeight,
  last,
}) => {
  const ref = useRef() as any;
  const isInView = useIntersection(ref);

  useEffect(() => {
    // console.log({ title, isInView, prevInViewState });

    // ? if scrolling up and previous project comes into view
    if (isInView && id + 1 === currentProject.id) {
      // console.log('first condition, triggered by: ' + title);
      setCurrentProject({ isInView, id });
    }

    // ? if scrolling down and previous project exits the view
    if (id - 1 === currentProject.id && !currentProject.isInView && isInView) {
      // console.log('second condition, triggered by: ' + title);
      setCurrentProject({ isInView, id });
    }
  }, [currentProject, isInView, id]);

  // ? always update the current project isInView state
  useEffect(() => {
    if (currentProject.id === id) {
      setCurrentProject({ isInView, id });
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref} className={`flex ${imagePos === 'left' ? 'justify-end' : 'justify-start'}`}>
        <div className="w-96">
          {title && <h3>{title}</h3>}
          <p>{description}</p>
          {link && (
            <p>
              {`${image.data?.attributes?.caption} `}
              <a href={link.url}>{link.text}</a>
            </p>
          )}
        </div>
      </div>
      <div style={{ marginBottom: !last ? imageHeight + 192 : 0 + 64 }} />
    </>
  );
};

export interface ProjectProps extends ComponentInterface {
  items: Page_strapi_portfolio_data_attributes_projects_data[];
}

export const Projects: React.FC<ProjectProps> = ({ title, items }) => {
  const projectsRef = useRef() as any;
  const halfWidth = (projectsRef.current?.clientWidth || 1025) / 2;

  const [images, setImages] = useState<
    Page_strapi_portfolio_data_attributes_projects_data_attributes_image[]
  >([]);
  const [currentProject, setCurrentProject] = useState<CurrentProject>({ isInView: true, id: 0 });
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imagePos, setImagePos] = useState<'right' | 'left'>('right');
  const [x, setX] = useState(halfWidth);

  useEffect(() => {
    const arr: Page_strapi_portfolio_data_attributes_projects_data_attributes_image[] = [];
    items.map((project) => {
      project.attributes?.image && arr.push(project.attributes.image);
    });
    setImages(arr);
  }, []);

  useEffect(() => {
    setImagePos(currentProject.id % 2 === 0 ? 'right' : 'left');
  }, [currentProject]);

  useEffect(() => {
    setX(halfWidth);
    setProjectsHeight(projectsRef.current.clientHeight);
  }, [projectsRef.current, imageHeight]);

  return (
    <div className={`relative`} style={{ height: projectsHeight }}>
      <div id={'projects'} />
      <DividerHeading text={title || ''} />
      <motion.div
        initial={{ x }}
        animate={{ x: imagePos === 'left' ? 0 : x }}
        className={`w-1/2 sticky top-32 z-10`}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            animate={{ opacity: currentProject.id === index ? 1 : 0 }}
            className="relative"
          >
            <Image
              {...(image?.data?.attributes as unknown as UploadFile)}
              onLoad={(ev: any) => setImageHeight(ev.target.height)}
              className="shadow-md rounded-lg absolute"
            />
          </motion.div>
        ))}
      </motion.div>
      <div ref={projectsRef} className="absolute top-16 w-full">
        {items.map((project, index) => {
          return (
            project.attributes && (
              <Project
                key={`project-${index}`}
                id={index}
                {...project.attributes}
                imagePos={index % 2 === 0 ? 'right' : 'left'}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                imageHeight={imageHeight}
                last={index === items.length - 1}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
