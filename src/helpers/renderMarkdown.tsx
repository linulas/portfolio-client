import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { renderToString } from 'react-dom/server';

// rendering media and links without p wrapper and fix underline
const renderParagraph = (props: any) => {
  const { children } = props;

  if (
    children &&
    children[0] &&
    children.length === 1 &&
    children[0].props &&
    (children[0].props.src || children[0].props.href)
  ) {
    return children;
  }

  return props.children.includes('<u>') ? (
    <p
      dangerouslySetInnerHTML={{
        __html: renderToString(props.children)
          .replace(/&lt;u&gt;/g, '<u>')
          .replace(/&lt;\/u&gt;/g, '</u>'),
      }}
    />
  ) : (
    <p>{props.children}</p>
  );
};

export const renderMarkdown = (markdown: string) => {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        p: (props) => renderParagraph(props),
      }}
    />
  );
};

export default renderMarkdown;
