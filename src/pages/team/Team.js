import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Icon } from 'components/Icon';

import { Image } from 'components/Image';
import profileImgLarge from 'assets/coordinator1.jpg';
import profileImgPlaceholder from 'assets/coordinator1.jpg';
import profileImg from 'assets/coordinator1.jpg';

import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Team.module.css';
import emailjs from '@emailjs/browser';

// Importing images
import coordinator1 from 'assets/coordinator1.jpg';
import coordinator2 from 'assets/coordinator2.jpg';
import coordinator3 from 'assets/coordinator3.jpg';
import coordinator4 from 'assets/coordinator4.png';

import y21_a from 'assets/y21_a.jpg';
import y21_b from 'assets/y21_b.jpg';
import y21_c from 'assets/y21_c.jpg';
import y21_d from 'assets/y21_a.jpg';

import y20_a from 'assets/y20_a.jpg';
import y20_b from 'assets/y20_b.jpg';
import y20_c from 'assets/y20_c.jpg';
import y20_d from 'assets/y20_d.jpg';

import y19_a from 'assets/y21_a.jpg';
import y19_b from 'assets/y21_a.jpg';
import y19_c from 'assets/y21_a.jpg';
import y19_d from 'assets/y21_a.jpg';


import secretary1 from 'assets/kethan.png';
import secretary2 from 'assets/akshat.jpg';
import secretary3 from 'assets/ankit.jpg';
import secretary4 from 'assets/aman.jpg';
import secretary5 from 'assets/keshav.jpg';
import secretary6 from 'assets/anurag.jpg';
import secretary7 from 'assets/aarush.jpeg';
import secretary8 from 'assets/aarnav.jpg';
import secretary9 from 'assets/ayush_singh.jpg';
import secretary10 from 'assets/khush.jpg';
import secretary11 from 'assets/shantanu.jpg';
import secretary12 from 'assets/atit.jpg';
import secretary13 from 'assets/pallav.jpg';
import secretary14 from 'assets/neel.jpg';
import secretary15 from 'assets/kushagra.jpg';
import secretary16 from 'assets/Siddharth.jpg';
import secretary17 from 'assets/ashish.jpg';
import secretary18 from 'assets/ayush.jpg';
import secretary19 from 'assets/harsh.jpg';
import secretary20 from 'assets/sanchit.jpg';
import secretary21 from 'assets/atishay.jpg';
import secretary22 from 'assets/shivam.jpg';
import secretary23 from 'assets/manit.jpeg';
import secretary24 from 'assets/nischay.jpeg';
import secretary25 from 'assets/shreyansh.jpg';
import secretary26 from 'assets/arihant.jpg';
import secretary27 from 'assets/hansika.png';
import secretary28 from 'assets/om.jpg';
import secretary29 from 'assets/nitin.jpg';
import secretary30 from 'assets/pranav.jpg';

// Array of image sources
const coordinatorImages = [
  { src: coordinator1, alt: 'Naman Sethi', name: 'Naman Sethi' },
  { src: coordinator2, alt: 'Tanush Goel', name: 'Tanush Goel' },
  { src: coordinator3, alt: 'Moni Dutt', name: 'Moni Dutt' },
  { src: coordinator4, alt: 'Rachit Choudhary', name: 'Rachit Choudhary' },
];

const y21Images = [
  { src: y21_a , alt: 'Alpha', name: 'Alpha' },
  { src: y21_b, alt: 'Devanshi', name: 'Devanshi Rastogi' },
  { src: y21_c, alt: 'Keshav', name: 'Keshav Raj Gupta' },
  { src: y21_a, alt: 'Delta', name: 'Delta' },
]

const y20Images = [
  { src: y20_a , alt: 'Shivam Pandey', name: 'Shivam Pandey' },
  { src: y20_b, alt: 'Sujal Harkut', name: 'Sujal Harkut' },
  { src: y20_c, alt: 'Dakshita Mittal', name: 'Dakshita Mittal' },
  { src: y20_d, alt: 'Aditya Anand', name: 'Aditya Anand' },
];
const y19Images = [
  { src: y21_a , alt: 'Alpha', name: 'Alpha' },
  { src: y21_a, alt: 'Beta', name: 'Beta' },
  { src: y21_a, alt: 'Gamma', name: 'Gamma' },
  { src: y21_a, alt: 'Delta', name: 'Delta' },
];

