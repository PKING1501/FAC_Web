import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/NCW.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/NCW.png';
import sliceBackgroundBarLarge from 'assets/lecture.png';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/lecture.png';
import sliceBackgroundLarge from 'assets/spr-lesson-builder-dark.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/spr-lesson-builder-dark.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
// import sliceIrl from 'assets/slice-irl.jpg';
import sliceIrl from 'assets/Hackathons.jpg';
import Workshop from 'assets/slice-background.jpg';
import sliceSidebarAnnotationsLarge from 'assets/projects-fac.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/projects-fac.png';
// import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersLarge from 'assets/projects-fac.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
// import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSidebarLayers from 'assets/projects-fac.png';

import sliceSlidesLarge from 'assets/slice-slide-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slide.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Non-Core weekened(NCW)';
const description =
  'Non-Core Weekend, the flagship event of the Finance and Analytics Club, is a high-energy, three-day festival designed to ignite financial literacy across the IITK campus. This dynamic fest draws upon a rich history of distinguished speakers, such as Subhash Garg (Former Executive Director of the World Bank), Dr. C Rangarajan (19th Governor of the Reserve Bank of India), Ajay Bhushan Pandey (Chairperson of NFRA, Ex-CEO of UIDAI), and Mukesh Kalra (Founder & CEO, ETMoney).Throughout the weekend, students engage in a variety of exciting activities, including national competitions, innovative hackathons, and immersive workshops. Topics span critical areas such as Finance, Quantitative Analysis, Economics, Data Analytics, Machine Learning, Blockchain, and Web3, ensuring relevance in today’s fast-evolving landscape. In collaboration with leading corporates like WorldQuant, Groww, and Solana, Non-Core Weekend serves as a vibrant platform for students to apply their knowledge, develop practical skills, and network with industry experts';
const roles = ['Workshops', 'Competitions', 'Talks','Hackathons'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          // url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.laptop}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>PROJECTS</ProjectSectionHeading>
              <ProjectSectionText>
                Teachers needed a better way to create collaborative group activities by
                annotating slides on Slice. Before starting this project, a layer could
                only be annotated by a single user, making it difficult for learners to
                work together.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection> */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>LECTURES & WORKSHOPS</ProjectSectionHeading>
              <ProjectSectionText>
              The Finance and Analytics Club at IITK offers an exciting lineup of lectures and workshops throughout the year, designed to empower the campus community with real-world financial and analytical skills. We also collaborate with industry leaders such as Zerodha, AlphaGrep, and WorldQuant to bring in expert-led sessions, covering a diverse range of domains. Our workshops are tailored to cater to all experience levels—from introductory sessions for freshers to advanced trading bootcamps. Some highlights include offline chit trading competitions, a hands-on Introduction to Algorithmic Trading with Python, and our flagship annual winter camp. This immersive camp engages over 100 first-year students, guiding them through critical areas like Investment Banking, Quantitative Finance, Financial Markets, and Data Analytics.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              
            </div>
            {/* <div className={styles.gridText}>
              <ProjectSectionHeading>LECTURES</ProjectSectionHeading>
              <ProjectSectionText>
                Marking and annotating areas on high resolution biomedical images is the
                core experience of the app, and it was easy to get lost or lose sense of
                scale when zooming in on details. Adding measurements for the perimeter
                and area of an annotation both helped to communicate the overall scale of
                the image and how large the annotated feature is in comparison.
              </ProjectSectionText>
        //     </div> */}
        {/* //   </ProjectSectionContent>
        </ProjectSection> */} 
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>HACATHONS</ProjectSectionHeading>
              <ProjectSectionText>
              The Finance and Analytics Club (FAC) at IITK is at the forefront of organizing thrilling hackathons throughout the year, both during our flagship Non-Core Weekend and beyond. We partner with industry innovators like Zelta Labs and AlgoBulls to craft high-stakes competitions that push the boundaries of finance and technology. From the adrenaline-pumping BTC-USDT Algo-Trading challenge to our renowned Case-O-Mania, a financial case competition that tests strategic thinking, to Quant Quest with AlgoBulls, where participants develop high-performing alphas—our hackathons offer something for everyone passionate about finance, trading, and data analytics. Beyond hosting, our team actively competes in prestigious national and international competitions, including the annual Inter-IIT Tech Meet, ensuring we're constantly learning, growing, and making our mark on the global stage.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
