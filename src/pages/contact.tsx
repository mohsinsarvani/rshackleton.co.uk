import ContactForm from '@components/forms/ContactForm';
import Layout from '@components/layouts/InsetWithBanner';
import RichText from '@components/shared/RichText';
import SEO from '@components/shared/SEO';
import { graphql } from 'gatsby';
import { IConnection, IContactPage } from 'index';
import React, { FC } from 'react';

interface IContactProps {
  data: {
    allKontentItemContactPage: IConnection<IContactPage>;
  };
}

const Contact: FC<IContactProps> = ({
  data: {
    allKontentItemContactPage: {
      edges: [{ node: data }],
    },
  },
}) => {
  const ogImage = data.elements.metadata__open_graph_image.value[0];

  const seo = {
    title: data.elements.metadata__page_title.value,
    description: data.elements.metadata__page_description.value,
    keywords: data.elements.metadata__page_keywords.value,
    image: ogImage ? ogImage.url : null,
    imageDescription: ogImage ? ogImage.description : null,
    url: `/contact`,
  };

  const banner = data.elements.banner.value[0].fluid;
  const bannerDescription = data.elements.banner.value[0].description;
  const content = data.elements.body.resolvedData.html;
  const images = data.elements.body.images;
  const links = data.elements.body.links;
  const linkedItems = data.elements.body.linked_items;
  const title = data.elements.title.value;

  return (
    <Layout banner={banner} bannerDescription={bannerDescription}>
      <SEO {...seo} />
      <h1>{title}</h1>
      <RichText
        content={content}
        images={images}
        links={links}
        linkedItems={linkedItems}
      />
      <ContactForm />
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query Contact {
    allKontentItemContactPage {
      edges {
        node {
          id
          elements {
            title {
              value
            }
            body {
              resolvedData {
                html
              }
              images {
                imageId
                description
                fluid(maxWidth: 788) {
                  ...KontentAssetFluid_withWebp
                }
              }
              links {
                codename
                linkId
                type
                urlSlug
              }
              linked_items {
                ...LinkedItemsFragment
              }
            }
            banner {
              value {
                description
                fluid(maxWidth: 1920) {
                  ...KontentAssetFluid_withWebp
                }
              }
            }
            metadata__page_title {
              value
            }
            metadata__page_description {
              value
            }
            metadata__page_keywords {
              value
            }
            metadata__open_graph_image {
              value {
                description
                url
              }
            }
          }
        }
      }
    }
  }
`;
