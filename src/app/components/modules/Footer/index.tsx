import Image from 'next/image';
import React from 'react';

import {
  ContactContent,
  ContactContentContainer,
  ContactsInformation,
  FooterBottomContainer,
  FooterColumn,
  FooterContainer,
  FooterContentContainer,
  FooterContentItem,
  FooterTitle,
  StyledIframe,
} from '@/app/components/modules/Footer/styled';
import {
  ABOUT_SYSTEM_TEXT,
  ABOUT_US_TEXT,
  BOOKING_TEXT,
  CUSTOMER_SUPPORT_TEXT,
  DELIVERY_POLICY_TEXT,
  FOOTER_FACEBOOK_TEXT,
  FOOTER_LOCATION_TEXT,
  POLICY_TEXT,
  REFUND_POLICY_TEXT,
  SELL_POLICY_TEXT,
} from '@/app/constants/common';
import { FooterFacebook, FooterLocation, FooterLogo, FooterMail } from '~/public/images';

const Footer = (): React.ReactElement => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContactsInformation>
          <Image src={FooterLogo.src} alt="logo" width={158} height={58} />
          <ContactContentContainer>
            <Image src={FooterLocation.src} alt="location" width={20} height={20} />
            <ContactContent>{FOOTER_LOCATION_TEXT}</ContactContent>
          </ContactContentContainer>
          <ContactContentContainer>
            <Image src={FooterMail.src} alt="mail" width={20} height={20} />
            <ContactContent>{FOOTER_LOCATION_TEXT}</ContactContent>
          </ContactContentContainer>
          <ContactContentContainer>
            <Image src={FooterFacebook.src} alt="facebook" width={20} height={20} />
            <ContactContent>{FOOTER_FACEBOOK_TEXT}</ContactContent>
          </ContactContentContainer>
        </ContactsInformation>
        <FooterColumn>
          <FooterTitle>{CUSTOMER_SUPPORT_TEXT}</FooterTitle>
          <FooterContentItem>{ABOUT_US_TEXT}</FooterContentItem>
          <FooterContentItem>{ABOUT_SYSTEM_TEXT}</FooterContentItem>
          <FooterContentItem>{BOOKING_TEXT}</FooterContentItem>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>{POLICY_TEXT}</FooterTitle>
          <FooterContentItem>{SELL_POLICY_TEXT}</FooterContentItem>
          <FooterContentItem>{REFUND_POLICY_TEXT}</FooterContentItem>
          <FooterContentItem>{DELIVERY_POLICY_TEXT}</FooterContentItem>
        </FooterColumn>
        <StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.746942696591!2d105.6827828!3d21.0346432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313456a8a9642663%3A0x3cd6a2c38e4261a!2zVUJORCB4w6MgxJDhuq9jIFPhu58!5e0!3m2!1svi!2s!4v1690529863337!5m2!1svi!2s"
          loading="lazy"
        />
      </FooterContentContainer>
      <FooterBottomContainer>©Bản quyền thuộc về công ty SAM Việt Nam</FooterBottomContainer>
    </FooterContainer>
  );
};

export default Footer;
