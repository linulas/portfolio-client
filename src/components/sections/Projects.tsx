import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import {
  Page_strapi_portfolio_data_attributes_projects_data,
  Page_strapi_portfolio_data_attributes_projects_data_attributes,
  Page_strapi_portfolio_data_attributes_projects_data_attributes_image,
} from '../../graphql/Page';
import { useIntersection, useScrollDirection } from '../../helpers';
import { Image, DividerHeading } from '../other';

const calculateThresholdPercentage = (ref: any, winHeight: number, topThreshold: number) => {
  const projectHeight: number = ref.current?.clientHeight || 0;
  const pxThreshold = winHeight - topThreshold + 32;

  if (pxThreshold <= 32) {
    return 0;
  }

  const percentage = pxThreshold / projectHeight;

  return percentage <= 1 ? percentage : 0.5;
};

export interface ProjectInterface
  extends Page_strapi_portfolio_data_attributes_projects_data_attributes {
  imagePos: 'left' | 'right';
  setImagePos: React.Dispatch<React.SetStateAction<'right' | 'left'>>;
  setCurrentImage: (addOrSubtract?: number) => void;
  imageHeight: number;
  first?: boolean;
  last?: boolean;
}

export const projectText = 'Hi! I would like to participate in this project.';
export const mailTo = (subject?: string, message?: string) => {
  return `mailto:contact@linusbrannstrom.dev?subject=${subject || ''}&body=${message || ''}`;
};

const Project: React.FC<ProjectInterface> = ({
  title,
  description,
  link,
  image,
  imagePos,
  setImagePos,
  setCurrentImage,
  imageHeight,
  last,
}) => {
  const ref = useRef() as any;
  const winHeight = window.innerHeight;
  const topThreshold = 128 /** img position */ + imageHeight;
  const threshold = calculateThresholdPercentage(ref, winHeight, topThreshold);
  const isIntersecting = useIntersection(ref, threshold);
  const isInView = useIntersection(ref);

  useEffect(() => {
    if (isIntersecting && ref.current?.offsetTop > 0) {
      //console.log(`setting ${title} pos`);
      setImagePos(imagePos);
      setCurrentImage();
    } else if (ref.current?.offsetTop > 0 && isInView) {
      //console.log(`reverting ${title} pos`);
      setImagePos(imagePos === 'left' ? 'right' : 'left');
      setCurrentImage(1);
    }
  }, [isIntersecting]);

  return (
    <div ref={ref} className={`flex ${imagePos === 'left' ? 'justify-end' : 'justify-start'}`}>
      <div className="w-96" style={{ marginBottom: !last ? imageHeight : 0 + 64 }}>
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
  );
};

export interface ProjectProps extends ComponentInterface {
  items: Page_strapi_portfolio_data_attributes_projects_data[];
}

export const Projects: React.FC<ProjectProps> = ({ title, items }) => {
  const projectsRef = useRef() as any;
  const halfWidth = (projectsRef.current?.clientWidth || 1025) / 2;
  const scrollDirection = useScrollDirection();

  const [images, setImages] = useState<
    Page_strapi_portfolio_data_attributes_projects_data_attributes_image[]
  >([]);
  const [currentImage, setCurrentImage] = useState(0);
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
            animate={{ opacity: currentImage === index ? 1 : 0 }}
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
                {...project.attributes}
                imagePos={index % 2 === 0 ? 'right' : 'left'}
                setImagePos={setImagePos}
                setCurrentImage={(addOrSubtract = 0) =>
                  setCurrentImage(
                    index +
                      (scrollDirection
                        ? scrollDirection === 'down'
                          ? addOrSubtract
                          : -addOrSubtract
                        : 0)
                  )
                }
                imageHeight={imageHeight}
                first={index === 0}
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