const secretariesImages = [
  { src: secretary1, alt: 'Kethan', name: 'Kethan Challa' },
  { src: secretary2, alt: 'Akshat', name: 'Akshat Garg' },
  { src: secretary3, alt: 'Ankit', name: 'Ankit Kumar' },
  { src: secretary4, alt: 'Aman', name: 'Aman Sanwal' },
  { src: secretary5, alt: 'Keshav', name: 'Keshav Bansal' },
  { src: secretary6, alt: 'Anurag', name: 'Anurag Thakur' },
  { src: secretary7, alt: 'Aarush', name: 'Aarush Singh' },
  { src: secretary8, alt: 'Aarnav', name: 'Aarnav Gupta' },
  { src: secretary9, alt: 'Ayush Singh', name: 'Ayush Singh Kumar' },
  { src: secretary10, alt: 'Khush', name: 'Khush Maheshwari' },
  { src: secretary11, alt: 'Shantanu', name: 'Shantanu Prakash' },
  { src: secretary12, alt: 'Atit', name: 'Atit Kumar Satsangi' },
  { src: secretary13, alt: 'Pallav', name: 'Pallav Rastogi' },
  { src: secretary14, alt: 'Neel', name: 'Neel D Jadia' },
  { src: secretary15, alt: 'Kushagra', name: 'Kushagra Tiwari' },
  { src: secretary16, alt: 'Siddharth', name: 'Siddharth Jaiswal' },
  { src: secretary17, alt: 'Ashish', name: 'Ashish Upadhyay' },
  { src: secretary18, alt: 'Ayush', name: 'Ayush Omer' },
  { src: secretary19, alt: 'Harsh', name: 'Harshvardhan Gaur' },
  { src: secretary20, alt: 'Sanchit', name: 'Sanchit Arora' },
  { src: secretary21, alt: 'Atishay', name: 'Atishay Jain' },
  { src: secretary22, alt: 'Shivam', name: 'Shivam Tomar' },
  { src: secretary23, alt: 'Manit', name: 'Manit Kapoor' },
  { src: secretary24, alt: 'Nischay', name: 'Nischay Agrawal' },
  { src: secretary25, alt: 'Shreyansh', name: 'Shreyansh Tarawat' },
  { src: secretary26, alt: 'Arihant', name: 'Arihant Satpathy' },
  { src: secretary27, alt: 'Hansika', name: 'Hansika Gupta' },
  { src: secretary28, alt: 'Om', name: 'Om Bhartiya' },
  { src: secretary29, alt: 'Nitin', name: 'Nitin Maheshwari' },
  { src: secretary30, alt: 'Pranav', name: 'Pranav Krishna' },
];

export const Team = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const formName = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;

  const onSubmit = async event => {
    event.preventDefault();
    setStatusError('');

    if (sending) return;

    try {
      setSending(true);

      emailjs
        .send(
          'service_po9cbo8', // paste your ServiceID here (you'll get one when your service is created).
          'template_lrvecac', // paste your TemplateID here (you'll find it under email templates).
          {
            from_name: formName.value,
            to_name: 'FAC_IITK', // put your name here.
            from_email: email.value,
            to_email: 'prem.kansagra1234@gmail.com', //put your email here.
            message: message.value,
          },
          '4nn9vaVYg9qqQwfZf' //paste your Public Key here. You'll get it in your profile section.
        )
        .then(
          () => {
            // setLoading(false);
            // alert('Thank you. We will get back to you as soon as possible.');
          },
          error => {
            // setLoading(false);
            console.log(error);
            alert('Something went wrong. Please try again.');
          }
        );

      setComplete(true);
      setSending(false);
    } catch (error) {
      setSending(false);
      setStatusError(error.message);
    }
  };

  return (
    <Section className={styles.contact}>
      <Meta
        title="Our Team"
        // description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      {/* <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          <form className={styles.form} method="post" onSubmit={onSubmit}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say Hi !" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your Name"
              type="text"
              maxLength={512}
              {...formName}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your Email"
              type="email"
              maxLength={512}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              maxLength={4096}
              {...message}
            />
            <Transition in={statusError} timeout={msToNum(tokens.base.durationM)}>
              {errorStatus => (
                <div
                  className={styles.formError}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {statusError}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={complete}>
        {(visible, status) => (
          <div className={styles.complete} aria-live="polite">
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              Thank you. We will get back to you as soon as possible.
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevronRight"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} /> */}

      {/* <Image
        reveal
        delay={100}
        placeholder={profileImgPlaceholder}
        srcSet={[profileImg, profileImgLarge]}
        sizes={`40vw, 480px`}
        alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
      /> */}
      <Heading className={styles.heading} data-visible={0} level={3} id={0}>
        <DecoderText text="Meet Our Team" start={1} delay={500} />
      </Heading>

      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.coordinatorsContainer}>
        {coordinatorImages.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>

      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Secretaries" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {secretariesImages.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>

      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Y21 Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {y21Images.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Y20 Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {y20Images.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
      <Heading className={styles.heading} data-visible={0} level={4} id={0}>
        <DecoderText text="Y19 Coordinators" start={1} delay={500} />
      </Heading>
      <div className={styles.secretariesContainer}>
        {y19Images.map((image, index) => (
          <div key={index}>
            <Image
              key={index}
              reveal
              delay={100}
              placeholder={image.src}
              srcSet={[image.src]}
              sizes="40vw, 480px"
              alt={image.alt}
              className={styles.image}
            />
            <p className={styles.imageName}>{image.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

function getStatusError({
  status,
  errorMessage,
  fallback = 'There was a problem with your request',
}) {
  if (status === 200) return false;

  const statuses = {
    500: 'There was a problem with the server, try again later',
    404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
  };

  if (errorMessage) {
    return errorMessage;
  }

  return statuses[status] || fallback;
}

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
